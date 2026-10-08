import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { appendFileSync, cpSync, existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const digest = data => createHash('sha256').update(data).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const save = (path, data) => { mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, JSON.stringify(data, null, 2) + '\n'); };
const command = (name, args, cwd) => execFileSync(name, args, { cwd, encoding: 'utf8', timeout: 60_000 }).trim();
const pins = { node: '24.19.0', pnpm: '11.19.0', effect: '4.0.2', typescript: '7.0.2', scriptc: '0.2.3' };

function integer(value, label, min, max) {
  if (!/^(0|[1-9][0-9]*)$/.test(String(value))) throw new Error(`${label} must be a decimal integer`);
  const n = Number(value);
  if (!Number.isSafeInteger(n) || n < min || n > max) throw new Error(`${label} must be between ${min} and ${max}`);
  return n;
}

export function configuration(env) {
  if (env.INPUT_CAPACITY_CHECKED !== 'true') throw new Error('Check Actions runner capacity, included minutes and artifact storage before dispatch');
  const total = integer(env.INPUT_SHARDS ?? '8', 'shards', 1, 64);
  const parallel = integer(env.INPUT_PARALLEL ?? '4', 'parallel', 1, 64);
  const jobs = integer(env.INPUT_JOBS ?? '2', 'jobs', 1, 8);
  const jobMinutes = integer(env.INPUT_JOB_MINUTES ?? '90', 'job_minutes', 60, 360);
  const timeoutMs = integer(env.INPUT_COMPILE_TIMEOUT_MS ?? '180000', 'compile_timeout_ms', 30_001, 900_000);
  const subset = env.INPUT_SHARD_INDICES?.trim();
  const indices = subset ? subset.split(',').map(x => integer(x.trim(), 'shard index', 0, total - 1)) : Array.from({ length: total }, (_, i) => i);
  if (new Set(indices).size !== indices.length) throw new Error('shard_indices contains duplicates');
  const resumeRunId = env.INPUT_RESUME_RUN_ID?.trim() || '';
  if (resumeRunId && !/^[1-9][0-9]{0,19}$/.test(resumeRunId)) throw new Error('resume_run_id must be a positive GitHub run ID');
  const resumeAttempt = integer(env.INPUT_RESUME_ATTEMPT ?? '1', 'resume_attempt', 1, 1_000_000);
  if (!['true', 'false'].includes(env.INPUT_RUN_REDUCER ?? 'false')) throw new Error('run_reducer must be true or false');
  const runReducer = env.INPUT_RUN_REDUCER === 'true';
  return { total, parallel: Math.min(parallel, indices.length), jobs, timeoutMs, jobMinutes,
    mapMinutes: jobMinutes - 40 - (runReducer ? 10 : 0), worstCaseRunnerMinutes: indices.length * jobMinutes + 30,
    indices: indices.sort((a, b) => a - b), resumeRunId, resumeAttempt, runReducer };
}

export function manifest(root) {
  const data = read(resolve(root, 'cases/manifest.json'));
  const list = Array.isArray(data) ? data : data.cases;
  assert.ok(Array.isArray(list), 'Invalid corpus manifest');
  const seen = new Set();
  for (const c of list) {
    assert.match(c.id, /^[a-zA-Z0-9][a-zA-Z0-9._-]*$/);
    assert.ok(!seen.has(c.id), `Duplicate case ${c.id}`); seen.add(c.id);
    assert.ok(c.file.startsWith('cases/') && !c.file.includes('..') && !c.file.includes('\\'), `Unsafe case path ${c.file}`);
    assert.ok(!lstatSync(resolve(root, c.file)).isSymbolicLink(), `Symlink corpus file ${c.file}`);
  }
  // Exactly matches scripts/common.ts. Every host has the same pinned Node/ICU.
  return [...list].sort((a, b) => a.id.localeCompare(b.id));
}

