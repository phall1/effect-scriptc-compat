import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { assertProvenance, cacheIdentityFor, commandText, fileSha, json, ok, pins, provenance, raw, readJson, ROOT, run, sameBytes, sha, SCRIPTC, typecheckCommand } from './common.ts';
import { diagnostics, parseCoverage } from './coverage.ts';
import { deltaSignature } from './diff.ts';
import { fixtureMatches } from './validate.ts';
import type { Attempt, CaseResult, Differential, DiffReport, MapReport, Run } from './types.ts';

type Classification = 'missing lowering' | 'deferred runtime trap' | 'semantic divergence' | 'crash/hang' | 'false coverage';
export function deferredNames(sites: string[], code: string): string[] {
  return sites.filter(site => site.includes(code)).map(site => site.replace(/^\s*×\d+\s+/, '').replace(/\s+SC\d{4}\s*$/, '').replace(/m\d+\./g, 'm.').replace(/%cx\d+/g, '%cx').replace(/\s+/g, ' ').trim());
}
interface Failure {
  key: string; id: string; kind: 'compiler' | 'deferred' | 'differential'; code: string | null;
  family: string; caseResult: CaseResult; attempt: Attempt; differential?: Differential;
  classification: Classification; detail: string; relatedCases: string[];
}
function compilerDetail(a: Attempt, code: string | null): string {
  const ds = diagnostics(a.build.stdout + '\n' + a.build.stderr);
  const message = code ? ds.find(d => d.code === code)?.message ?? '' : a.build.stderr || a.build.stdout || (a.build.timedOut ? 'timeout' : a.build.spawnError ?? 'no binary produced');
  return message.replace(/^.*? - error SC\d{4}:\s*/gm, '').replace(/(?:\/[^\s:]+)+\.ts:\d+(?::\d+)?/g, '<source>').trim();
}
function addCompilerFailures(groups: Map<string, Failure>, c: CaseResult, a: Attempt): void {
  const codes = a.diagnostics.length ? [...new Set(a.diagnostics.map(d => d.code))] : [null];
  for (const code of codes) {
    const detail = compilerDetail(a, code);
    // SC3004 is an umbrella diagnostic: retain message as part of the key.
    const key = `compiler:${c.family}:${code ?? 'uncoded'}${code === 'SC3004' || code === null ? ':' + detail : ''}`;
    const previous = groups.get(key);
    if (previous) { previous.relatedCases.push(`${c.id}:${a.mode}`); continue; }
    const id = `${(code ?? 'compiler-failure').toLowerCase()}-${c.family.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 45)}-${sha(key).slice(0, 8)}`;
    groups.set(key, { key, id, kind: 'compiler', code, family: c.family, caseResult: c, attempt: a,
      classification: compilerClassification(a, code), detail, relatedCases: [`${c.id}:${a.mode}`] });
  }
}
function compilerClassification(a: Attempt, code: string | null): Classification {
  return a.build.timedOut || a.build.signal || code === 'SC3004' || code === null ? 'crash/hang' : 'missing lowering';
}
function addDeferredFailures(groups: Map<string, Failure>, c: CaseResult, a: Attempt): void {
  const codes = [...new Set(a.parsedCoverage.deferredSites.flatMap(site => site.match(/\bSC\d{4}\b/g) ?? []))];
  for (const code of codes) {
    const key = `deferred:${c.family}:${code}`;
    const previous = groups.get(key);
    if (previous) { previous.relatedCases.push(`${c.id}:${a.mode}`); continue; }
    const id = `deferred-${code.toLowerCase()}-${c.family.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 35)}-${sha(key).slice(0, 8)}`;
    groups.set(key, { key, id, kind: 'deferred', code, family: c.family, caseResult: c, attempt: a,
      classification: 'missing lowering', detail: a.parsedCoverage.deferredSites.filter(site => site.includes(code)).join('\n'), relatedCases: [`${c.id}:${a.mode}`] });
  }
}
function addDifferentialFailure(groups: Map<string, Failure>, c: CaseResult, d: Differential): void {
  if (d.equal || !validDifferentialBaseline(c, d)) return;
  const a = d.mode === 'static' ? c.staticAttempt! : c.dynamicAttempt!;
  const key = `differential:${d.signature}`;
  const previous = groups.get(key);
  if (previous) { previous.relatedCases.push(`${c.id}:${a.mode}`); return; }
  const id = `diff-${d.signature}`;
  groups.set(key, { key, id, kind: 'differential', code: null, family: c.family, caseResult: c, attempt: a, differential: d,
    classification: d.finding ?? 'semantic divergence', detail: d.differences.join(', '), relatedCases: [`${c.id}:${a.mode}`] });
}
export function signatures(map: MapReport, diff: DiffReport | null): Failure[] {
  const groups = new Map<string, Failure>();
  for (const c of map.cases) for (const a of [c.staticAttempt, c.dynamicAttempt]) {
    if (!a) continue;
    if (a.binary) addDeferredFailures(groups, c, a);
    else addCompilerFailures(groups, c, a);
  }
  for (const d of diff?.results ?? []) addDifferentialFailure(groups, map.cases.find(c => c.id === d.caseId)!, d);
  return [...groups.values()].sort((a, b) => a.id.localeCompare(b.id));
}
export async function ddmin(lines: string[], predicate: (s: string) => Promise<boolean>, budget: number): Promise<{ source: string; attempts: number; exhausted: boolean }> {
  let current = lines, n = 2, attempts = 0;
  while (current.length >= 2 && attempts < budget) {
    const chunk = Math.ceil(current.length / n); let changed = false;
    for (let i = 0; i < current.length && attempts < budget; i += chunk) {
      const candidate = [...current.slice(0, i), ...current.slice(i + chunk)];
      if (!candidate.length) continue;
      attempts++;
      if (await predicate(candidate.join('\n'))) { current = candidate; n = Math.max(2, n - 1); changed = true; break; }
    }
    if (!changed) { if (n >= current.length) break; n = Math.min(current.length, n * 2); }
  }
  return { source: current.join('\n'), attempts, exhausted: attempts >= budget };
}
function processEvidence(r: Run): string {
  return `Command: ${commandText(r.command)}\nExit: ${r.exitCode}; signal: ${r.signal}; timeout: ${r.timedOut}; spawn error: ${r.spawnError}\n\nSTDOUT (${Buffer.from(r.stdoutBase64, 'base64').length} bytes):\n${r.stdout}\nSTDERR (${Buffer.from(r.stderrBase64, 'base64').length} bytes):\n${r.stderr}`;
}
async function reduceFailure(f: Failure, map: MapReport, budget: number): Promise<{ verified?: boolean; [key: string]: unknown }> {
  const file = `reports/upstream/repro/${f.id}.ts`, binary = `bin/repro-${f.id}`;
  const original = readFileSync(resolve(ROOT, f.caseResult.file), 'utf8');
  writeFileSync(resolve(ROOT, file), original);
  const nodeOriginal = await run([process.execPath, '--experimental-strip-types', f.caseResult.file]);
  const initialTypecheck = await run(typecheckCommand(file), 60_000);
  if (!ok(nodeOriginal) || !ok(initialTypecheck)) {
    return { id: f.id, status: 'invalid-baseline', case: f.caseResult.id, node: nodeOriginal, typecheck: initialTypecheck };
  }
  const flags = f.attempt.mode === 'dynamic' ? ['--dynamic'] : [];
  let lastCoverage: Run | null = null;
  let lastBuild: Run | null = null, lastNode: Run | null = null, lastNative: Run | null = null;
  const cache = new Map<string, boolean>();
  const predicate = async (candidate: string): Promise<boolean> => {
    const hash = sha(candidate); if (cache.has(hash)) return cache.get(hash)!;
    // Preserve an Effect import and the observed terminal value. Family labels
    // identify the originating fixture; no alternate API pattern is synthesized.
    if (!/(?:from\s*|import\s*)["']effect(?:\/[^"']*)?["']/.test(candidate)) { cache.set(hash, false); return false; }
    writeFileSync(resolve(ROOT, file), candidate.endsWith('\n') ? candidate : candidate + '\n');
    const tc = await run(typecheckCommand(file), 60_000);
    if (!ok(tc)) { cache.set(hash, false); return false; }
    const node = await run([process.execPath, '--experimental-strip-types', file]);
    if (!ok(node) || !sameBytes(nodeOriginal, node)) { cache.set(hash, false); return false; }
    rmSync(resolve(ROOT, binary), { force: true });
    const build = await run([SCRIPTC, 'build', file, '--npm-static=effect', ...flags, '-o', binary], map.options.compileTimeoutMs);
    let reproduces = false, native: Run | null = null;
    if (f.kind === 'deferred' && ok(build)) {
      const coverage = await run([SCRIPTC, 'coverage', file, '--npm-static=effect', ...flags], map.options.coverageTimeoutMs);
      const candidates = deferredNames(parseCoverage(coverage.stdout + '\n' + coverage.stderr).deferredSites, f.code!);
      const originals = deferredNames(f.attempt.parsedCoverage.deferredSites, f.code!);
      reproduces = ok(coverage) && existsSync(resolve(ROOT, binary)) && candidates.some(site => originals.includes(site));
      if (reproduces) lastCoverage = coverage;
    } else if (f.kind === 'compiler') {
      const trial: Attempt = { ...f.attempt, build };
      reproduces = !ok(build) && (f.code ? diagnostics(build.stdout + '\n' + build.stderr).some(d => d.code === f.code) : build.timedOut === f.attempt.build.timedOut && build.signal === f.attempt.build.signal);
      if (f.code === 'SC3004' || !f.code) reproduces &&= compilerDetail(trial, f.code) === f.detail;
    } else if (ok(build) && existsSync(resolve(ROOT, binary))) {
      native = await run([resolve(ROOT, binary)], 30_000);
      reproduces = deltaSignature(node, native) === f.differential!.signature;
    }
    if (reproduces) { lastBuild = build; lastNode = node; lastNative = native; }
    cache.set(hash, reproduces); return reproduces;
  };
  // Reverify at the committed repro path before attempting reductions. A location-
  // sensitive divergence can fail this predicate; do not claim a verified reduction.
  const reproducible = await predicate(original);
  const reduced = reproducible ? await ddmin(original.split('\n'), predicate, budget) : { source: original, attempts: 0, exhausted: false };
  writeFileSync(resolve(ROOT, file), reduced.source.endsWith('\n') ? reduced.source : reduced.source + '\n');
  // Verify final file independently of cached candidates and preserve exact evidence.
  cache.clear(); lastBuild = null; lastNode = null; lastNative = null; lastCoverage = null; const finalVerified = await predicate(readFileSync(resolve(ROOT, file), 'utf8'));
  const evidencePrefix = `reports/upstream/evidence/${f.id}`;
  if (lastCoverage) raw(evidencePrefix + '.coverage', lastCoverage);
  if (lastBuild) raw(evidencePrefix + '.build', lastBuild);
  if (lastNode) raw(evidencePrefix + '.node', lastNode);
  if (lastNative) raw(evidencePrefix + '.native', lastNative);
  const actualSource = readFileSync(resolve(ROOT, file), 'utf8');
  const p = map.provenance;
  const command = f.kind === 'deferred' ? ['scriptc', 'coverage', file, '--npm-static=effect', ...flags] : ['scriptc', 'build', file, '--npm-static=effect', ...flags, '-o', binary];
  const doc = [`# ${f.id}`, '', `Classification: **${f.classification}**`, '',
    `Signature: \`${f.key}\``, '', `Effect API family: ${f.family}; public entrypoint: ${f.caseResult.entrypoint}`, '',
    '## Exact toolchain', '', `- Effect: ${p.effectVersion}`, `- scriptc CLI: ${p.scriptcVersionOutput}`, `- Release: [${p.scriptcReleaseTag}](${pins.scriptc.releaseUrl})`, `- Release commit: ${p.scriptcReleaseCommit}`, `- CLI-printed commit: ${p.scriptcPrintedCommit ?? 'not printed'}`, `- Node: ${p.nodeVersion}`, `- TypeScript: ${p.typescriptVersion}`, `- pnpm: ${p.pnpmVersion}`, `- Host: ${p.hostTriple} (${p.kernel})`, '',
    '## Minimal command', '', '```sh', 'pnpm install --frozen-lockfile', `npm install -g scriptc@${pins.scriptc.npmVersion}`, commandText(command), ...(f.kind === 'differential' ? [`node --experimental-strip-types ${file}`, `./${binary}`] : []), '```', '',
    '## Reduction status', '',
    `Verified at committed repro path: **${finalVerified}**. Line deletion attempts: ${reduced.attempts}/${budget}. Budget exhausted: ${reduced.exhausted}. Original ${Buffer.byteLength(original)} bytes; repro ${Buffer.byteLength(actualSource)} bytes.`, '',
    `Repro SHA-256: ${sha(actualSource)}`, '',
    'The reducer requires strict typechecking, the same successful Node stdout/stderr/exit baseline, and the original failure signature. It deletes lines only; it does not rewrite Effect idioms or modify dependencies. This is a verified line reduction when true above, not a claim of global minimality.', '',
    '```ts', actualSource.trimEnd(), '```', '', '## Expected behavior', '',
    ...(f.kind === 'deferred' ? ['This packet is a reported deferred lowering gap. The originating terminal-value execution may match Node; this is not a claim that the deferred site was executed.', ''] : []),
    'Compile the ordinary published Effect pattern and match Node byte-for-byte, or report a precise unsupported construct without a compiler crash. A handled typed error in the fixture exits zero.', '',
    '## Full original diagnostic / differential', '', '```text',
    f.kind === 'deferred' ? processEvidence(f.attempt.coverage) : f.kind === 'compiler' ? processEvidence(f.attempt.build) : `NODE\n${processEvidence(f.differential!.node)}\n\nNATIVE\n${processEvidence(f.differential!.native)}`, '```', '',
    ...(lastCoverage ? ['## Repro deferred coverage evidence', '', '```text', processEvidence(lastCoverage), '```', ''] : []),
    ...(lastBuild ? ['## Repro compiler evidence', '', '```text', processEvidence(lastBuild), '```', ''] : []),
    '## Related cases', '', ...[...new Set(f.relatedCases)].map(x => `- ${x}`), '',
    '## Suggested scriptc destination', '',
    'Add the verified reduced program to the scriptc `tests/` differential corpus with the npm-static Effect dependency fixture available. Preserve the normal Effect idiom; this packet proposes a compiler/runtime test and fix in scriptc.', '',
    `The [contributing notes](${pins.scriptc.contributingUrl}) describe comparing Node and native stdout, stderr and exit status. File an issue at [Issues · vercel-labs/scriptc](${pins.scriptc.issuesUrl}). No issue or PR has been opened by this harness.`, '',
  ].join('\n');
  writeFileSync(resolve(ROOT, `reports/upstream/${f.id}.md`), doc);
  console.log(`${f.id}: ${finalVerified ? 'verified' : 'UNVERIFIED'} ${original.length} -> ${actualSource.length} bytes`);
  return { id: f.id, signature: f.key, classification: f.classification, case: f.caseResult.id, relatedCases: f.relatedCases,
    repro: file, packet: `reports/upstream/${f.id}.md`, verified: finalVerified, attempts: reduced.attempts, budgetExhausted: reduced.exhausted,
    originalBytes: Buffer.byteLength(original), reducedBytes: Buffer.byteLength(actualSource), sourceSha256: fileSha(file) };
}
type PacketResult = { id?: string; verified?: boolean; [key: string]: unknown };

