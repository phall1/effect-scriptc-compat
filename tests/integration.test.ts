import { strict as assert } from 'node:assert';
import { chmodSync, cpSync, mkdirSync, mkdtempSync, readFileSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import { ROOT } from '../scripts/common.ts';

test('map/diff integration separates static, deferred, dynamic retry and rejection', { timeout: 60_000 }, () => {
  const dir = mkdtempSync(resolve(tmpdir(), 'effect-harness-test-'));
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
});
