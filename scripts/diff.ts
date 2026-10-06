import { existsSync } from 'node:fs';
import { relative, resolve } from 'node:path';
import { assertProvenance, concurrent, fileSha, json, provenance, raw, readJson, ROOT, run, sameBytes, sha } from './common.ts';
import { fixtureMatches } from './validate.ts';
import type { Attempt, CaseResult, Differential, DiffReport, MapReport, Run } from './types.ts';

export function differences(a: Run, b: Run): string[] {
  const result: string[] = [];
  if (a.stdoutBase64 !== b.stdoutBase64) result.push('stdout');
  if (a.stderrBase64 !== b.stderrBase64) result.push('stderr');
  if (a.exitCode !== b.exitCode) result.push('exitCode');
  if (a.signal !== b.signal) result.push('signal');
  if (a.timedOut || b.timedOut) result.push('timeout');
  if (a.spawnError || b.spawnError) result.push('spawnError');
  return result;
}
export function deltaSignature(a: Run, b: Run): string {
  // Exact bytes are intentional: do not normalize paths, whitespace or diagnostics.
  return sha(JSON.stringify({ node: { out: a.stdoutBase64, err: a.stderrBase64, code: a.exitCode, signal: a.signal, timeout: a.timedOut },
    native: { out: b.stdoutBase64, err: b.stderrBase64, code: b.exitCode, signal: b.signal, timeout: b.timedOut } })).slice(0, 16);
}

export function differentialDestination(path: string, mapPath: string): string {
  const destination = resolve(ROOT, path);
  if (destination === resolve(ROOT, mapPath)) throw new Error('DIFF_REPORT collides with MAP_REPORT');
  const reportPath = relative(resolve(ROOT, 'reports'), destination);
  const parts = reportPath.split('/');
  // Map accepts arbitrary JSON names but reserves *.differentials.json. Mirror
  // that contract so a differential cannot overwrite another map or metadata.
  const isDifferential = reportPath === 'differentials.json' || reportPath.endsWith('.differentials.json');
  if (!isDifferential || parts.includes('..') || path.includes('\\')) throw new Error('DIFF_REPORT must be reports/differentials.json or an isolated *.differentials.json inside reports/');
  if (['raw', 'ci', 'upstream', 'imported', 'triage', 'version-checks'].includes(parts[0]!)) throw new Error('DIFF_REPORT collides with reserved evidence');
  return destination;
}

function interrupted(r: Run): boolean { return Boolean(r.timedOut || r.signal || r.spawnError); }

export function nativeFinding(c: CaseResult, node: Run, native: Run): Differential['finding'] {
  if (!fixtureMatches(c, node) || sameBytes(node, native)) return null;
  if (interrupted(node) || interrupted(native)) return 'crash/hang';
  const deferredCodes = c.deferredSites.flatMap(site => site.match(/\bSC\d{4}\b/g) ?? []);
  const trap = native.exitCode !== 0 && deferredCodes.some(code => new RegExp(`\\b${code}\\b`).test(native.stderr));
  if (trap) return 'deferred runtime trap';
  return c.tier === 'static' ? 'false coverage' : 'semantic divergence';
}

async function compareBinary({ c, a }: { c: CaseResult; a: Attempt }): Promise<Differential> {
  if (!a.binary || !c.tier || !a.binarySha256) throw new Error(`Invalid binary record for ${c.id}`);
  if (!existsSync(resolve(ROOT, a.binary)) || fileSha(a.binary) !== a.binarySha256) throw new Error(`Missing/stale binary ${a.binary}; run pnpm map`);
  if (fileSha(c.file) !== c.sourceSha256) throw new Error(`Case ${c.id} changed since mapping; run pnpm map`);
  const node = await run([process.execPath, '--experimental-strip-types', c.file], 30_000);
  const native = await run([resolve(ROOT, a.binary)], 30_000);
  raw(`reports/raw/${c.id}.${a.mode}.node`, node);
  raw(`reports/raw/${c.id}.${a.mode}.native`, native);
  const diff = differences(node, native), equal = sameBytes(node, native), baselineValid = fixtureMatches(c, node);
  console.log(`${c.id} (${a.mode}): ${equal ? 'equal' : diff.join(', ')}${baselineValid ? '' : ' [INVALID NODE BASELINE]'}`);
  return { caseId: c.id, module: c.module, family: c.family, entrypoint: c.entrypoint, tier: c.tier,
    mode: a.mode, binary: a.binary, binarySha256: a.binarySha256, node, native, equal, differences: diff, finding: nativeFinding(c, node, native),
    signature: equal ? null : deltaSignature(node, native), baselineValid };
}

export async function main(): Promise<void> {
  const mapPath = process.env.MAP_REPORT ?? 'reports/coverage-map.json';
  const destination = differentialDestination(process.env.DIFF_REPORT ?? 'reports/differentials.json', mapPath);
  const map = readJson<MapReport>(mapPath);
  const currentProvenance = await provenance();
  assertProvenance(map.provenance, currentProvenance);
  const jobs = Number(process.env.DIFF_JOBS ?? 2);
  if (!Number.isInteger(jobs) || jobs < 1 || jobs > 32) throw new Error('DIFF_JOBS must be an integer between 1 and 32');
  const list = map.cases.flatMap(c => [c.staticAttempt, c.dynamicAttempt].filter(a => a?.binary).map(a => ({ c, a: a! })));
  const results = await concurrent(list, jobs, compareBinary);
  const report: DiffReport = { schemaVersion: 1, partial: map.partial ?? false, generatedAt: new Date().toISOString(), provenance: currentProvenance, timeoutMs: 30000,
    results, summary: { binaries: results.length, equal: results.filter(r => r.equal).length, mismatched: results.filter(r => !r.equal).length,
      invalidNodeBaselines: results.filter(r => !r.baselineValid).length, hangs: results.filter(r => r.node.timedOut || r.native.timedOut).length } };
  json(destination, report);
  console.log(JSON.stringify(report.summary));
  if (results.some(r => !r.baselineValid)) process.exitCode = 2;
  else if (results.some(r => !r.equal)) process.exitCode = 1;
}
if (process.argv[1] && resolve(process.argv[1]) === resolve(import.meta.filename)) await main();