function verifyMapSources(map: MapReport): void {
  for (const c of map.cases) {
    if (c.status === 'ready' && c.staticAttempt && fileSha(c.file) !== c.sourceSha256) throw new Error(`Case ${c.id} changed; run pnpm map`);
  }
}

function currentDifferential(map: MapReport): DiffReport | null {
  const path = process.env.DIFF_REPORT ?? 'reports/differentials.json';
  if (!existsSync(resolve(ROOT, path))) return null;
  const diff = readJson<DiffReport>(path);
  assertProvenance(map.provenance, diff.provenance);
  for (const d of diff.results ?? []) assertCurrentBinary(map, d);
  return diff;
}

function assertCurrentBinary(map: MapReport, d: Differential): void {
  const c = map.cases.find(c => c.id === d.caseId);
  const a = d.mode === 'static' ? c?.staticAttempt : c?.dynamicAttempt;
  if (!a?.binary || a.mode !== d.mode || a.binarySha256 !== d.binarySha256) throw new Error(`Differential ${d.caseId} is stale; run pnpm diff`);
}

export function requestedFailures(all: Failure[], requested = process.env.REDUCE_SIGNATURES): Failure[] {
  if (requested === undefined) return all;
  const ids = requested.split(',').map(id => id.trim());
  const unknown = ids.filter(id => !all.some(f => f.id === id));
  if (unknown.length) throw new Error(`Unknown reduction signatures: ${unknown.join(', ')}`);
  return all.filter(f => ids.includes(f.id));
}

