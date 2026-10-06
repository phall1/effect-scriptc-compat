import { strict as assert } from 'node:assert';
import { chmodSync, cpSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { relative, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import { ROOT, sha } from '../scripts/common.ts';
import { signatures } from '../scripts/reduce.ts';

function evidenceHashes(dir: string): Record<string, string> {
  const walk = (path: string): string[] => readdirSync(path, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(resolve(path, e.name)) : [resolve(path, e.name)]);
  return Object.fromEntries(walk(resolve(dir, 'reports')).map(path => [relative(dir, path), sha(readFileSync(path))]));
}

test('bounded fake-compiler CLI never completes without runtime evidence or overwrites protected reports', { timeout: 90_000 }, t => {
  const dir = mkdtempSync(resolve(tmpdir(), 'effect-hardening-test-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  cpSync(resolve(ROOT, 'scripts'), resolve(dir, 'scripts'), { recursive: true });
  for (const file of ['toolchain.json', 'package.json', 'pnpm-lock.yaml', 'tsconfig.json']) cpSync(resolve(ROOT, file), resolve(dir, file));
  symlinkSync(resolve(ROOT, 'node_modules'), resolve(dir, 'node_modules'));
  mkdirSync(resolve(dir, 'cases'));
  const fixture = (id: string, extra = '') => {
    writeFileSync(resolve(dir, `cases/${id}.ts`), `import { Effect } from "effect";\nconsole.log("stable");\n${extra}`);
    return { id, module: id, family: id, file: `cases/${id}.ts`, entrypoint: 'effect', api: ['succeed'], status: 'ready', expectedStdout: 'stable\n' };
  };
  const green = fixture('green');
  writeFileSync(resolve(dir, 'cases/manifest.json'), JSON.stringify([green]));
  const cli = resolve(dir, 'fake-scriptc.cjs');
  writeFileSync(cli, `#!/usr/bin/env node
const fs = require('node:fs');
const args = process.argv.slice(2);
fs.appendFileSync('compiler-calls.log', JSON.stringify(args)+'\\n');
if (args[0] === '--version') { console.log('0.2.3'); process.exit(0); }
if (args[0] === 'coverage') { console.log('statements analyzed 1\\ncompile statically 1'); process.exit(0); }
if (fs.readFileSync(args[1], 'utf8').includes('compiler-reject')) { console.error(args[1]+':1:1 - error SC2020: fake unsupported construct'); process.exit(1); }
const output = args[args.indexOf('-o')+1];
const value = args[1].includes('compiler-control') ? 'scriptc-control:42' : 'stable';
fs.writeFileSync(output, '#!/bin/sh\\nprintf "%s\\\\n" '+JSON.stringify(value)+'\\n'); fs.chmodSync(output, 0o755);
`);
  chmodSync(cli, 0o755);
  const env: NodeJS.ProcessEnv = { ...process.env, SCRIPTC: cli };
  for (const key of Object.keys(env)) if (/^(?:MAP_|DIFF_|REDUCE_|COMPILE_TIMEOUT_MS$|COVERAGE_TIMEOUT_MS$)/.test(key)) delete env[key];
  const invoke = (script: string, extra: NodeJS.ProcessEnv = {}) => spawnSync(process.execPath, [`scripts/${script}.ts`], { cwd: dir, env: { ...env, ...extra }, encoding: 'utf8', timeout: 25_000 });
  const read = (path: string) => JSON.parse(readFileSync(resolve(dir, path), 'utf8'));
  const write = (path: string, value: unknown) => writeFileSync(resolve(dir, path), JSON.stringify(value));
  const index = () => read('reports/upstream/index.json');
  const mapped = invoke('map');
  assert.equal(mapped.status, 0, mapped.stdout + mapped.stderr);
  const map = read('reports/coverage-map.json');
  assert.equal(map.partial, false); assert.equal(map.cases[0].tier, 'static');
  assert.equal(invoke('reduce').status, 0);
  assert.equal(index().complete, false); assert.equal(index().partial, true);
  assert.equal(index().differentialCoverage.reportPresent, false);
  assert.equal(index().differentialCoverage.missing.length, 1);

  const diffed = invoke('diff');
  assert.equal(diffed.status, 0, diffed.stdout + diffed.stderr);
  const valid = read('reports/differentials.json');
  write('reports/differentials.json', { ...valid, results: [] });
  assert.equal(invoke('reduce').status, 0); assert.equal(index().complete, false);
  write('reports/differentials.json', { ...valid, results: undefined });
  assert.equal(invoke('reduce').status, 0); assert.equal(index().complete, false);
  assert.equal(index().differentialCoverage.reportRowsPresent, false);
  write('reports/differentials.json', { ...valid, results: valid.results.map((r: any) => ({ ...r, baselineValid: false, equal: false, finding: null })) });
  const invalid = invoke('reduce');
  assert.equal(invalid.status, 2, invalid.stdout + invalid.stderr);
  assert.match(invalid.stderr, /HARNESS ERROR: Invalid Node baseline/);
  assert.equal(index().complete, false); assert.equal(index().distinctSignatures, 0);
  assert.equal(index().harnessErrors.length, 1);
  write('reports/differentials.json', { ...valid, partial: true });
  assert.equal(invoke('reduce').status, 0); assert.equal(index().complete, false);
  write('reports/differentials.json', valid);
  assert.equal(invoke('reduce').status, 0); assert.equal(index().complete, true); assert.equal(index().partial, false);
  write('reports/coverage-map.json', { ...map, partial: true });
  assert.equal(invoke('reduce').status, 0); assert.equal(index().complete, false);
  write('reports/coverage-map.json', map);

  const before = evidenceHashes(dir), calls = readFileSync(resolve(dir, 'compiler-calls.log'), 'utf8');
  for (const destination of ['reports/coverage-map.json', './reports/./coverage-map.json', resolve(dir, 'reports/coverage-map.json'),
    'reports/./map-session.json', 'reports/checkpoint.json', 'reports/provenance.json', 'reports/control.json',
    'reports/raw/green.result.json', 'reports/upstream/index.json', 'reports/shards/other-map.json']) {
    const rejected = invoke('diff', { DIFF_REPORT: destination });
    assert.notEqual(rejected.status, 0); assert.match(rejected.stderr, /DIFF_REPORT/);
    assert.deepEqual(evidenceHashes(dir), before, destination);
    assert.equal(readFileSync(resolve(dir, 'compiler-calls.log'), 'utf8'), calls, 'destination rejection precedes even provenance execution');
  }
  const isolated = invoke('diff', { DIFF_REPORT: './reports/shards/./safe.differentials.json' });
  assert.equal(isolated.status, 0, isolated.stderr);
  assert.equal(read('reports/shards/safe.differentials.json').results[0].baselineValid, true);
  assert.equal(sha(readFileSync(resolve(dir, 'reports/coverage-map.json'))), before['reports/coverage-map.json']);

  // Source and provenance remain current; an invalid expected contract or Node
  // stderr is a harness error even if the executable otherwise succeeds.
  write('reports/coverage-map.json', { ...map, cases: [{ ...map.cases[0], expectedStdout: undefined }] });
  const missingExpected = invoke('diff');
  assert.equal(missingExpected.status, 2, missingExpected.stderr);
  assert.equal(read('reports/differentials.json').results[0].finding, null);
  assert.equal(read('reports/differentials.json').results[0].baselineValid, false);
  const warningSource = 'import { Effect } from "effect";\nconsole.log("stable");\nconsole.error("warning");\n';
  writeFileSync(resolve(dir, 'cases/green.ts'), warningSource);
  write('reports/coverage-map.json', { ...map, cases: [{ ...map.cases[0], sourceSha256: sha(warningSource) }] });
  const warning = invoke('diff');
  assert.equal(warning.status, 2, warning.stderr);
  const warningRow = read('reports/differentials.json').results[0];
  assert.equal(warningRow.baselineValid, false); assert.equal(warningRow.finding, null);
  assert.equal(warningRow.node.stderrBase64, Buffer.from('warning\n').toString('base64'));
  const legacyWarning = read('reports/differentials.json');
  legacyWarning.results[0].baselineValid = true;
  legacyWarning.results[0].finding = 'false coverage';
  write('reports/differentials.json', legacyWarning);
  const reducedWarning = invoke('reduce');
  assert.equal(reducedWarning.status, 2, reducedWarning.stderr);
  assert.equal(index().distinctSignatures, 0, 'legacy baseline flags cannot turn Node warnings into native failures');
  assert.equal(index().harnessErrors.length, 1); assert.equal(index().complete, false);

  // Exercise the nonempty/intermediate save branch with a real bounded compiler
  // predicate, not just the empty-signature shortcut. Representatives stay usable.
  fixture('green');
  const rejectOne = fixture('reject-one', '// compiler-reject\n');
  const rejectTwo = fixture('reject-two', '// compiler-reject\n');
  write('cases/manifest.json', [green, rejectOne, rejectTwo]);
  const withFailures = invoke('map');
  assert.equal(withFailures.status, 0, withFailures.stderr);
  rmSync(resolve(dir, 'reports/differentials.json'));
  const failures = signatures(read('reports/coverage-map.json'), null);
  assert.equal(failures.length, 2);
  const representative = invoke('reduce', { REDUCE_SIGNATURES: failures[0]!.id, REDUCE_BUDGET: '0' });
  assert.equal(representative.status, 0, representative.stdout + representative.stderr);
  assert.equal(index().verifiedSignatures, 1); assert.equal(index().pendingSignatures, 1);
  assert.equal(index().complete, false); assert.equal(index().partial, true);
  assert.equal(index().differentialCoverage.reportPresent, false);
  assert.equal(index().results[0].verified, true);
  assert.match(readFileSync(resolve(dir, index().results[0].packet), 'utf8'), /fake unsupported construct/);
  const allCompilerPackets = invoke('reduce', { REDUCE_BUDGET: '0' });
  assert.equal(allCompilerPackets.status, 0, allCompilerPackets.stdout + allCompilerPackets.stderr);
  assert.equal(index().verifiedSignatures, 2); assert.equal(index().pendingSignatures, 0);
  assert.equal(index().complete, false, 'even all verified compiler packets need current runtime coverage');
  assert.equal(index().partial, true);
  assert.equal(invoke('diff').status, 0);
  const retainedAndSelected = invoke('reduce', { REDUCE_SIGNATURES: failures[0]!.id, REDUCE_BUDGET: '0' });
  assert.equal(retainedAndSelected.status, 0, retainedAndSelected.stdout + retainedAndSelected.stderr);
  assert.equal(index().verifiedSignatures, 2); assert.equal(index().complete, true);
  assert.equal(index().partial, false);
});
