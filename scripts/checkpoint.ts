import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cacheIdentityFor, cases, fileSha, json, readJson, ROOT } from './common.ts';
import { enrichDeferredLocations } from './coverage.ts';
import type { CaseResult, MapReport, Provenance } from './types.ts';

// Save only completed observations on this host; a background map may still be
// writing other per-command files. No binary is classified from a partial run.
const p = readJson<Provenance>('reports/provenance.json');
const previous = readJson<MapReport>('reports/coverage-map.json');
if (previous.provenance.nodeVersion !== p.nodeVersion || previous.provenance.effectVersion !== p.effectVersion || previous.provenance.scriptcVersion !== p.scriptcVersion || previous.provenance.lockfileSha256 !== p.lockfileSha256 || previous.provenance.typescriptVersion !== p.typescriptVersion || previous.provenance.cliSha256 !== p.cliSha256 || previous.provenance.hostTriple !== p.hostTriple || previous.provenance.commands.linker?.stdout !== p.commands.linker?.stdout) throw new Error('Checkpoint context differs from previous map; perform a fresh map instead');
const expectedIdentity = cacheIdentityFor(p, previous.options);
let complete = 0;
const manuallyAssertedLegacyCases: string[] = [];
const results: CaseResult[] = cases().map(c => {
  const sourceSha256 = fileSha(c.file), path = `reports/raw/${c.id}.result.json`;
  if (c.status === 'ready' && existsSync(resolve(ROOT, path))) {
    let r: CaseResult;
    try { r = readJson<CaseResult>(path); } catch { return { ...c, effectVersion: p.effectVersion, scriptcVersion: p.scriptcVersion, sourceSha256, typecheck: null, tier: null, staticAttempt: null, dynamicAttempt: null, scCodes: [], sourceLocations: [], rewriteHints: [], deferredSites: [], notes: ['Pending: checkpoint file was being written; retry after the command completes.'] }; }
    const legacyRecord = previous.cases.find(old => old.id === r.id && old.sourceSha256 === r.sourceSha256);
    const legacyEvidenceMatches = legacyRecord && [legacyRecord.staticAttempt?.build, legacyRecord.staticAttempt?.coverage, legacyRecord.dynamicAttempt?.build, legacyRecord.dynamicAttempt?.coverage].every((old, i) => JSON.stringify(old) === JSON.stringify([r.staticAttempt?.build, r.staticAttempt?.coverage, r.dynamicAttempt?.build, r.dynamicAttempt?.coverage][i]));
    const contextValid = r.cacheIdentity === expectedIdentity || (!r.cacheIdentity && (legacyEvidenceMatches || process.env.CHECKPOINT_ACCEPT_LEGACY_CONTEXT === '1'));
    const binariesValid = [r.staticAttempt, r.dynamicAttempt].filter(Boolean).every(a => !a!.binary || (existsSync(resolve(ROOT, a!.binary!)) && fileSha(a!.binary!) === a!.binarySha256));
    if (contextValid && binariesValid && r.sourceSha256 === sourceSha256 && r.effectVersion === p.effectVersion && r.scriptcVersion === p.scriptcVersion) {
      for (const a of [r.staticAttempt, r.dynamicAttempt]) if (a?.binary && existsSync(resolve(ROOT, a.binary + '.ll'))) enrichDeferredLocations(a.parsedCoverage, readFileSync(resolve(ROOT, a.binary + '.ll'), 'utf8'));
      r.sourceLocations = [...new Set([r.staticAttempt, r.dynamicAttempt].flatMap(a => a ? [...a.diagnostics, ...a.parsedCoverage.diagnostics].flatMap(d => d.sourceLocations) : []))];
      if (!r.cacheIdentity && !legacyEvidenceMatches) { manuallyAssertedLegacyCases.push(c.id); r.notes.push('Legacy checkpoint context manually asserted by CHECKPOINT_ACCEPT_LEGACY_CONTEXT; original record predates per-case cache fingerprints.'); }
      complete++; return { ...r, ...c };
    }
  }
  return { ...c, effectVersion: p.effectVersion, scriptcVersion: p.scriptcVersion, sourceSha256, typecheck: null, tier: null,
    staticAttempt: null, dynamicAttempt: null, scCodes: [], sourceLocations: [], rewriteHints: [], deferredSites: [],
    notes: c.status === 'ready' ? ['Pending: full coverage/build attempts have not completed for this exact source.'] : [] };
});
const ready = results.filter(c => c.status === 'ready').length;
const summary = { inventoryCases: results.length, ready, completed: complete, pending: ready - complete,
  uncovered: results.filter(c => c.status === 'uncovered').length, skippedNeedsIo: results.filter(c => c.status === 'skipped-needs-io').length,
  caseTiers: Object.fromEntries(['static', 'deferred', 'dynamic-fallback', 'rejected'].map(t => [t, results.filter(c => c.tier === t).length])) };
const report: MapReport = { schemaVersion: 1, partial: complete < ready, generatedAt: new Date().toISOString(), provenance: p,
  options: { ...previous.options, jobs: null }, inventory: readJson('cases/public-exports.json'), cases: results, summary };
json('reports/coverage-map.json', report);
json('reports/checkpoint.json', { generatedAt: report.generatedAt, status: report.partial ? 'in-progress' : 'mapped', executionContext: 'Composite live checkpoint; per-command evidence retained. Concurrent worker count is not inferred.', legacyContextOverride: process.env.CHECKPOINT_ACCEPT_LEGACY_CONTEXT === '1', manuallyAssertedLegacyCases, summary });
writeFileSync(resolve(ROOT, 'reports/coverage-map.md'), ['# Partial Effect × scriptc checkpoint', '', 'Saved progress from completed host observations. Pending cases are unmeasured, not compatible or rejected. See the differential report for executed binaries and the upstream index for verified packets.', '', '```json', JSON.stringify(summary, null, 2), '```', '', '| Case | Tier | SC codes |', '| --- | --- | --- |', ...results.filter(c => c.tier).map(c => `| ${c.id} | ${c.tier} | ${c.scCodes.join(', ')} |`), '', 'A green build with deferred sites is not compatibility. Full raw evidence is under reports/raw.', ''].join('\n'));
console.log(JSON.stringify(summary, null, 2));
