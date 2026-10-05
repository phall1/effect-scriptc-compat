import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { ddmin, deferredNames } from '../scripts/reduce.ts';

test('line reduction preserves original predicate', async () => {
  const result = await ddmin(['noise', 'import', 'extra', 'failure', 'more'], async s => s.includes('import') && s.includes('failure'), 50);
  assert.equal(result.source, 'import\nfailure'); assert.equal(result.exhausted, false);
});
test('budget bounded reduction never loses the failure', async () => {
  const result = await ddmin(['a', 'failure', 'b', 'c'], async s => s.includes('failure'), 1);
  assert.match(result.source, /failure/); assert.equal(result.attempts, 1);
});

test('deferred signatures preserve construct names rather than only SC code', () => {
  const a = deferredNames(['×2 first unsupported thing SC2020'], 'SC2020');
  const b = deferredNames(['×1 different unsupported thing SC2020'], 'SC2020');
  assert.notDeepEqual(a, b);
  assert.deepEqual(a, deferredNames(['×1  first   unsupported thing SC2020'], 'SC2020'));
});