export function retainedPacket(r: PacketResult, origin: { key: string; caseResult: { sourceSha256: string } }, identity: string): boolean {
  if (r.verified !== true || r.signature !== origin.key || r.verificationIdentity !== identity || r.originSourceSha256 !== origin.caseResult.sourceSha256) return false;
  if (typeof r.repro !== 'string' || typeof r.sourceSha256 !== 'string') return false;
  return existsSync(resolve(ROOT, r.repro)) && fileSha(r.repro) === r.sourceSha256;
}

function priorVerifications(all: Failure[], selected: Failure[], identity: string): PacketResult[] {
  const path = 'reports/upstream/index.json';
  if (!process.env.REDUCE_SIGNATURES || !existsSync(resolve(ROOT, path))) return [];
  const prior = readJson<{ results: PacketResult[] }>(path);
  const selectedIds = new Set(selected.map(f => f.id));
  return prior.results.filter(r => {
    const f = all.find(f => f.id === r.id);
    return Boolean(f && !selectedIds.has(f.id) && retainedPacket(r, f, identity));
  });
}

function validDifferentialBaseline(c: CaseResult, d: Differential): boolean {
  return d.baselineValid === true && fixtureMatches(c, d.node);
}

function differentialRowsPresent(diff: DiffReport | null): diff is DiffReport {
  return diff !== null && Array.isArray(diff.results);
}

