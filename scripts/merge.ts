import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { relative, resolve } from 'node:path';
import { cases, fileSha, json, linkerIdentity, pins, ROOT, sha } from './common.ts';
import type { CaseResult, DiffReport, MapReport } from './types.ts';

/** Aggregate evidence without pretending different runners share one provenance.
 * The ordinary host-local coverage map remains the authoritative local rerun.
 */
const input = resolve(ROOT, process.argv[2] ?? 'reports/imported');
if (!existsSync(input)) throw new Error(`No imported shard directory: ${input}`);
function files(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? files(resolve(dir, e.name)) : e.name.endsWith('.json') ? [resolve(dir, e.name)] : []);
}
const all = files(input).flatMap(path => {
  try { return [{ path: relative(ROOT, path), data: JSON.parse(readFileSync(path, 'utf8')) }]; } catch { throw new Error(`Unreadable JSON artifact ${path}`); }
});
const maps = all.filter((x): x is { path: string; data: MapReport } => x.data?.schemaVersion === 1 && x.data.provenance && Array.isArray(x.data.cases) && x.data.options);
const diffs = all.filter((x): x is { path: string; data: DiffReport } => x.data?.schemaVersion === 1 && x.data.provenance && Array.isArray(x.data.results) && x.data.timeoutMs === 30000);
if (!maps.length) throw new Error('No coverage shard reports found');
const manifest = cases();
for (const { path, data } of [...maps, ...diffs]) {
  if (data.provenance.effectVersion !== pins.effect || data.provenance.scriptcVersion !== pins.scriptc.npmVersion || data.provenance.scriptcReleaseCommit !== pins.scriptc.githubCommit || data.provenance.typescriptVersion !== pins.typescript) throw new Error(`Tool pin mismatch in ${path}`);
}
const sameContext = (a: MapReport['provenance'], b: MapReport['provenance']) => ['nodeVersion', 'effectVersion', 'typescriptVersion', 'scriptcVersion', 'scriptcReleaseCommit', 'hostTriple', 'kernel', 'lockfileSha256', 'effectPackageJsonSha256', 'cliSha256'].every(k => (a as unknown as Record<string, unknown>)[k] === (b as unknown as Record<string, unknown>)[k]) && linkerIdentity(a) === linkerIdentity(b);
const observations = manifest.map(c => {
  const sourceSha256 = fileSha(c.file);
  const candidates = maps.flatMap(m => m.data.cases.filter(r => r.id === c.id && r.sourceSha256 === sourceSha256 && (r.tier !== null || c.status !== 'ready')).map(r => ({ report: m.path, provenance: m.data.provenance, observation: r })));
  const measured = c.status !== 'ready' || candidates.some(x => x.observation.tier !== null);
  const tiers = [...new Set(candidates.map(x => x.observation.tier).filter(Boolean))];
  const differential = diffs.flatMap(d => d.data.results.filter(r => r.caseId === c.id && candidates.some(x => sameContext(x.provenance, d.data.provenance) && [x.observation.staticAttempt, x.observation.dynamicAttempt].some(a => a?.mode === r.mode && a.binarySha256 === r.binarySha256))).map(r => ({ report: d.path, provenance: d.data.provenance, observation: r })));
  const binariesWithoutValidDifferential = candidates.flatMap(x => [x.observation.staticAttempt, x.observation.dynamicAttempt].filter(a => a?.binary).filter(a => !differential.some(d => sameContext(x.provenance, d.provenance) && d.observation.mode === a!.mode && d.observation.binarySha256 === a!.binarySha256 && d.observation.baselineValid))).length;
  return { ...c, sourceSha256, measured, pending: !measured, tiers, disagreement: tiers.length > 1, binariesWithoutValidDifferential, observations: candidates, differentials: differential };
});
const ready = observations.filter(x => x.status === 'ready');
const summary = { manifests: maps.length, differentialReports: diffs.length, readyCases: ready.length, measuredReadyCases: ready.filter(x => x.measured).length,
  pendingReadyCases: ready.filter(x => !x.measured).length, mappingComplete: ready.every(x => x.measured),
  binariesWithoutValidDifferential: observations.reduce((n, x) => n + x.binariesWithoutValidDifferential, 0), invalidNodeBaselines: observations.reduce((n, x) => n + x.differentials.filter(d => !d.observation.baselineValid).length, 0), crossRunnerTierDisagreements: ready.filter(x => x.disagreement).length,
  binariesCompared: observations.reduce((n, x) => n + x.differentials.length, 0), mismatches: observations.reduce((n, x) => n + x.differentials.filter(d => !d.observation.equal).length, 0) };
json('reports/aggregate.json', { schemaVersion: 1, generatedAt: new Date().toISOString(), partial: !summary.mappingComplete || summary.binariesWithoutValidDifferential > 0 || summary.invalidNodeBaselines > 0, fullEvidenceComplete: summary.mappingComplete && summary.binariesWithoutValidDifferential === 0 && summary.invalidNodeBaselines === 0, manifestSha256: fileSha('cases/manifest.json'), summary, cases: observations });
writeFileSync(resolve(ROOT, 'reports/aggregate.md'), ['# Multi-runner evidence aggregate', '', 'Each observation retains its exact provenance. No runner, linker, raw output or disagreement is silently substituted. The local coverage map is kept separately.', '', '```json', JSON.stringify(summary, null, 2), '```', '', '| Case | Measured | Tiers observed | Runner disagreement |', '| --- | --- | --- | --- |', ...ready.map(x => `| ${x.id} | ${x.measured} | ${x.tiers.join(', ') || 'pending'} | ${x.disagreement} |`), ''].join('\n'));
console.log(JSON.stringify(summary, null, 2));
