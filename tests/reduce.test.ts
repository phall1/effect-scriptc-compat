import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { fileSha } from '../scripts/common.ts';
import { ddmin, deferredNames, requestedFailures, retainedPacket } from '../scripts/reduce.ts';

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
