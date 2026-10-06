import { strict as assert } from 'node:assert';
import { chmodSync, cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import { ROOT } from '../scripts/common.ts';

test('map/diff integration separates static, deferred, dynamic retry and rejection', { timeout: 60_000 }, t => {
  const dir = mkdtempSync(resolve(tmpdir(), 'effect-harness-test-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  cpSync(resolve(ROOT, 'scripts'), resolve(dir, 'scripts'), { recursive: true });
  for (const f of ['toolchain.json', 'package.json', 'pnpm-lock.yaml', 'tsconfig.json']) cpSync(resolve(ROOT, f), resolve(dir, f));
  symlinkSync(resolve(ROOT, 'node_modules'), resolve(dir, 'node_modules'));
  mkdirSync(resolve(dir, 'cases'));
  const ids = ['green', 'deferred', 'dynamic', 'rejected', 'false-green'];
  for (const id of ids) writeFileSync(resolve(dir, `cases/${id}.ts`), 'import { Effect } from "effect";\nconsole.log("stable");\n');
  writeFileSync(resolve(dir, 'cases/manifest.json'), JSON.stringify(ids.map(id => ({ id, module: id, family: id, file: `cases/${id}.ts`, entrypoint: 'effect', api: ['succeed'], status: 'ready', expectedStdout: 'stable\n' }))));
  const cli = resolve(dir, 'mock-scriptc.cjs');
  writeFileSync(cli, `#!/usr/bin/env node
const fs = require('node:fs');
const args = process.argv.slice(2);
if (args[0] === '--version') { console.log('0.2.3'); process.exit(0); }
const file = args[1]; const name = require('node:path').basename(file, '.ts');
const dynamic = args.includes('--dynamic');
if (args[0] === 'coverage') {
 console.log('scriptc coverage ' + file + '\\n  statements analyzed 1\\n  compile statically 1 (100%)');
 if(name==='deferred') console.log('  deferred to runtime 1 sites\\n    ×1 unsupported generator SC1043');
 if(name==='dynamic'&&!dynamic) console.log('  runs with --dynamic 1 sites\\n    ×1 island SC2013');
 process.exit(0);
}
if(name==='rejected'||(name==='dynamic'&&!dynamic)) {
 console.error(file+':1:1 - error '+(name==='dynamic'?'SC2013':'SC2020')+': mock unsupported construct'); process.exit(1);
}
const output = args[args.indexOf('-o')+1];
const value = name==='compiler-control' ? 'scriptc-control:42' : name==='false-green' ? 'wrong' : 'stable';
fs.writeFileSync(output, '#!/bin/sh\\nprintf \"%s\\\\n\" '+JSON.stringify(value)+'\\n'); fs.chmodSync(output, 0o755);
`);
  chmodSync(cli, 0o755);
  const env: NodeJS.ProcessEnv = { ...process.env, SCRIPTC: cli };
  for (const key of Object.keys(env)) if (/^(?:MAP_|DIFF_|REDUCE_|COMPILE_TIMEOUT_MS$|COVERAGE_TIMEOUT_MS$)/.test(key)) delete env[key];
  env.MAP_JOBS = '2'; env.DIFF_JOBS = '2';
  const mapped = spawnSync(process.execPath, ['scripts/map.ts'], { cwd: dir, env, encoding: 'utf8', timeout: 50_000 });
  assert.equal(mapped.status, 0, mapped.stdout + mapped.stderr);
  const report = JSON.parse(readFileSync(resolve(dir, 'reports/coverage-map.json'), 'utf8'));
  assert.deepEqual(Object.fromEntries(report.cases.map((c: any) => [c.id, c.tier])), { deferred: 'deferred', dynamic: 'dynamic-fallback', 'false-green': 'static', green: 'static', rejected: 'rejected' });
  const diffed = spawnSync(process.execPath, ['scripts/diff.ts'], { cwd: dir, env, encoding: 'utf8', timeout: 20_000 });
  assert.equal(diffed.status, 1, diffed.stdout + diffed.stderr);
  const diff = JSON.parse(readFileSync(resolve(dir, 'reports/differentials.json'), 'utf8'));
  assert.equal(diff.summary.binaries, 4); assert.equal(diff.summary.mismatched, 1);
  assert.equal(diff.results.find((x: any) => x.caseId === 'false-green').finding, 'false coverage');

  const invoke = (script: string, extra: NodeJS.ProcessEnv = {}) => spawnSync(process.execPath, [`scripts/${script}.ts`], { cwd: dir, env: { ...env, ...extra }, encoding: 'utf8', timeout: 20_000 });
  const session = readFileSync(resolve(dir, 'reports/map-session.json'), 'utf8');
  const unknown = invoke('map', { MAP_CASES: 'typo' });
  assert.notEqual(unknown.status, 0); assert.match(unknown.stderr, /Unknown or empty MAP_CASES/);
  assert.equal(readFileSync(resolve(dir, 'reports/map-session.json'), 'utf8'), session, 'invalid selection must not overwrite evidence');
  assert.notEqual(invoke('map', { MAP_CASES: '' }).status, 0);

  const resumed = invoke('map', { MAP_RESUME: '1' });
  assert.equal(resumed.status, 0, resumed.stderr);
  assert.equal((resumed.stdout.match(/\[resume\]/g) ?? []).length, 5);
  // Fresh recovery has no dependency on a prior completed map. Missing binaries,
  // incomplete attempts, legacy identities and malformed JSON remain pending.
  rmSync(resolve(dir, 'reports/coverage-map.json'));
  rmSync(resolve(dir, 'bin/green'));
  writeFileSync(resolve(dir, 'reports/raw/deferred.result.json'), '{partial');
  const rejectedPath = resolve(dir, 'reports/raw/rejected.result.json');
  const rejected = JSON.parse(readFileSync(rejectedPath, 'utf8'));
  rejected.cacheIdentity = 'old-toolchain';
  writeFileSync(rejectedPath, JSON.stringify(rejected));
  const checkpoint = invoke('checkpoint');
  assert.equal(checkpoint.status, 0, checkpoint.stderr);
  const recovered = JSON.parse(readFileSync(resolve(dir, 'reports/coverage-map.json'), 'utf8'));
  assert.equal(recovered.partial, true); assert.equal(recovered.summary.completed, 2); assert.equal(recovered.summary.pending, 3);
  assert.equal(recovered.cases.find((c: any) => c.id === 'green').tier, null);
  const repaired = invoke('map', { MAP_RESUME: '1' });
  assert.equal(repaired.status, 0, repaired.stderr);
  assert.equal((repaired.stdout.match(/\[resume\]/g) ?? []).length, 2);

  const manifestPath = resolve(dir, 'cases/manifest.json');
  const changedManifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  changedManifest.find((c: any) => c.id === 'deferred').status = 'skipped-needs-io';
  writeFileSync(manifestPath, JSON.stringify(changedManifest));
  const skipped = invoke('map', { MAP_RESUME: '1' });
  assert.equal(skipped.status, 0, skipped.stderr);
  assert.equal(invoke('checkpoint').status, 0);
  const skipCheckpoint = JSON.parse(readFileSync(resolve(dir, 'reports/coverage-map.json'), 'utf8'));
  assert.equal(skipCheckpoint.cases.find((c: any) => c.id === 'deferred').tier, null);

  writeFileSync(resolve(dir, 'cases/green.ts'), 'const invalid: number = "bad";\n');
  const invalid = invoke('map', { MAP_CASES: 'green', MAP_REPORT: 'reports/shards/invalid.json' });
  assert.equal(invalid.status, 1, invalid.stderr);
  assert.equal(invoke('checkpoint').status, 0);
  const invalidCheckpoint = JSON.parse(readFileSync(resolve(dir, 'reports/shards/invalid.json'), 'utf8'));
  assert.equal(invalidCheckpoint.cases[0].status, 'uncovered');
  assert.match(invalidCheckpoint.cases[0].reason, /does not typecheck/);
  assert.equal(invalidCheckpoint.partial, true);
  writeFileSync(resolve(dir, 'cases/green.ts'), 'import { Effect } from "effect";\nconsole.log("stable");\n');
  const selected = invoke('map', { MAP_CASES: 'green', MAP_REPORT: 'reports/shards/custom.json' });
  assert.equal(selected.status, 0, selected.stderr);
  const custom = JSON.parse(readFileSync(resolve(dir, 'reports/shards/custom.json'), 'utf8'));
  assert.equal(custom.partial, true); assert.deepEqual(custom.cases.map((c: any) => c.id), ['green']);
  assert.equal(invoke('checkpoint').status, 0);
  writeFileSync(resolve(dir, 'cases/manifest.json'), '[]');
  const stale = invoke('checkpoint');
  assert.notEqual(stale.status, 0); assert.match(stale.stderr, /manifest changed/);
});
