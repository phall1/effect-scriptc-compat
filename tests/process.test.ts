import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { run, sameBytes } from '../scripts/common.ts';
import { differences } from '../scripts/diff.ts';

test('byte-preserving output records distinguish invalid UTF-8', async () => {
  const a = await run([process.execPath, '-e', 'process.stdout.write(Buffer.from([255]))']);
  const b = await run([process.execPath, '-e', 'process.stdout.write(Buffer.from([254]))']);
  assert.equal(a.stdout, b.stdout); assert.notEqual(a.stdoutBase64, b.stdoutBase64);
  assert.equal(sameBytes(a, b), false); assert.deepEqual(differences(a, b), ['stdout']);
});
test('exit and stderr differences count', async () => {
  const a = await run([process.execPath, '-e', 'console.error("x"); process.exitCode=3']);
  const b = await run([process.execPath, '-e', 'console.error("y"); process.exitCode=4']);
  assert.deepEqual(differences(a, b), ['stderr', 'exitCode']);
});
test('timeout is a finding even for otherwise identical output', async () => {
  const r = await run([process.execPath, '-e', 'setInterval(()=>{},1000)'], 100);
  assert.equal(r.timedOut, true); assert.equal(sameBytes(r, r), false);
});
test('spawn failure is recorded without an unhandled exception', async () => {
  const r = await run(['/does-not-exist-effect-harness-command']);
  assert.ok(r.spawnError); assert.equal(r.exitCode, -2);
});