export function differentialCoverage(map: MapReport, diff: DiffReport | null): { complete: boolean; expected: number; missing: string[]; invalidNodeBaselines: string[]; reportPresent: boolean; reportRowsPresent: boolean; reportPartial: boolean } {
  const expected = map.cases.flatMap(c => [c.staticAttempt, c.dynamicAttempt].filter(a => a?.binary).map(a => ({ c, a: a! })));
  const missing: string[] = [], invalidNodeBaselines: string[] = [];
  for (const { c, a } of expected) {
    const rows = (diff?.results ?? []).filter(d => d.caseId === c.id && d.mode === a.mode && d.binarySha256 === a.binarySha256);
    const pair = `${c.id}:${a.mode}:${a.binarySha256}`;
    if (!rows.length) missing.push(pair);
    else if (!rows.every(d => validDifferentialBaseline(c, d))) invalidNodeBaselines.push(pair);
  }
  return { complete: differentialRowsPresent(diff) && !diff.partial && missing.length === 0 && invalidNodeBaselines.length === 0,
    expected: expected.length, missing, invalidNodeBaselines, reportPresent: diff !== null,
    reportRowsPresent: differentialRowsPresent(diff), reportPartial: Boolean(diff?.partial) };
}

export function reductionComplete(map: MapReport, coverage: ReturnType<typeof differentialCoverage>, total: number, verified: number): boolean {
  return !map.partial && coverage.complete && verified === total;
}