export function snapshot(root, commit) {
  assert.match(commit, /^[0-9a-f]{40}$/);
  const toolchain = read(resolve(root, 'toolchain.json'));
  for (const key of ['node', 'pnpm', 'effect', 'typescript']) assert.equal(toolchain[key], pins[key], `toolchain.json ${key} pin changed`);
  assert.equal(toolchain.scriptc.npmVersion, pins.scriptc);
  assert.equal(toolchain.scriptc.githubReleaseTag, 'v0.2.3');
  assert.equal(toolchain.scriptc.githubCommit, '52169979ee3fac98ad6651eb2a717fbbf4ac1f89');
  const pkg = read(resolve(root, 'package.json'));
  assert.equal(pkg.packageManager, `pnpm@${pins.pnpm}`);
  assert.equal(pkg.dependencies.effect, pins.effect);
  assert.equal(pkg.devDependencies.typescript, pins.typescript);
  const tracked = command('git', ['ls-files', '-z', '--', 'cases', 'scripts', '.github', 'package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'tsconfig.json', 'toolchain.json', '.node-version', '.nvmrc'], root).split('\0').filter(Boolean).sort();
  const files = tracked.map(path => { assert.ok(!lstatSync(resolve(root, path)).isSymbolicLink(), `Symlink input ${path}`); return { path, sha256: digest(readFileSync(resolve(root, path))) }; });
  const list = manifest(root);
  for (const c of list) assert.ok(tracked.includes(c.file), `Uncommitted fixture ${c.file}`);
  for (const path of ['cases/manifest.json', 'toolchain.json', 'pnpm-lock.yaml', 'package.json']) assert.ok(tracked.includes(path), `Missing committed input ${path}`);
  const identity = { commit, pins, files, caseIds: list.map(c => c.id) };
  return { schemaVersion: 1, ...identity, manifestSha256: digest(readFileSync(resolve(root, 'cases/manifest.json'))), snapshotSha256: digest(JSON.stringify(identity)) };
}

export function assignment(snap, total, index) {
  integer(total, 'shard total', 1, 64); integer(index, 'shard index', 0, total - 1);
  return snap.caseIds.filter((_, i) => i % total === index);
}

function verifyCheckout(root, env) {
  const commit = command('git', ['rev-parse', 'HEAD'], root);
  assert.equal(commit, env.GITHUB_SHA, 'Checkout is not the dispatched commit');
  assert.equal(command('git', ['diff', '--name-only', 'HEAD', '--', 'cases', 'scripts', '.github', 'package.json', 'pnpm-lock.yaml', 'toolchain.json'], root), '', 'Harness inputs changed after checkout');
  return commit;
}

export function prepare(root, env, config) {
  const snap = snapshot(root, verifyCheckout(root, env));
  assert.equal(snap.snapshotSha256, env.EXPECTED_SNAPSHOT, 'Corpus/harness snapshot differs from plan');
  const index = integer(env.MAP_SHARD_INDEX, 'MAP_SHARD_INDEX', 0, config.total - 1);
  // Fresh hosted workspace only: checked-in local reports must never become CI evidence.
  rmSync(resolve(root, 'reports'), { recursive: true, force: true });
  rmSync(resolve(root, 'bin'), { recursive: true, force: true });
  save(resolve(root, 'reports/ci/snapshot.json'), snap);
  save(resolve(root, 'reports/ci/runner.json'), {
    schemaVersion: 1, commit: snap.commit, snapshotSha256: snap.snapshotSha256,
    runId: env.GITHUB_RUN_ID, runAttempt: env.GITHUB_RUN_ATTEMPT, repository: env.GITHUB_REPOSITORY,
    workflow: env.GITHUB_WORKFLOW, runnerName: env.RUNNER_NAME, runnerOS: env.RUNNER_OS,
    runnerArch: env.RUNNER_ARCH, imageOS: env.ImageOS, imageVersion: env.ImageVersion,
    shardIndex: index, shardTotal: config.total, config, assignedCases: assignment(snap, config.total, index),
    startedAt: new Date().toISOString(),
  });
}

function treeHashes(root) {
  const result = [];
  function walk(dir) { for (const e of readdirSync(dir, { withFileTypes: true })) { const path = resolve(dir, e.name); if (e.isDirectory()) walk(path); else if (e.isFile()) result.push({ path: relative(root, path), sha256: digest(readFileSync(path)) }); } }
  walk(root); return result.sort((a, b) => a.path.localeCompare(b.path));
}

export function recordToolchain(root, env) {
  assert.equal(process.versions.node, pins.node);
  assert.equal(command('pnpm', ['--version'], root), pins.pnpm);
  assert.equal(command('scriptc', ['--version'], root).match(/\b\d+\.\d+\.\d+\b/)?.[0], pins.scriptc);
  assert.equal(read(resolve(root, 'node_modules/effect/package.json')).version, pins.effect);
  assert.equal(read(resolve(root, 'node_modules/typescript/package.json')).version, pins.typescript);
  const npmRoot = command('npm', ['root', '--global'], root);
  const compilerFiles = treeHashes(resolve(npmRoot, 'scriptc'));
  const linker = realpathSync(env.SCRIPTC_LINKER);
  const linkerSha256 = digest(readFileSync(linker));
  const nodeSha256 = digest(readFileSync(process.execPath));
  const systemLinker = realpathSync(command('bash', ['-c', 'command -v ld'], root));
  const data = {
    pins, nodeExecutable: process.execPath, nodeSha256, compilerPackage: 'scriptc@0.2.3', compilerFiles,
    linker, linkerSha256, linkerVersion: command(linker, ['--version'], root),
    systemLinker, systemLinkerSha256: digest(readFileSync(systemLinker)), systemLinkerVersion: command(systemLinker, ['--version'], root),
    installedPackages: JSON.parse(command('npm', ['ls', '--global', '--all', '--json', 'pnpm', 'scriptc'], root)),
    imageOS: env.ImageOS, imageVersion: env.ImageVersion,
  };
  data.resumeIdentity = digest(JSON.stringify({ pins, nodeSha256, compilerFiles, linkerSha256, systemLinkerSha256: data.systemLinkerSha256, imageOS: data.imageOS, imageVersion: data.imageVersion }));
  save(resolve(root, 'reports/ci/toolchain.json'), data);
}

export function restore(root, source) {
  const current = read(resolve(root, 'reports/ci/runner.json'));
  const old = read(resolve(source, 'ci/runner.json'));
  const snap = read(resolve(source, 'ci/snapshot.json'));
  assert.equal(snap.snapshotSha256, current.snapshotSha256, 'Resume corpus/harness differs');
  assert.equal(snap.commit, current.commit, 'Resume commit differs');
  assert.equal(old.repository, current.repository, 'Resume repository differs');
  assert.equal(old.shardIndex, current.shardIndex, 'Resume index differs');
  assert.equal(old.shardTotal, current.shardTotal, 'Resume total differs');
  assert.equal(old.config.timeoutMs, current.config.timeoutMs, 'Resume compiler timeout differs');
  const oldToolchain = read(resolve(source, 'ci/toolchain.json'));
  assert.equal(oldToolchain.resumeIdentity, read(resolve(root, 'reports/ci/toolchain.json')).resumeIdentity, 'Resume compiler/linker/runner image differs; start a fresh run');
  const allowed = new Set(current.assignedCases);
  const rawDir = resolve(source, 'raw');
  mkdirSync(resolve(root, 'reports/raw'), { recursive: true });
  if (existsSync(rawDir)) for (const e of readdirSync(rawDir, { withFileTypes: true })) {
    // No executable restoration, symlinks, directories, or arbitrary output paths.
    if (e.isFile() && [...allowed].some(id => e.name.startsWith(id + '.')) && /\.(json|stdout|stderr)$/.test(e.name)) {
      const target = resolve(root, 'reports/raw', e.name);
      if (e.name.endsWith('.result.json')) {
        const result = read(resolve(rawDir, e.name));
        result.checkpointOrigin ??= { repository: old.repository, commit: old.commit, runId: old.runId, runAttempt: old.runAttempt, runnerName: old.runnerName, shardIndex: old.shardIndex, resumeIdentity: oldToolchain.resumeIdentity };
        save(target, result);
      } else cpSync(resolve(rawDir, e.name), target);
    }
  }
  // New checkpoints carry their own cache identity. Do not restore a completed map:
  // successful binaries are absent and an interrupted retry must not claim them again.
  const priorProvenance = resolve(source, 'provenance.json');
  const ancestry = resolve(source, 'ci/resume-source.json');
  save(resolve(root, 'reports/ci/resume-source.json'), { runner: old, snapshot: snap, provenance: existsSync(priorProvenance) ? read(priorProvenance) : null,
    ancestry: existsSync(ancestry) ? read(ancestry) : null, importedAt: new Date().toISOString(), note: 'Raw checkpoints only. Successful cases rebuild because native binaries are never imported.' });
}

export function finish(root, env) {
  const runnerPath = resolve(root, 'reports/ci/runner.json');
  if (!existsSync(runnerPath)) return;
  const runner = read(runnerPath);
  const mapPath = runner.shardTotal === 1 ? 'reports/coverage-map.json' : `reports/shards/host-${runner.shardIndex}.json`;
  const recovery = recoverCheckpoints(root, env, mapPath);
  save(resolve(root, 'reports/ci/status.json'), { finishedAt: new Date().toISOString(),
    map: env.MAP_OUTCOME ?? 'not-run', differential: env.DIFF_OUTCOME ?? 'not-run', reducer: env.REDUCE_OUTCOME ?? 'not-run',
    ...recovery, mapReportExists: existsSync(resolve(root, mapPath)) });
}

function recoverCheckpoints(root, env, mapPath) {
  if (env.MAP_OUTCOME === 'success' || !existsSync(resolve(root, 'reports/map-session.json'))) return { recoveredCheckpointCases: 0 };
  try {
    assert.equal(read(resolve(root, 'reports/map-session.json')).reportPath, mapPath, 'Checkpoint destination differs');
    command(process.execPath, ['scripts/checkpoint.ts'], root);
    return { recoveredCheckpointCases: read(resolve(root, mapPath)).summary.completed };
  } catch (error) { return { recoveredCheckpointCases: 0, recoveryError: error.message }; }
}

export function collect(root, input, expectedSnapshot, config) {
  const artifacts = existsSync(input) ? readdirSync(input, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => e.name).sort() : [];
  const accepted = [], invalid = [];
  for (const artifact of artifacts) {
    try {
      const snap = read(resolve(input, artifact, 'ci/snapshot.json'));
      const runner = read(resolve(input, artifact, 'ci/runner.json'));
      assert.equal(snap.snapshotSha256, expectedSnapshot.snapshotSha256, 'Snapshot differs');
      assert.equal(snap.commit, expectedSnapshot.commit, 'Commit differs');
      assert.equal(runner.shardTotal, config.total, 'Shard total differs');
      assert.equal(runner.config.timeoutMs, config.timeoutMs, 'Compiler timeout differs');
      assert.deepEqual(runner.assignedCases, assignment(expectedSnapshot, config.total, runner.shardIndex), 'Assignment differs');
      const mapPath = runner.shardTotal === 1 ? 'coverage-map.json' : `shards/host-${runner.shardIndex}.json`;
      if (existsSync(resolve(input, artifact, mapPath))) {
        const map = read(resolve(input, artifact, mapPath));
        const seen = new Set();
        for (const c of map.cases) {
          assert.ok(runner.assignedCases.includes(c.id) && !seen.has(c.id), `Overlapping/unknown case ${c.id}`); seen.add(c.id);
          const source = expectedSnapshot.files.find(f => f.path === c.file);
          assert.equal(c.sourceSha256, source?.sha256, `Source differs for ${c.id}`);
        }
        if (map.manifestSha256) assert.equal(map.manifestSha256, expectedSnapshot.manifestSha256, 'Map manifest differs');
      }
      const statusPath = resolve(input, artifact, 'ci/status.json');
      const resumePath = resolve(input, artifact, 'ci/resume-source.json');
      accepted.push({ artifact, runner, status: existsSync(statusPath) ? read(statusPath) : null, resumeSource: existsSync(resumePath) ? read(resumePath) : null });
    } catch (error) { invalid.push({ artifact, error: error.message }); }
  }
  const observed = new Set(accepted.map(x => x.runner.shardIndex));
  const collection = { schemaVersion: 1, generatedAt: new Date().toISOString(), snapshot: expectedSnapshot, requestedIndices: config.indices, missingArtifacts: config.indices.filter(i => !observed.has(i)), invalid, artifacts: accepted };
  save(resolve(root, 'reports/ci/collection.json'), collection);
  assert.equal(invalid.length, 0, 'Invalid shard artifacts; see reports/ci/collection.json');
  return collection;
}

export async function main(env = process.env) {
  const action = process.argv[2];
  if (action === 'preview') {
    console.log(JSON.stringify(configuration(env), null, 2));
  } else if (action === 'plan') {
    const config = configuration(env);
    const snap = snapshot(ROOT, verifyCheckout(ROOT, env));
    save(resolve(ROOT, '.work/shard-plan.json'), { config, snapshot: snap });
    const outputs = { config: JSON.stringify(config), matrix: JSON.stringify({ include: config.indices.map(index => ({ index, name: `host-${index}`, map: config.total === 1 ? 'reports/coverage-map.json' : `reports/shards/host-${index}.json` })) }), snapshot: snap.snapshotSha256 };
    for (const [key, value] of Object.entries(outputs)) appendFileSync(env.GITHUB_OUTPUT, `${key}=${value}\n`);
    const summary = `Selected hosts: ${config.indices.length}; maximum simultaneous hosts: ${config.parallel}; maximum ${config.jobMinutes} minutes per host.\nConservative whole-run bound: ${config.worstCaseRunnerMinutes} runner-minutes (includes plan 10 + aggregate 20). Artifact storage is additional.\n`;
    console.log(summary);
    if (env.GITHUB_STEP_SUMMARY) appendFileSync(env.GITHUB_STEP_SUMMARY, summary);
  } else if (action === 'prepare') {
    assert.equal(env.GITHUB_ACTIONS, 'true', 'prepare clears reports/bin and is restricted to fresh Actions jobs');
    prepare(ROOT, env, JSON.parse(env.SHARD_CONFIG));
  } else if (action === 'provenance') recordToolchain(ROOT, env);
  else if (action === 'restore') restore(ROOT, resolve(ROOT, '.work/resume'));
  else if (action === 'finish') finish(ROOT, env);
  else if (action === 'collect') collect(ROOT, resolve(ROOT, '.work/imported'), snapshot(ROOT, verifyCheckout(ROOT, env)), JSON.parse(env.SHARD_CONFIG));
  else throw new Error(`Unknown host-shards action: ${action}`);
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
