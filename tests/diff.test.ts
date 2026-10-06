import { strict as assert } from 'node:assert';
import { resolve } from 'node:path';
import { test } from 'node:test';
import { ROOT, run } from '../scripts/common.ts';
import { differentialDestination, nativeFinding } from '../scripts/diff.ts';
import { fixtureMatches } from '../scripts/validate.ts';
import type { CaseResult } from '../scripts/types.ts';

test('differential findings require the exact fixture baseline including empty stderr', async () => {
  const clean = await run([process.execPath, '-e', 'console.log("stable")']);
  const warning = await run([process.execPath, '-e', 'console.log("stable"); console.error("warning")']);
  const wrong = await run([process.execPath, '-e', 'console.log("wrong")']);
  const c = { expectedStdout: 'stable\n', tier: 'static', deferredSites: [] } as unknown as CaseResult;
  assert.equal(fixtureMatches(c, clean), true);
  assert.equal(nativeFinding(c, clean, clean), null);
  assert.equal(nativeFinding(c, clean, wrong), 'false coverage');
  assert.equal(fixtureMatches(c, warning), false);
  assert.equal(nativeFinding(c, warning, wrong), null);
  assert.equal(nativeFinding(c, warning, warning), null);
  assert.equal(fixtureMatches({ ...c, expectedStdout: undefined }, clean), false);
  assert.equal(nativeFinding({ ...c, expectedStdout: undefined }, clean, wrong), null);
});

test('differential destinations mirror reserved map names and reject resolved collisions', () => {
  const map = 'reports/shards/input.json';
  for (const path of [map, './reports/shards/./input.json', resolve(ROOT, map),
    'reports/coverage-map.json', 'reports/./map-session.json', 'reports/checkpoint.json', 'reports/provenance.json',
    'reports/control.json', 'reports/corpus-validation.json', 'reports/aggregate.json',
    'reports/shards/other-map.json', 'reports/raw/x.differentials.json', 'reports/upstream/x.differentials.json',
    '../outside.differentials.json', 'reports/../../outside.differentials.json']) {
    assert.throws(() => differentialDestination(path, map), /DIFF_REPORT/);
  }
  assert.throws(() => differentialDestination('reports/shards/input.differentials.json', 'reports/shards/./input.differentials.json'), /collides/);
  assert.equal(differentialDestination('reports/differentials.json', map), resolve(ROOT, 'reports/differentials.json'));
  assert.equal(differentialDestination('./reports/shards/./isolated.differentials.json', map), resolve(ROOT, 'reports/shards/isolated.differentials.json'));
});
