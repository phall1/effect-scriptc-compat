import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { fileSha, run } from '../scripts/common.ts';
import type { CaseResult, Differential, DiffReport, MapReport } from '../scripts/types.ts';
import { ddmin, deferredNames, differentialCoverage, reductionComplete, requestedFailures, retainedPacket } from '../scripts/reduce.ts';

test('line reduction preserves original predicate', async () => {
  const result = await ddmin(['noise', 'import', 'extra', 'failure', 'more'], async s => s.includes('import') && s.includes('failure'), 50);
  assert.equal(result.source, 'import\nfailure'); assert.equal(result.exhausted, false);
});
test('empty reduction selection is rejected, never expanded to the whole corpus', () => {
  assert.throws(() => requestedFailures([], ''), /Unknown reduction signatures/);
  assert.throws(() => requestedFailures([], '  '), /Unknown reduction signatures/);
});

test('budget bounded reduction never loses the failure', async () => {
  const result = await ddmin(['a', 'failure', 'b', 'c'], async s => s.includes('failure'), 1);
  assert.match(result.source, /failure/); assert.equal(result.attempts, 1);
});

test('packet retention requires the originating source and exact verification toolchain', t => {
  const dir = mkdtempSync(resolve(tmpdir(), 'effect-packet-test-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const repro = resolve(dir, 'repro.ts'); writeFileSync(repro, 'import { Effect } from "effect";\n');
  const origin = { key: 'failure', caseResult: { sourceSha256: 'original-source' } };
  const packet = { verified: true, signature: 'failure', verificationIdentity: 'toolchain', originSourceSha256: 'original-source', repro, sourceSha256: fileSha(repro) };
  assert.equal(retainedPacket(packet, origin, 'toolchain'), true);
  assert.equal(retainedPacket(packet, origin, 'changed-toolchain'), false);
  assert.equal(retainedPacket(packet, { ...origin, caseResult: { sourceSha256: 'changed-source' } }, 'toolchain'), false);
  assert.equal(retainedPacket({ ...packet, verificationIdentity: undefined }, origin, 'toolchain'), false);
  writeFileSync(repro, 'changed');
  assert.equal(retainedPacket(packet, origin, 'toolchain'), false);
});

test('deferred signatures preserve construct names rather than only SC code', () => {
  const a = deferredNames(['×2 first unsupported thing SC2020'], 'SC2020');
  const b = deferredNames(['×1 different unsupported thing SC2020'], 'SC2020');
  assert.notDeepEqual(a, b);
  assert.deepEqual(a, deferredNames(['×1  first   unsupported thing SC2020'], 'SC2020'));
});

test('reduction completeness requires every exact current binary pair and a nonpartial report', async () => {
  const node = await run([process.execPath, '-e', 'console.log("stable")']);
  const c = { id: 'static', expectedStdout: 'stable\n', staticAttempt: { mode: 'static', binary: 'bin/static', binarySha256: 'current-hash' }, dynamicAttempt: null } as unknown as CaseResult;
  const map = { partial: false, cases: [c] } as MapReport;
  const row = { caseId: c.id, mode: 'static', binarySha256: 'current-hash', baselineValid: true, node, equal: true } as Differential;
  const diff = { partial: false, results: [row] } as DiffReport;
  const complete = (d: DiffReport | null, m = map, verified = 0, total = 0) => reductionComplete(m, differentialCoverage(m, d), total, verified);
  assert.equal(complete(null), false);
  assert.equal(complete({ ...diff, results: [] }), false);
  assert.equal(complete({ ...diff, results: [{ ...row, binarySha256: 'old-hash' }] }), false);
  assert.equal(complete({ ...diff, results: [{ ...row, mode: 'dynamic' }] }), false);
  assert.equal(complete({ ...diff, results: [{ ...row, baselineValid: false }] }), false);
  const warning = { ...node, stderr: 'warning\n', stderrBase64: Buffer.from('warning\n').toString('base64') };
  assert.equal(complete({ ...diff, results: [{ ...row, node: warning }] }), false, 'do not trust a legacy baselineValid flag');
  assert.equal(complete({ ...diff, partial: true }), false);
  assert.equal(complete(diff, { ...map, partial: true }), false);
  assert.equal(complete(diff, map, 0, 1), false);
  assert.equal(complete(diff, map, 1, 1), true);
  assert.equal(complete(diff), true);
  const noBinaries = { ...map, cases: [] };
  const absentRows = { ...diff, results: undefined } as unknown as DiffReport;
  assert.equal(complete(absentRows, noBinaries), false, 'absent report rows are not a valid empty differential');
  assert.equal(differentialCoverage(noBinaries, absentRows).reportRowsPresent, false);
  assert.equal(complete({ ...diff, results: [] }, noBinaries), true, 'an explicit empty differential covers a no-binary map');
  const twoModes = { ...map, cases: [{ ...c, dynamicAttempt: { ...c.staticAttempt!, mode: 'dynamic' as const, binary: 'bin/static.dynamic' } }] };
  assert.equal(complete(diff, twoModes), false);
  assert.equal(complete({ ...diff, results: [row, { ...row, mode: 'dynamic' }] }, twoModes), true);
  assert.deepEqual(differentialCoverage(map, null).missing, ['static:static:current-hash']);
  assert.deepEqual(differentialCoverage(map, { ...diff, results: [{ ...row, node: warning }] }).invalidNodeBaselines, ['static:static:current-hash']);
});
