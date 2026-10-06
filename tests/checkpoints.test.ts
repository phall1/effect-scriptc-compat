import assert from 'node:assert/strict';
import { test } from 'node:test';
import { assertProvenance, cacheIdentityFor } from '../scripts/common.ts';
import { selection } from '../scripts/map.ts';
import { summarize } from '../scripts/report.ts';
import { fixtureMatches } from '../scripts/validate.ts';
import type { Case, CaseResult, Provenance, Run } from '../scripts/types.ts';

const list: Case[] = ['a', 'b', 'c'].map(id => ({ id, file: `cases/${id}.ts`, module: id, entrypoint: 'effect', family: id, api: [], status: 'ready' }));

test('selection validates names and destinations before mapping; modulo is exhaustive', () => {
  assert.throws(() => selection(list, { MAP_CASES: 'typo' }), /Unknown/);
  assert.throws(() => selection(list, { MAP_CASES: '' }), /empty/);
  assert.throws(() => selection(list, { MAP_SHARD_NAME: '../../raw' }), /Unsafe/);
  assert.throws(() => selection(list, { MAP_REPORT: 'reports/../../outside.json' }), /inside reports/);
  for (const path of ['reports/provenance.json', 'reports/map-session.json', 'reports/checkpoint.json', 'reports/shards/one.differentials.json', 'reports/raw/custom.json']) {
    assert.throws(() => selection(list, { MAP_REPORT: path }), /reserved evidence/);
  }
  for (const path of ['reports//raw/custom.json', 'reports/./raw/custom.json']) assert.throws(() => selection(list, { MAP_REPORT: path }), /path components/);
  assert.throws(() => selection(list, { MAP_CASES: 'a', MAP_SHARD_TOTAL: '2' }), /not both/);
  assert.deepEqual(selection(list, { MAP_CASES: ' a, c ' }).list.map(c => c.id), ['a', 'c']);
  const all = [0, 1].flatMap(index => selection(list, { MAP_SHARD_INDEX: String(index), MAP_SHARD_TOTAL: '2' }).list);
  assert.deepEqual(all.map(c => c.id).sort(), ['a', 'b', 'c']);
});

test('cache fingerprints ignore timing but reject changed linker bytes, stderr or limits', () => {
  const run = { stdout: 'version', stderr: '', exitCode: 0, durationMs: 1 } as Run;
  const p = { executableHashes: { linker: 'original' }, commands: { linker: run, systemLinker: run } } as unknown as Provenance;
  const options = { compileTimeoutMs: 100, coverageTimeoutMs: 100 };
  const original = cacheIdentityFor(p, options);
  assert.equal(cacheIdentityFor({ ...p, commands: { ...p.commands, linker: { ...run, durationMs: 999 } } }, options), original);
  assert.notEqual(cacheIdentityFor({ ...p, executableHashes: { linker: 'changed' } }, options), original);
  assert.notEqual(cacheIdentityFor({ ...p, commands: { ...p.commands, systemLinker: { ...run, stderr: 'changed' } } }, options), original);
  assert.notEqual(cacheIdentityFor(p, { ...options, compileTimeoutMs: 101 }), original);
  assert.doesNotThrow(() => assertProvenance(p, { ...p, commands: { ...p.commands, linker: { ...run, durationMs: 999 } } }));
  assert.throws(() => assertProvenance(p, { ...p, commands: { ...p.commands, linker: { ...run, stderr: 'changed' } } }), /linker output changed/);
});

test('fixture validation requires exact expected bytes, clean stderr and a successful exit', () => {
  const c = { ...list[0]!, expectedStdout: 'stable\n' };
  const r = { exitCode: 0, signal: null, timedOut: false, spawnError: null, stdoutBase64: Buffer.from('stable\n').toString('base64'), stderrBase64: '' } as Run;
  assert.equal(fixtureMatches(c, r), true);
  assert.equal(fixtureMatches(c, { ...r, stdoutBase64: Buffer.from('wrong\n').toString('base64') }), false);
  assert.equal(fixtureMatches(c, { ...r, stderrBase64: 'eA==' }), false);
  assert.equal(fixtureMatches(c, { ...r, timedOut: true }), false);
});

test('pending and skipped sibling paths never make a module fully static', () => {
  const base = { effectVersion: '4.0.1', scriptcVersion: '0.2.3', sourceSha256: '', typecheck: null,
    staticAttempt: null, dynamicAttempt: null, scCodes: [], sourceLocations: [], rewriteHints: [], deferredSites: [], notes: [] };
  const rows: CaseResult[] = [
    { ...base, ...list[0]!, module: 'same', tier: 'static' },
    { ...base, ...list[1]!, module: 'same', tier: null },
  ];
  let summary = summarize(rows);
  assert.equal(summary.pending, 1);
  assert.equal((summary.moduleTiers as Record<string, number>).static, 0);
  rows[1]!.status = 'skipped-needs-io';
  summary = summarize(rows);
  assert.equal((summary.moduleTiers as Record<string, number>).static, 0);
});
