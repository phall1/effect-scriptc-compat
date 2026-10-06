import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileSha, ok, readJson, ROOT } from './common.ts';
import { enrichDeferredLocations, parseCoverage, tierFor } from './coverage.ts';
import type { Attempt, Case, CaseResult, MapSession } from './types.ts';

export function pendingCase(c: Case, session: MapSession): CaseResult {
  return { ...c, effectVersion: session.provenance.effectVersion, scriptcVersion: session.provenance.scriptcVersion,
    cacheIdentity: session.cacheIdentity, sourceSha256: fileSha(c.file), typecheck: null, tier: null,
    staticAttempt: null, dynamicAttempt: null, scCodes: [], sourceLocations: [], rewriteHints: [], deferredSites: [],
    notes: c.status === 'ready' ? ['Pending: complete compiler attempts are not available for this exact source/toolchain.'] : [] };
}

export function binaryValid(id: string, a: Attempt): boolean {
  if (!a.binary) return true;
  const expected = `bin/${id}${a.mode === 'dynamic' ? '.dynamic' : ''}`;
  return a.binary === expected && ok(a.build) && existsSync(resolve(ROOT, expected)) && fileSha(expected) === a.binarySha256;
}

export function refreshCoverage(a: Attempt): void {
  a.parsedCoverage = parseCoverage(a.coverage.stdout + '\n' + a.coverage.stderr);
  if (!ok(a.coverage)) {
    a.parsedCoverage.parsed = false;
    a.parsedCoverage.notes.push('Coverage command failed; partial counts cannot establish static compatibility');
  }
  if (a.binary && existsSync(resolve(ROOT, a.binary + '.ll'))) {
    enrichDeferredLocations(a.parsedCoverage, readFileSync(resolve(ROOT, a.binary + '.ll'), 'utf8'));
  }
}

export function classify(c: CaseResult): void {
  const attempts = [c.staticAttempt, c.dynamicAttempt].filter((a): a is Attempt => a !== null);
  for (const a of attempts) refreshCoverage(a);
  const ds = attempts.flatMap(a => [...a.parsedCoverage.diagnostics, ...a.diagnostics]);
  c.scCodes = [...new Set(ds.map(d => d.code))];
  c.sourceLocations = [...new Set(ds.flatMap(d => d.sourceLocations))];
  c.rewriteHints = [...new Set(ds.flatMap(d => d.rewriteHints))];
  c.deferredSites = [...new Set(attempts.flatMap(a => a.parsedCoverage.deferredSites))];
  c.tier = tierFor(Boolean(c.staticAttempt!.binary), c.staticAttempt!.parsedCoverage, Boolean(c.dynamicAttempt?.binary));
  c.notes = [...new Set(attempts.flatMap(a => a.parsedCoverage.notes))];
  for (const a of attempts) c.notes.push(...attemptNotes(a));
}

function attemptNotes(a: Attempt): string[] {
  const notes: string[] = [];
  if (a.build.timedOut || a.coverage.timedOut) notes.push(`${a.mode}: compiler timeout; runtime compatibility is unknown`);
  if (!ok(a.build) && a.diagnostics.length === 0) notes.push(`${a.mode}: compiler failure without an SC code; see complete raw diagnostic`);
  if (a.binary && !a.parsedCoverage.parsed) notes.push(`${a.mode}: coverage unparseable; conservatively marked deferred, not established static`);
  if (ok(a.build) && !a.binary) notes.push(`${a.mode}: compiler returned zero without producing the requested binary`);
  return notes;
}

function matchesSession(r: CaseResult, c: Case, session: MapSession): boolean {
  return r.id === c.id && r.file === c.file &&
    r.cacheIdentity === session.cacheIdentity && r.sourceSha256 === fileSha(c.file) &&
    r.effectVersion === session.provenance.effectVersion && r.scriptcVersion === session.provenance.scriptcVersion;
}

function invalidFixture(r: CaseResult): boolean {
  return r.status === 'uncovered' && r.typecheck !== null && !ok(r.typecheck) && r.tier === null &&
    r.staticAttempt === null && r.dynamicAttempt === null;
}

function completeAttempts(r: CaseResult): boolean {
  if (!r.typecheck || !ok(r.typecheck) || r.staticAttempt?.mode !== 'static') return false;
  if (r.staticAttempt.binary) return r.dynamicAttempt === null;
  return r.dynamicAttempt?.mode === 'dynamic';
}

export function completedCase(c: Case, session: MapSession): CaseResult | null {
  if (c.status !== 'ready') return null;
  try {
    const r = readJson<CaseResult>(`reports/raw/${c.id}.result.json`);
    if (!matchesSession(r, c, session)) return null;
    if (invalidFixture(r)) return { ...r, ...c, status: 'uncovered' };
    if (r.status !== 'ready' || !r.tier || !completeAttempts(r)) return null;
    const attempts = [r.staticAttempt!, r.dynamicAttempt].filter((a): a is Attempt => a !== null);
    if (!attempts.every(a => binaryValid(c.id, a))) return null;
    classify(r);
    return { ...r, ...c };
  } catch { return null; } // A partial, corrupt or legacy record is rerun, never asserted valid.
}
