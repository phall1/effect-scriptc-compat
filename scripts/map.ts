import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { binaryInfo, cacheIdentityFor, cases, concurrent, fileSha, json, ok, provenance, raw, readJson, ROOT, run, sha, SCRIPTC, typecheckCommand } from './common.ts';
import { control } from './control.ts';
import { diagnostics, enrichDeferredLocations, parseCoverage, tierFor } from './coverage.ts';
import type { Attempt, Case, CaseResult, MapReport, Provenance } from './types.ts';

const jobs = Number(process.env.MAP_JOBS ?? 2);
const compileTimeoutMs = Number(process.env.COMPILE_TIMEOUT_MS ?? 180_000);
const coverageTimeoutMs = Number(process.env.COVERAGE_TIMEOUT_MS ?? 180_000);
if (![compileTimeoutMs, coverageTimeoutMs].every(n => Number.isSafeInteger(n) && n > 0)) throw new Error('Compile and coverage timeouts must be positive integer milliseconds');
if (!Number.isInteger(jobs) || jobs < 1 || jobs > 32) throw new Error('MAP_JOBS must be an integer between 1 and 32');
mkdirSync(resolve(ROOT, 'bin'), { recursive: true });
mkdirSync(resolve(ROOT, 'reports/raw'), { recursive: true });
const p = await provenance();
const identityFor = cacheIdentityFor;
const cacheIdentity = identityFor(p, { compileTimeoutMs, coverageTimeoutMs });
const oldReports: MapReport[] = [];
if (process.env.MAP_RESUME === '1') {
  const paths = [...(existsSync(resolve(ROOT, 'reports/coverage-map.json')) ? ['reports/coverage-map.json'] : []), ...(existsSync(resolve(ROOT, 'reports/shards')) ? readdirSync(resolve(ROOT, 'reports/shards')).filter(f => f.endsWith('.json')).map(f => `reports/shards/${f}`) : [])];
  for (const path of paths) { const candidate = readJson<MapReport>(path); if (candidate.schemaVersion === 1 && candidate.provenance && candidate.options && Array.isArray(candidate.cases)) oldReports.push(candidate); }
}
json('reports/provenance.json', p);
await control();
const fullList = cases();
let selectedIds = process.env.MAP_CASES ? new Set(process.env.MAP_CASES.split(',')) : null;
const shardTotal = Number(process.env.MAP_SHARD_TOTAL ?? 1);
const shardIndex = Number(process.env.MAP_SHARD_INDEX ?? 0);
if (!Number.isInteger(shardTotal) || shardTotal < 1 || shardTotal > 64 || !Number.isInteger(shardIndex) || shardIndex < 0 || shardIndex >= shardTotal) throw new Error('Invalid zero-based MAP_SHARD_INDEX / MAP_SHARD_TOTAL');
if (shardTotal > 1) {
  if (selectedIds) throw new Error('Choose MAP_CASES or modulo sharding, not both');
  selectedIds = new Set(fullList.filter((_, index) => index % shardTotal === shardIndex).map(c => c.id));
}
const list = selectedIds ? fullList.filter(c => selectedIds.has(c.id)) : fullList;

