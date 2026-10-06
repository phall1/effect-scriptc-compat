import { mkdirSync, readFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { binaryInfo, cacheIdentityFor, cases, concurrent, fileSha, json, ok, provenance, raw, ROOT, run, SCRIPTC, typecheckCommand } from './common.ts';
import { control } from './control.ts';
import { diagnostics, parseCoverage } from './coverage.ts';
import { classify, completedCase, pendingCase } from './checkpoints.ts';
import { saveMap } from './report.ts';
import type { Attempt, Case, CaseResult, MapSession } from './types.ts';

function positiveInteger(value: string, label: string, max = Number.MAX_SAFE_INTEGER): number {
  const n = Number(value);
  if (!Number.isSafeInteger(n) || n < 1 || n > max) throw new Error(`${label} must be an integer between 1 and ${max}`);
  return n;
}

function partition(env: NodeJS.ProcessEnv): { shardIndex: number; shardTotal: number } {
  const shardTotal = positiveInteger(env.MAP_SHARD_TOTAL ?? '1', 'MAP_SHARD_TOTAL', 64);
  const shardIndex = Number(env.MAP_SHARD_INDEX ?? 0);
  if (!Number.isInteger(shardIndex) || shardIndex < 0 || shardIndex >= shardTotal) throw new Error('Invalid zero-based MAP_SHARD_INDEX');
  if (shardTotal > 1 && env.MAP_CASES !== undefined) throw new Error('Choose MAP_CASES or modulo sharding, not both');
  return { shardIndex, shardTotal };
}

function destination(env: NodeJS.ProcessEnv, shardIndex: number, shardTotal: number, partial: boolean): string {
  const defaultName = shardTotal > 1 ? `shard-${shardIndex}-of-${shardTotal}` : 'selected';
  const name = env.MAP_SHARD_NAME ?? defaultName;
  if (!/^[a-zA-Z0-9._-]+$/.test(name)) throw new Error('Unsafe MAP_SHARD_NAME');
  const reportPath = env.MAP_REPORT ?? (partial ? `reports/shards/${name}.json` : 'reports/coverage-map.json');
  validateReportPath(reportPath);
  return reportPath;
}

function validateReportPath(path: string): void {
  if (!path.startsWith('reports/') || !path.endsWith('.json') || path.includes('..') || path.includes('\\')) throw new Error('MAP_REPORT must be a JSON path inside reports/');
  const reserved = new Set(['provenance.json', 'map-session.json', 'checkpoint.json', 'control.json', 'differentials.json', 'aggregate.json', 'corpus-validation.json']);
  const parts = path.split('/');
  if (parts.some(part => part === '' || part === '.')) throw new Error('MAP_REPORT must not contain empty/dot path components');
  if (reserved.has(parts.at(-1)!) || path.endsWith('.differentials.json') || ['raw', 'ci', 'upstream', 'imported'].includes(parts[1]!)) throw new Error('MAP_REPORT collides with reserved evidence');
}

export function selection(list: Case[], env: NodeJS.ProcessEnv): { list: Case[]; partial: boolean; shardIndex: number; shardTotal: number; reportPath: string } {
  const { shardIndex, shardTotal } = partition(env);
  const selected = selectCases(list, env.MAP_CASES, shardIndex, shardTotal);
  const partial = env.MAP_CASES !== undefined || shardTotal > 1;
  return { list: selected, partial, shardIndex, shardTotal, reportPath: destination(env, shardIndex, shardTotal, partial) };
}

function selectCases(list: Case[], requested: string | undefined, shardIndex: number, shardTotal: number): Case[] {
  if (requested === undefined) return list.filter((_, i) => i % shardTotal === shardIndex);
  const ids = requested.split(',').map(id => id.trim());
  const known = new Set(list.map(c => c.id));
  const invalid = ids.filter(id => !known.has(id));
  if (invalid.length) throw new Error(`Unknown or empty MAP_CASES: ${invalid.join(', ')}`);
  return list.filter(c => ids.includes(c.id));
}

async function attempt(c: Case, mode: 'static' | 'dynamic', session: MapSession): Promise<Attempt> {
  const prefix = `reports/raw/${c.id}.${mode}`;
  const flags = mode === 'static' ? [] : ['--dynamic'];
  const binary = `bin/${c.id}${mode === 'dynamic' ? '.dynamic' : ''}`;
  for (const path of [binary, binary + '.ll']) rmSync(resolve(ROOT, path), { force: true });
  const coverage = await run([SCRIPTC, 'coverage', c.file, '--npm-static=effect', ...flags], session.options.coverageTimeoutMs);
  raw(prefix + '.coverage', coverage);
  const build = await run([SCRIPTC, 'build', c.file, '--npm-static=effect', ...flags, '-o', binary], session.options.compileTimeoutMs);
  raw(prefix + '.build', build);
  const info = ok(build) ? binaryInfo(binary) : { binary: null, binarySize: null, binarySha256: null };
  return { mode, coverage, parsedCoverage: parseCoverage(coverage.stdout + '\n' + coverage.stderr), build,
    diagnostics: diagnostics(build.stdout + '\n' + build.stderr), ...info };
}

async function mapCase(c: Case, session: MapSession): Promise<CaseResult> {
  const base = pendingCase(c, session);
  if (c.status !== 'ready') return base;
  if (process.env.MAP_RESUME === '1') {
    const prior = completedCase(c, session);
    if (prior) { console.log(`[resume] ${c.id}: ${prior.tier}`); return prior; }
  }
  const source = readFileSync(resolve(ROOT, c.file), 'utf8');
  const imports = [...source.matchAll(/(?:from\s*|import\s*\()\s*["']([^"']+)["']/g)].map(m => m[1]!);
  if (imports.some(s => s !== 'effect' && !s.startsWith('effect/'))) throw new Error(`Non-Effect import in ${c.file}`);
  base.typecheck = await run(typecheckCommand(c.file), 60_000);
  raw(`reports/raw/${c.id}.typecheck`, base.typecheck);
  if (!ok(base.typecheck)) {
    base.status = 'uncovered'; base.reason = 'Harness fixture does not typecheck against the installed published types';
    base.notes = ['Not a scriptc compatibility failure; fix this fixture before interpreting the map.'];
    json(`reports/raw/${c.id}.result.json`, base);
    return base;
  }
  base.staticAttempt = await attempt(c, 'static', session);
  if (!base.staticAttempt.binary) base.dynamicAttempt = await attempt(c, 'dynamic', session);
  classify(base);
  json(`reports/raw/${c.id}.result.json`, base);
  console.log(`${c.id}: ${base.tier}`);
  return base;
}

export async function main(): Promise<void> {
  const options = { jobs: positiveInteger(process.env.MAP_JOBS ?? '2', 'MAP_JOBS', 32),
    compileTimeoutMs: positiveInteger(process.env.COMPILE_TIMEOUT_MS ?? '180000', 'COMPILE_TIMEOUT_MS'),
    coverageTimeoutMs: positiveInteger(process.env.COVERAGE_TIMEOUT_MS ?? '180000', 'COVERAGE_TIMEOUT_MS') };
  const selected = selection(cases(), process.env); // Reject mistakes before overwriting any evidence.
  mkdirSync(resolve(ROOT, 'bin'), { recursive: true });
  mkdirSync(resolve(ROOT, 'reports/raw'), { recursive: true });
  const p = await provenance();
  await control(options.compileTimeoutMs);
  const session: MapSession = { schemaVersion: 1, provenance: p, options, cacheIdentity: cacheIdentityFor(p, options),
    manifestSha256: fileSha('cases/manifest.json'), caseIds: selected.list.map(c => c.id),
    reportPath: selected.reportPath, partial: selected.partial, shardIndex: selected.shardIndex, shardTotal: selected.shardTotal };
  if (process.env.MAP_RESUME !== '1') for (const c of selected.list) rmSync(resolve(ROOT, `reports/raw/${c.id}.result.json`), { force: true });
  json('reports/provenance.json', p);
  json('reports/map-session.json', session);
  saveMap(session, selected.list.map(c => pendingCase(c, session)));
  const results = await concurrent(selected.list, options.jobs, c => mapCase(c, session));
  const report = saveMap(session, results);
  console.log(JSON.stringify(report.summary, null, 2));
  if (results.some(c => c.status === 'uncovered' && c.reason?.includes('does not typecheck'))) process.exitCode = 1;
}
if (process.argv[1] && resolve(process.argv[1]) === resolve(import.meta.filename)) await main();