function saveIndex(map: MapReport, coverage: ReturnType<typeof differentialCoverage>, all: Failure[], selected: Failure[], results: PacketResult[]): void {
  const verified = results.filter(r => r.verified === true).length;
  const complete = reductionComplete(map, coverage, all.length, verified);
  json('reports/upstream/index.json', { schemaVersion: 1, partial: !complete,
    generatedAt: new Date().toISOString(), distinctSignatures: all.length, totalDiscoveredSignatures: all.length,
    selectedSignatures: selected.length, verifiedSignatures: verified, pendingSignatures: all.length - verified,
    complete, differentialCoverage: coverage,
    harnessErrors: coverage.invalidNodeBaselines.map(pair => `Invalid Node baseline: ${pair}`), results });
}

export async function main(): Promise<void> {
  const map = readJson<MapReport>(process.env.MAP_REPORT ?? 'reports/coverage-map.json');
  assertProvenance(map.provenance, await provenance());
  verifyMapSources(map);
  const diff = currentDifferential(map), coverage = differentialCoverage(map, diff);
  const all = signatures(map, diff), selected = requestedFailures(all);
  for (const pair of coverage.invalidNodeBaselines) console.error(`HARNESS ERROR: Invalid Node baseline: ${pair}`);
  const identity = cacheIdentityFor(map.provenance, map.options);
  const budget = Number(process.env.REDUCE_BUDGET ?? 24);
  if (!Number.isSafeInteger(budget) || budget < 0) throw new Error('REDUCE_BUDGET must be a nonnegative integer');
  mkdirSync(resolve(ROOT, 'reports/upstream/repro'), { recursive: true });
  mkdirSync(resolve(ROOT, 'reports/upstream/evidence'), { recursive: true });
  const results = priorVerifications(all, selected, identity);
  for (const f of selected) {
    results.push({ ...await reduceFailure(f, map, budget), verificationIdentity: identity, originSourceSha256: f.caseResult.sourceSha256 });
    saveIndex(map, coverage, all, selected, results);
  }
  if (results.some(r => r.verified !== true)) process.exitCode = 1;
  if (!selected.length) saveIndex(map, coverage, all, selected, results);
  if (coverage.invalidNodeBaselines.length) process.exitCode = 2;
}
if (process.argv[1] && resolve(process.argv[1]) === resolve(import.meta.filename)) await main();
