import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { test } from 'node:test';
import { assignment, collect, configuration, finish, manifest, prepare, restore, ROOT, snapshot } from '../scripts/host-shards.mjs';

const hash = data => createHash('sha256').update(data).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const save = (root, path, data) => { mkdirSync(dirname(resolve(root, path)), { recursive: true }); writeFileSync(resolve(root, path), JSON.stringify(data)); };
const config = configuration({ INPUT_CAPACITY_CHECKED: 'true', INPUT_SHARDS: '2' });

function fixture(t) {
  const root = mkdtempSync(resolve(tmpdir(), 'host-shards-test-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(resolve(root, 'cases'));
  for (const id of ['zeta', 'alpha', 'beta']) writeFileSync(resolve(root, `cases/${id}.ts`), 'console.log("stable");\n');
  save(root, 'cases/manifest.json', ['zeta', 'alpha', 'beta'].map(id => ({ id, file: `cases/${id}.ts`, status: 'ready' })));
  for (const name of ['toolchain.json', 'package.json', 'pnpm-lock.yaml']) cpSync(resolve(ROOT, name), resolve(root, name));
  execFileSync('git', ['init', '--quiet'], { cwd: root });
  execFileSync('git', ['add', '.'], { cwd: root });
  execFileSync('git', ['-c', 'user.name=Harness Test', '-c', 'user.email=harness@example.invalid', '-c', 'commit.gpgsign=false', 'commit', '--quiet', '-m', 'Test corpus'], { cwd: root });
  const commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
  const snap = snapshot(root, commit);
  const env = { GITHUB_SHA: commit, EXPECTED_SNAPSHOT: snap.snapshotSha256, MAP_SHARD_INDEX: '0', GITHUB_RUN_ID: '123', GITHUB_RUN_ATTEMPT: '1', GITHUB_REPOSITORY: 'example/test', ImageOS: 'ubuntu24', ImageVersion: 'test' };
  return { root, commit, snap, env };
}

test('manual inputs are bounded, typed and never evaluated as shell', () => {
  assert.throws(() => configuration({}), /capacity/);
  for (const value of ['0', '65', '-1', '1.5', '01', '$(touch nope)', '1\nhello']) assert.throws(() => configuration({ INPUT_CAPACITY_CHECKED: 'true', INPUT_SHARDS: value }));
  for (const value of ['0,0', '2', '-1', '0;echo bad', '0,']) assert.throws(() => configuration({ INPUT_CAPACITY_CHECKED: 'true', INPUT_SHARDS: '2', INPUT_SHARD_INDICES: value }));
  for (const value of ['30000', '900001', 'Infinity', '0']) assert.throws(() => configuration({ INPUT_CAPACITY_CHECKED: 'true', INPUT_COMPILE_TIMEOUT_MS: value }));
  assert.throws(() => configuration({ INPUT_CAPACITY_CHECKED: 'true', INPUT_RESUME_RUN_ID: '../123' }));
  const c = configuration({ INPUT_CAPACITY_CHECKED: 'true', INPUT_SHARDS: '64', INPUT_SHARD_INDICES: '63, 0', INPUT_PARALLEL: '64', INPUT_RESUME_RUN_ID: '999', INPUT_RESUME_ATTEMPT: '2' });
  assert.deepEqual(c.indices, [0, 63]); assert.equal(c.parallel, 2); assert.equal(c.runReducer, false);
  assert.equal(c.worstCaseRunnerMinutes, 210);
  assert.equal(configuration({ INPUT_CAPACITY_CHECKED: 'true' }).worstCaseRunnerMinutes, 750);
  assert.throws(() => configuration({ INPUT_CAPACITY_CHECKED: 'true', INPUT_JOB_MINUTES: '361' }));
});

test('corpus snapshot is deterministic and modulo shards are disjoint/exhaustive', t => {
  const { root, commit, snap } = fixture(t);
  assert.deepEqual(snapshot(root, commit), snap);
  assert.deepEqual(snap.caseIds, ['alpha', 'beta', 'zeta']);
  for (const total of [1, 2, 8, 64]) {
    const all = Array.from({ length: total }, (_, i) => assignment(snap, total, i)).flat();
    assert.equal(new Set(all).size, snap.caseIds.length);
    assert.deepEqual(all.sort(), [...snap.caseIds].sort());
  }
  writeFileSync(resolve(root, 'cases/alpha.ts'), 'console.log("changed");\n');
  assert.notEqual(snapshot(root, commit).snapshotSha256, snap.snapshotSha256);
});

test('uncommitted, duplicate and symlink corpus inputs fail closed', t => {
  const { root, commit } = fixture(t);
  const records = read(resolve(root, 'cases/manifest.json'));
  save(root, 'cases/manifest.json', [...records, records[0]]);
  assert.throws(() => manifest(root), /Duplicate/);
  save(root, 'cases/manifest.json', [{ id: 'escape', file: 'cases/../../secret.ts' }]);
  assert.throws(() => manifest(root), /Unsafe/);
  save(root, 'cases/manifest.json', records);
  rmSync(resolve(root, 'cases/alpha.ts')); symlinkSync(resolve(root, 'cases/beta.ts'), resolve(root, 'cases/alpha.ts'));
  assert.throws(() => snapshot(root, commit), /Symlink/);
});

test('fresh runner discards checked-in reports and records precise assignment', t => {
  const { root, env, snap } = fixture(t);
  save(root, 'reports/coverage-map.json', { stale: true });
  save(root, 'bin/stale', { stale: true });
  prepare(root, env, config);
  assert.equal(existsSync(resolve(root, 'reports/coverage-map.json')), false);
  assert.equal(existsSync(resolve(root, 'bin/stale')), false);
  assert.deepEqual(read(resolve(root, 'reports/ci/runner.json')).assignedCases, ['alpha', 'zeta']);
  assert.equal(read(resolve(root, 'reports/ci/snapshot.json')).snapshotSha256, snap.snapshotSha256);
  assert.throws(() => prepare(root, { ...env, EXPECTED_SNAPSHOT: 'different' }, config), /snapshot differs/);
});

test('resume restores raw data only, rejects changed context, and never imports executables', t => {
  const { root, env } = fixture(t); prepare(root, env, config);
  save(root, 'reports/ci/toolchain.json', { resumeIdentity: 'same' });
  const source = resolve(root, '.work/prior');
  cpSync(resolve(root, 'reports'), source, { recursive: true });
  save(source, 'raw/alpha.result.json', { tier: 'rejected' });
  save(source, 'raw/beta.result.json', { tier: 'rejected' });
  save(source, 'shards/host-0.json', { staleMap: true });
  save(source, 'shards/host-0.differentials.json', { staleDiff: true });
  save(source, 'bin/alpha', { executable: true });
  restore(root, source);
  assert.ok(existsSync(resolve(root, 'reports/raw/alpha.result.json')));
  assert.equal(read(resolve(root, 'reports/raw/alpha.result.json')).checkpointOrigin.runId, '123');
  assert.equal(existsSync(resolve(root, 'reports/raw/beta.result.json')), false);
  assert.equal(existsSync(resolve(root, 'reports/shards/host-0.json')), false);
  assert.equal(existsSync(resolve(root, 'bin/alpha')), false);
  save(source, 'ci/toolchain.json', { resumeIdentity: 'different' });
  assert.throws(() => restore(root, source), /compiler\/linker/);
  save(source, 'ci/toolchain.json', { resumeIdentity: 'same' });
  const old = read(resolve(source, 'ci/runner.json')); old.config.timeoutMs++;
  save(source, 'ci/runner.json', old); assert.throws(() => restore(root, source), /timeout differs/);
});

test('interrupted mapping never recovers records without an exact map session', t => {
  const { root, env } = fixture(t); prepare(root, env, config);
  save(root, 'reports/provenance.json', { hostTriple: 'test-host' });
  for (const [id, tier] of [['alpha', 'rejected'], ['zeta', 'static']]) save(root, `reports/raw/${id}.result.json`, {
    id, file: `cases/${id}.ts`, sourceSha256: hash(readFileSync(resolve(root, `cases/${id}.ts`))), tier,
    staticAttempt: tier === 'static' ? { binary: `bin/${id}`, binarySha256: 'missing', mode: 'static' } : null,
    dynamicAttempt: null,
  });
  finish(root, { MAP_OUTCOME: 'failure' });
  assert.equal(existsSync(resolve(root, 'reports/shards/host-0.json')), false);
  assert.equal(read(resolve(root, 'reports/ci/status.json')).recoveredCheckpointCases, 0);
  assert.equal(read(resolve(root, 'reports/ci/status.json')).map, 'failure');
});

test('interrupted CI refreshes an existing pending map through the shared verifier', t => {
  const { root, env } = fixture(t); prepare(root, env, config);
  cpSync(resolve(ROOT, 'scripts'), resolve(root, 'scripts'), { recursive: true });
  const provenance = { effectVersion: '4.0.1', scriptcVersion: '0.2.3' };
  const session = { schemaVersion: 1, provenance, options: { jobs: 2, compileTimeoutMs: 100, coverageTimeoutMs: 100 },
    cacheIdentity: 'exact', manifestSha256: hash(readFileSync(resolve(root, 'cases/manifest.json'))), caseIds: ['alpha', 'zeta'],
    reportPath: 'reports/shards/host-0.json', partial: true, shardIndex: 0, shardTotal: 2 };
  save(root, 'reports/map-session.json', session);
  save(root, session.reportPath, { partial: true, cases: [] });
  const success = { exitCode: 0, signal: null, timedOut: false, spawnError: null, stdout: '', stderr: '', stdoutBase64: '', stderrBase64: '' };
  const failure = { ...success, exitCode: 1, stderr: 'refused' };
  const attempt = mode => ({ mode, coverage: failure, build: failure, diagnostics: [], binary: null });
  save(root, 'reports/raw/alpha.result.json', { id: 'alpha', file: 'cases/alpha.ts', status: 'ready',
    ...provenance, sourceSha256: hash(readFileSync(resolve(root, 'cases/alpha.ts'))), cacheIdentity: 'exact', typecheck: success,
    tier: 'rejected', staticAttempt: attempt('static'), dynamicAttempt: attempt('dynamic') });
  finish(root, { MAP_OUTCOME: 'failure' });
  const map = read(resolve(root, session.reportPath));
  assert.equal(map.summary.completed, 1); assert.equal(map.summary.pending, 1); assert.equal(map.partial, true);
  assert.equal(read(resolve(root, 'reports/ci/status.json')).recoveredCheckpointCases, 1);
});

test('aggregate records missing hosts and preserves host provenance; rejects mismatched evidence', t => {
  const { root, env, snap } = fixture(t); prepare(root, env, config);
  const input = resolve(root, '.work/imported');
  cpSync(resolve(root, 'reports'), resolve(input, 'host-0'), { recursive: true });
  let collection = collect(root, input, snap, config);
  assert.deepEqual(collection.missingArtifacts, [1]);
  assert.equal(collection.artifacts[0].runner.runId, '123');
  const wrong = read(resolve(input, 'host-0/ci/runner.json')); wrong.assignedCases.push('beta');
  save(input, 'host-0/ci/runner.json', wrong);
  assert.throws(() => collect(root, input, snap, config), /Invalid shard artifacts/);
  collection = read(resolve(root, 'reports/ci/collection.json'));
  assert.equal(collection.invalid.length, 1);
});

test('workflow is manual-only, SHA-pinned, non-publishing, and preserves failure artifacts', () => {
  const yaml = readFileSync(resolve(ROOT, '.github/workflows/host-shards.yml'), 'utf8');
  assert.match(yaml, /^on:\n  workflow_dispatch:/m);
  assert.doesNotMatch(yaml, /^  (push|pull_request|schedule|workflow_run|workflow_call):/m);
  const uses = [...yaml.matchAll(/^\s+(?:- )?uses: (\S+)/gm)].map(m => m[1]);
  assert.equal(uses.length, 11);
  for (const action of uses) assert.match(action, /^actions\/(checkout|setup-node|upload-artifact|download-artifact)@[0-9a-f]{40}$/);
  assert.match(yaml, /fail-fast: false/);
  assert.match(yaml, /timeout-minutes: \$\{\{ fromJSON\(needs.plan.outputs.config\).jobMinutes \}\}/);
  assert.match(yaml, /Upload evidence even when[\s\S]*?if: \$\{\{ always\(\)/);
  assert.match(yaml, /node-version: '24\.21\.0'/);
  assert.match(yaml, /pnpm@11\.28\.2 scriptc@0\.2\.3/);
  assert.match(yaml, /env -u MAP_SHARD_INDEX -u MAP_SHARD_TOTAL -u MAP_SHARD_NAME -u MAP_RESUME/);
  assert.match(yaml, /-u MAP_REPORT -u DIFF_REPORT pnpm check/);
  assert.doesNotMatch(yaml, /git push|workflow run|actions: write|contents: write|secrets\./);
  for (const block of yaml.split(/\n      - /).slice(1)) if (block.includes('run:')) assert.doesNotMatch(block.slice(block.indexOf('run:')), /\$\{\{ inputs\./);
});
