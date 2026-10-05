import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { diagnostics, enrichDeferredLocations, parseCoverage, tierFor } from '../scripts/coverage.ts';

test('green footer with deferred sites is not static compatibility', () => {
  const p = parseCoverage(`scriptc coverage a.ts\n  statements analyzed 10\n  compile statically 10 (100%)\n  deferred to runtime 2 sites (JS statements that throw their fence if executed)\n    ×2 unsupported generator SC1043\n  fully static — this program has no dynamic remainder.\n`);
  assert.equal(p.counts.static, 10); assert.equal(p.deferredSites.length, 1);
  assert.equal(tierFor(true, p, false), 'deferred');
});
test('dynamic and unsupported counts with unreached section', () => {
  const p = parseCoverage(`statements analyzed 12\ncompile statically 7 (58%)\ncompile dynamically 3 (25%)\nin unreached code (never lowered — cannot fail a build)\n  ×2 unsupported thing SC2020\n`);
  assert.deepEqual(p.counts, { total: 12, static: 7, dynamic: 3, unsupported: 2 });
  assert.equal(p.deferredSites.length, 0);
  assert.equal(tierFor(false, p, true), 'dynamic-fallback');
});
test('failure without output remains unknown, never 100% static', () => {
  const p = parseCoverage('scriptc: internal assertion');
  assert.equal(p.parsed, false); assert.equal(p.counts.total, null);
  assert.equal(tierFor(true, p, false), 'deferred'); assert.equal(tierFor(false, p, false), 'rejected');
});
test('diagnostics preserve SC code, source location and hint', () => {
  const d = diagnostics('cases/a.ts:2:3 - error SC1043: generator unsupported\n  hint: keep this as a compiler finding\n');
  assert.equal(d[0]?.code, 'SC1043'); assert.deepEqual(d[0]?.sourceLocations, ['cases/a.ts:2:3']);
  assert.match(d[0]?.rewriteHints[0] ?? '', /hint:/);
});
test('adjacent diagnostics retain their own locations and hints', () => {
  const d = diagnostics('cases/a.ts:2:3 - error SC1043: first\n  hint: first hint\ncases/b.ts:4:5 - error SC2020: second\n  hint: second hint\n');
  assert.deepEqual(d[0]?.sourceLocations, ['cases/a.ts:2:3']);
  assert.deepEqual(d[0]?.rewriteHints, ['hint: first hint']);
  assert.deepEqual(d[1]?.sourceLocations, ['cases/b.ts:4:5']);
});
test('impossible counts fail closed', () => {
  const p = parseCoverage('statements analyzed 10\ncompile statically 12');
  assert.equal(p.parsed, false); assert.equal(tierFor(true, p, false), 'deferred');
});
test('deferred group counts sites rather than rows', () => {
  const p = parseCoverage('statements analyzed 10\ncompile statically 10\ndeferred to runtime 2 sites\n  ×2 generator SC1043');
  assert.equal(p.deferredSiteCount, 2); assert.equal(p.deferredSites.length, 1);
});

test('LLVM supplements only exact reported deferred fence locations', () => {
  const c = parseCoverage('statements analyzed 10\ncompile statically 10\ndeferred to runtime 1 sites\n  ×1 unsupported thing SC2020');
  enrichDeferredLocations(c, '@a = constant [1 x i8] c"unsupported thing [SC2020 at /effect/dist/X.js:42]\\00"\n@b = constant [1 x i8] c"unreached other thing [SC2020 at /effect/dist/Y.js:12]\\00"');
  assert.deepEqual(c.diagnostics[0]?.sourceLocations, ['/effect/dist/X.js:42']);
});