async function attempt(c: Case, mode: 'static' | 'dynamic'): Promise<Attempt> {
  const prefix = `reports/raw/${c.id}.${mode}`;
  const flags = mode === 'static' ? [] : ['--dynamic'];
  const binary = `bin/${c.id}${mode === 'dynamic' ? '.dynamic' : ''}`;
  rmSync(resolve(ROOT, binary), { force: true }); // never accept a stale binary
  const coverage = await run([SCRIPTC, 'coverage', c.file, '--npm-static=effect', ...flags], coverageTimeoutMs);
  raw(prefix + '.coverage', coverage);
  const parsedCoverage = parseCoverage(coverage.stdout + '\n' + coverage.stderr);
  if (!ok(coverage)) { parsedCoverage.parsed = false; parsedCoverage.notes.push('Coverage command failed; parsed partial counts cannot establish static compatibility'); }
  const build = await run([SCRIPTC, 'build', c.file, '--npm-static=effect', ...flags, '-o', binary], compileTimeoutMs);
  raw(prefix + '.build', build);
  if (ok(build) && existsSync(resolve(ROOT, binary + '.ll'))) enrichDeferredLocations(parsedCoverage, readFileSync(resolve(ROOT, binary + '.ll'), 'utf8'));
  const info = ok(build) ? binaryInfo(binary) : { binary: null, binarySize: null, binarySha256: null };
  return { mode, coverage, parsedCoverage, build, diagnostics: diagnostics(build.stdout + '\n' + build.stderr), ...info };
}
async function mapCase(c: Case, index: number): Promise<CaseResult> {
  const base: CaseResult = { ...c, effectVersion: p.effectVersion, scriptcVersion: p.scriptcVersion,
    cacheIdentity, sourceSha256: existsSync(resolve(ROOT, c.file)) ? fileSha(c.file) : '',
    typecheck: null, tier: null, staticAttempt: null, dynamicAttempt: null,
    scCodes: [], sourceLocations: [], rewriteHints: [], deferredSites: [], notes: [] };
  if (c.status !== 'ready') return base;
  const priorPath = `reports/raw/${c.id}.result.json`;
  if (process.env.MAP_RESUME === '1' && existsSync(resolve(ROOT, priorPath))) {
    const prior = readJson<CaseResult>(priorPath);
    const contextMatches = prior.cacheIdentity === cacheIdentity || (!prior.cacheIdentity && oldReports.some(r => identityFor(r.provenance, r.options) === cacheIdentity && r.cases.some(old => JSON.stringify(old) === JSON.stringify(prior))));
    if (contextMatches && prior.sourceSha256 === base.sourceSha256 && prior.effectVersion === p.effectVersion && prior.scriptcVersion === p.scriptcVersion && prior.tier && [prior.staticAttempt, prior.dynamicAttempt].filter(Boolean).every(a => !a!.binary || (existsSync(resolve(ROOT, a!.binary!)) && fileSha(a!.binary!) === a!.binarySha256))) { for (const a of [prior.staticAttempt, prior.dynamicAttempt]) {
        if (!a) continue;
        a.parsedCoverage = parseCoverage(a.coverage.stdout + '\n' + a.coverage.stderr);
        if (!ok(a.coverage)) a.parsedCoverage.parsed = false;
        if (a.binary && existsSync(resolve(ROOT, a.binary + '.ll'))) enrichDeferredLocations(a.parsedCoverage, readFileSync(resolve(ROOT, a.binary + '.ll'), 'utf8'));
      }
      prior.sourceLocations = [...new Set([prior.staticAttempt, prior.dynamicAttempt].flatMap(a => a ? [...a.diagnostics, ...a.parsedCoverage.diagnostics].flatMap(d => d.sourceLocations) : []))];
      prior.tier = tierFor(Boolean(prior.staticAttempt?.binary), prior.staticAttempt!.parsedCoverage, Boolean(prior.dynamicAttempt?.binary));
      console.log(`[resume] ${c.id}: ${prior.tier}`); return { ...prior, ...c, cacheIdentity };   }
  }
  const source = readFileSync(resolve(ROOT, c.file), 'utf8');
  const imports = [...source.matchAll(/(?:from\s*|import\s*\()\s*["']([^"']+)["']/g)].map(m => m[1]!);
  if (imports.some(s => s !== 'effect' && !s.startsWith('effect/'))) throw new Error(`Non-Effect import in ${c.file}`);
  base.typecheck = await run(typecheckCommand(c.file), 60_000);
  raw(`reports/raw/${c.id}.typecheck`, base.typecheck);
  if (!ok(base.typecheck)) {
    base.status = 'uncovered'; base.reason = 'Harness fixture does not typecheck against the installed published types';
    base.notes.push('Not classified as a scriptc compatibility failure; fix this fixture before interpreting the map.');
    return base;
  }
  base.staticAttempt = await attempt(c, 'static');
  if (!base.staticAttempt.binary) base.dynamicAttempt = await attempt(c, 'dynamic');
  const attempts = [base.staticAttempt, base.dynamicAttempt].filter((x): x is Attempt => x !== null);
  base.tier = tierFor(Boolean(base.staticAttempt.binary), base.staticAttempt.parsedCoverage, Boolean(base.dynamicAttempt?.binary));
  const ds = attempts.flatMap(a => [...a.parsedCoverage.diagnostics, ...a.diagnostics]);
  base.scCodes = [...new Set(ds.map(d => d.code))];
  base.sourceLocations = [...new Set(ds.flatMap(d => d.sourceLocations))];
  base.rewriteHints = [...new Set(ds.flatMap(d => d.rewriteHints))];
  base.deferredSites = [...new Set(attempts.flatMap(a => a.parsedCoverage.deferredSites))];
  base.notes.push(...new Set(attempts.flatMap(a => a.parsedCoverage.notes)));
  for (const a of attempts) {
    if (a.build.timedOut || a.coverage.timedOut) base.notes.push(`${a.mode}: compiler timeout; runtime compatibility is unknown`);
    if (!ok(a.build) && a.diagnostics.length === 0) base.notes.push(`${a.mode}: compiler failure without an SC code; see complete raw diagnostic`);
    if (a.binary && !a.parsedCoverage.parsed) base.notes.push(`${a.mode}: coverage unparseable; conservatively marked deferred, not established static`);
    if (ok(a.build) && !a.binary) base.notes.push(`${a.mode}: compiler returned zero without producing the requested binary`);
  }
  json(`reports/raw/${c.id}.result.json`, base);
  console.log(`[${index + 1}/${list.length}] ${c.id}: ${base.tier}`);
  return base;
}
function summarize(results: CaseResult[]): Record<string, unknown> {
  const groups = new Map<string, CaseResult[]>();
  for (const c of results) groups.set(c.module, [...(groups.get(c.module) ?? []), c]);
  const moduleTiers: Record<string, number> = { static: 0, deferred: 0, 'dynamic-fallback': 0, rejected: 0, uncovered: 0, 'skipped-needs-io': 0 };
  for (const cs of groups.values()) {
    const t = cs.some(c => c.tier === 'rejected') ? 'rejected' : cs.some(c => c.tier === 'dynamic-fallback') ? 'dynamic-fallback' : cs.some(c => c.tier === 'deferred') ? 'deferred' : cs.some(c => c.status === 'uncovered') ? 'uncovered' : cs.every(c => c.status === 'skipped-needs-io') ? 'skipped-needs-io' : 'static';
    moduleTiers[t] = (moduleTiers[t] ?? 0) + 1;
  }
  const scCodes: Record<string, number> = {};
  for (const c of results) for (const code of c.scCodes) scCodes[code] = (scCodes[code] ?? 0) + 1;
  return { cases: results.length, modules: groups.size, caseTiers: Object.fromEntries(['static', 'deferred', 'dynamic-fallback', 'rejected'].map(t => [t, results.filter(c => c.tier === t).length])),
    skippedNeedsIo: results.filter(c => c.status === 'skipped-needs-io').length, uncovered: results.filter(c => c.status === 'uncovered').length,
    moduleTiers, scCodesByCaseFrequency: Object.fromEntries(Object.entries(scCodes).sort((a, b) => b[1] - a[1])) };
}
function markdown(report: MapReport): string {
  const lines = ['# Effect × scriptc coverage map', '', `Generated: ${report.generatedAt}`, '',
    `Effect **${p.effectVersion}** · scriptc **${p.scriptcVersion}** (${p.scriptcReleaseTag}, ${p.scriptcReleaseCommit}) · Node **${p.nodeVersion}** · TypeScript **${p.typescriptVersion}** · ${p.hostTriple}`, '',
    '> A successful build or green coverage footer is not compatibility when deferred sites remain. Static is a compiler classification; the differential report determines observed equality. Counts below are scriptc statement counts, not a census of all Effect implementation statements. An untested API in a tested module is not implicitly compatible.', '',
    '## Summary', '', '| Measure | Value |', '| --- | ---: |'];
  const s = report.summary;
  for (const [k, v] of Object.entries(s)) if (typeof v === 'number') lines.push(`| ${k} | ${v} |`);
  for (const [k, v] of Object.entries(s.moduleTiers as Record<string, number>)) lines.push(`| Modules ${k === 'static' ? 'fully static for tested entrypoints' : k} | ${v} |`);
  lines.push('', '### SC codes by case frequency', '', '| SC code | Cases |', '| --- | ---: |');
  for (const [k, v] of Object.entries(s.scCodesByCaseFrequency as object)) lines.push(`| ${k} | ${v} |`);
  if (!Object.keys(s.scCodesByCaseFrequency as object).length) lines.push('| None emitted | 0 |');
  for (const module of [...new Set(report.cases.map(c => c.module))].sort()) {
    lines.push('', `## ${module}`, '', '| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |', '| --- | --- | --- | --- | --- | ---: | ---: | --- |');
    for (const c of report.cases.filter(c => c.module === module)) {
      const a = c.staticAttempt, d = c.dynamicAttempt, counts = a?.parsedCoverage.counts;
      const status = (x: Attempt | null) => !x ? 'not run' : x.binary ? 'built' : x.build.timedOut ? 'timeout' : 'refused';
      lines.push(`| [${c.id}](../${c.file}) / ${c.entrypoint} | ${c.tier ?? c.status} | ${status(a)} | ${status(d)} | ${counts ? `${counts.static ?? '?'}/${counts.dynamic ?? '?'}/${counts.unsupported ?? '?'}` : '—'} | ${a?.parsedCoverage.deferredSiteCount ?? 0}/${d?.parsedCoverage.deferredSiteCount ?? 0} | ${a?.binarySize ?? d?.binarySize ?? '—'} | ${c.scCodes.join(', ') || '—'} |`);
      if (c.reason) lines.push(`\n${c.id}: ${c.reason}\n`);
    }
  }
  lines.push('', '## Evidence and scope', '', '- Full raw stdout, stderr, status, command and timing: `reports/raw/`', '- Exact versions and lockfile hashes: `reports/provenance.json`', '- Public export inventory and source-derived API evidence: `cases/`', '- `maxRssKb` is null when not sampled; elapsed time is recorded but never gates compatibility', '- Source locations / rewrite hints are empty when the CLI does not provide them; grouped coverage sites may name only an SC code and construct', '- Rejected cases without SC codes represent compiler crashes, timeouts, or tool failures, never invented diagnostic codes', '');
  return lines.join('\n');
}
const results = await concurrent(list, jobs, mapCase);
const inventoryPath = ['cases/public-exports.json', 'cases/inventory.json', 'cases/exports.json'].find(path => existsSync(resolve(ROOT, path)));
const report: MapReport = { schemaVersion: 1, generatedAt: new Date().toISOString(), provenance: p,
  options: { compileTimeoutMs, coverageTimeoutMs, jobs }, inventory: inventoryPath ? readJson(inventoryPath) : null,
  cases: results, summary: summarize(results) };
if (selectedIds) {
  json(`reports/shards/${process.env.MAP_SHARD_NAME ?? (shardTotal > 1 ? `shard-${shardIndex}-of-${shardTotal}` : 'selected')}.json`, { ...report, partial: true, shardIndex, shardTotal, manifestSha256: fileSha('cases/manifest.json'), fullInventoryCases: fullList.length });
} else {
  json('reports/coverage-map.json', report);
  writeFileSync(resolve(ROOT, 'reports/coverage-map.md'), markdown(report));
}
console.log(JSON.stringify(report.summary, null, 2));
if (results.some(c => c.status === 'uncovered' && c.reason?.includes('does not typecheck'))) process.exitCode = 2;
