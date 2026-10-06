import { existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { json, readJson, ROOT } from './common.ts';
import type { Attempt, CaseResult, MapReport, MapSession } from './types.ts';

function moduleTier(cs: CaseResult[]): string {
  for (const tier of ['rejected', 'dynamic-fallback', 'deferred']) if (cs.some(c => c.tier === tier)) return tier;
  if (cs.some(c => c.status === 'ready' && c.tier === null)) return 'pending';
  if (cs.some(c => c.status === 'uncovered')) return 'uncovered';
  if (cs.some(c => c.status === 'skipped-needs-io')) return 'skipped-needs-io';
  return 'static';
}

export function summarize(results: CaseResult[]): Record<string, unknown> {
  const groups = Map.groupBy(results, c => c.module);
  const moduleTiers: Record<string, number> = { static: 0, deferred: 0, 'dynamic-fallback': 0, rejected: 0, pending: 0, uncovered: 0, 'skipped-needs-io': 0 };
  for (const cs of groups.values()) moduleTiers[moduleTier(cs)]!++;
  const scCodes: Record<string, number> = {};
  for (const c of results) for (const code of c.scCodes) scCodes[code] = (scCodes[code] ?? 0) + 1;
  const ready = results.filter(c => c.status === 'ready');
  const completed = ready.filter(c => c.tier !== null).length;
  return { cases: results.length, modules: groups.size, ready: ready.length, completed, pending: ready.length - completed,
    caseTiers: Object.fromEntries(['static', 'deferred', 'dynamic-fallback', 'rejected'].map(t => [t, results.filter(c => c.tier === t).length])),
    skippedNeedsIo: results.filter(c => c.status === 'skipped-needs-io').length, uncovered: results.filter(c => c.status === 'uncovered').length,
    moduleTiers, scCodesByCaseFrequency: Object.fromEntries(Object.entries(scCodes).sort((a, b) => b[1] - a[1])) };
}

function buildStatus(a: Attempt | null): string {
  if (!a) return 'not run';
  if (a.binary) return 'built';
  return a.build.timedOut ? 'timeout' : 'refused';
}

function statementCounts(a: Attempt | null): string {
  const counts = a?.parsedCoverage.counts;
  if (!counts) return '—';
  return [counts.static, counts.dynamic, counts.unsupported].map(n => n ?? '?').join('/');
}

function caseRow(c: CaseResult): string {
  const a = c.staticAttempt, d = c.dynamicAttempt;
  const deferredCounts = [a, d].map(a => a?.parsedCoverage.deferredSiteCount ?? 0).join('/');
  const bytes = a?.binarySize ?? d?.binarySize ?? '—';
  const cells = [`${c.id} / ${c.entrypoint}`, c.tier ?? c.status, buildStatus(a), buildStatus(d), statementCounts(a), deferredCounts, bytes, c.scCodes.join(', ') || '—'];
  return `| ${cells.join(' | ')} |`;
}

function moduleRows(module: string, cases: CaseResult[]): string[] {
  return ['', `## ${module}`, '', '| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |',
    '| --- | --- | --- | --- | --- | ---: | ---: | --- |', ...cases.flatMap(c => c.reason ? [caseRow(c), '', `${c.id}: ${c.reason}`, ''] : [caseRow(c)])];
}

export function markdown(report: MapReport): string {
  const p = report.provenance;
  return ['# Effect × scriptc coverage map', '', `Generated: ${report.generatedAt} · Partial: **${report.partial ?? false}**`, '',
    `Effect **${p.effectVersion}** · scriptc **${p.scriptcVersion}** (${p.scriptcReleaseTag}, ${p.scriptcReleaseCommit}) · Node **${p.nodeVersion}** · TypeScript **${p.typescriptVersion}** · ${p.hostTriple}`, '',
    '> A successful build or green coverage footer is not compatibility when deferred sites remain. Static is a compiler classification; differentials determine observed equality. Pending and untested APIs are never implicitly compatible.', '',
    '## Summary', '', '```json', JSON.stringify(report.summary, null, 2), '```',
    ...[...Map.groupBy(report.cases, c => c.module)].flatMap(([module, cs]) => moduleRows(module, cs)), '',
    '## Evidence and scope', '', '- Complete raw stdout, stderr, command, status and timing: `reports/raw/`',
    '- Exact toolchain, executable and lockfile hashes: `reports/provenance.json`',
    '- Statement counts include the compiler program graph and unreached remainder, not just reachable Effect code.',
    '- Empty source locations/hints mean unavailable, not absence of defects.',
    '- Uncoded compiler crashes/timeouts are retained without invented SC codes.', ''].join('\n');
}

export function saveMap(session: MapSession, results: CaseResult[]): MapReport {
  const pending = results.some(c => c.status === 'ready' && c.tier === null);
  const invalid = results.some(c => c.status === 'uncovered' && c.reason?.includes('does not typecheck'));
  const report: MapReport = { schemaVersion: 1, partial: session.partial || pending || invalid,
    generatedAt: new Date().toISOString(), provenance: session.provenance, options: session.options,
    inventory: existsSync(resolve(ROOT, 'cases/public-exports.json')) ? readJson('cases/public-exports.json') : null, cases: results, summary: summarize(results) };
  json(session.reportPath, { ...report, shardIndex: session.shardIndex, shardTotal: session.shardTotal, manifestSha256: session.manifestSha256 });
  writeFileSync(resolve(ROOT, session.reportPath.replace(/\.json$/, '.md')), markdown(report));
  return report;
}
