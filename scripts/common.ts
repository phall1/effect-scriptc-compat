import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, realpathSync, renameSync, statSync, writeFileSync } from 'node:fs';
import { delimiter, dirname, resolve } from 'node:path';
import { arch, platform, release } from 'node:os';
import type { Case, Provenance, Run } from './types.ts';

export const ROOT = resolve(import.meta.dirname, '..');
export const SCRIPTC = process.env.SCRIPTC ?? 'scriptc';
export const pins = JSON.parse(readFileSync(resolve(ROOT, 'toolchain.json'), 'utf8'));
export function json(path: string, value: unknown): void {
  mkdirSync(dirname(resolve(ROOT, path)), { recursive: true });
  const destination = resolve(ROOT, path), temporary = `${destination}.${process.pid}.tmp`;
  writeFileSync(temporary, JSON.stringify(value, null, 2) + '\n');
  renameSync(temporary, destination);
}
export function readJson<T>(path: string): T { return JSON.parse(readFileSync(resolve(ROOT, path), 'utf8')); }
export function sha(data: string | Buffer): string { return createHash('sha256').update(data).digest('hex'); }
export function fileSha(path: string): string { return sha(readFileSync(resolve(ROOT, path))); }
export function shellQuote(s: string): string { return /^[A-Za-z0-9_./=:@+-]+$/.test(s) ? s : `'${s.replaceAll("'", "'\\''")}'`; }
export function commandText(cmd: string[]): string { return cmd.map(shellQuote).join(' '); }
export function run(command: string[], timeoutMs = 30_000, cwd = ROOT): Promise<Run> {
  return new Promise((done) => {
    const start = performance.now();
    const out: Buffer[] = [], err: Buffer[] = [];
    let timedOut = false, spawnError: string | null = null;
    const child = spawn(command[0]!, command.slice(1), {
      cwd, detached: process.platform !== 'win32', stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, NO_COLOR: '1', FORCE_COLOR: '0', TZ: 'UTC', LC_ALL: 'C' },
    });
    let maxRssKb: number | null = null;
    const rssTimer = process.platform === 'linux' ? setInterval(() => {
      try { const m = readFileSync(`/proc/${child.pid}/status`, 'utf8').match(/^VmHWM:\s+(\d+) kB/m); if (m) maxRssKb = Math.max(maxRssKb ?? 0, Number(m[1])); } catch { /* process finished */ }
    }, 250) : null;
    const timer = setTimeout(() => {
      timedOut = true;
      try { if (process.platform !== 'win32' && child.pid) process.kill(-child.pid, 'SIGKILL'); else child.kill('SIGKILL'); } catch { /* exited concurrently */ }
    }, timeoutMs);
    child.stdout?.on('data', (b: Buffer) => out.push(b));
    child.stderr?.on('data', (b: Buffer) => err.push(b));
    child.on('error', (e) => { spawnError = e.message; });
    child.on('close', (exitCode, signal) => {
      clearTimeout(timer); if (rssTimer) clearInterval(rssTimer);
      const stdout = Buffer.concat(out), stderr = Buffer.concat(err);
      done({ command, cwd, exitCode, signal, timedOut, spawnError,
        durationMs: Math.round((performance.now() - start) * 1000) / 1000, maxRssKb,
        stdout: stdout.toString('utf8'), stderr: stderr.toString('utf8'),
        stdoutBase64: stdout.toString('base64'), stderrBase64: stderr.toString('base64') });
    });
  });
}
export function ok(r: Run): boolean { return r.exitCode === 0 && !r.signal && !r.timedOut && !r.spawnError; }
export function sameBytes(a: Run, b: Run): boolean {
  return a.stdoutBase64 === b.stdoutBase64 && a.stderrBase64 === b.stderrBase64 &&
    a.exitCode === b.exitCode && a.signal === b.signal && !a.timedOut && !b.timedOut && !a.spawnError && !b.spawnError;
}
export function raw(prefix: string, result: Run): void {
  mkdirSync(dirname(resolve(ROOT, prefix)), { recursive: true });
  writeFileSync(resolve(ROOT, prefix + '.stdout'), Buffer.from(result.stdoutBase64, 'base64'));
  writeFileSync(resolve(ROOT, prefix + '.stderr'), Buffer.from(result.stderrBase64, 'base64'));
  json(prefix + '.json', result);
}
export function cases(): Case[] {
  const data = readJson<Case[] | { cases: Case[] }>('cases/manifest.json');
  const list = Array.isArray(data) ? data : data.cases;
  const seen = new Set<string>();
  for (const c of list) {
    if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(c.id) || seen.has(c.id)) throw new Error(`Unsafe or duplicate case id: ${c.id}`);
    seen.add(c.id);
    if (!c.file.startsWith('cases/') || c.file.includes('..') || c.file.includes('\\')) throw new Error(`Unsafe case path: ${c.file}`);
  }
  return list.sort((a, b) => a.id.localeCompare(b.id));
}
export function typecheckCommand(file: string): string[] {
  return [resolve(ROOT, 'node_modules/.bin/tsc'), '--ignoreConfig', '--noEmit', '--strict', '--target', 'ES2025', '--module', 'ESNext', '--moduleResolution', 'Bundler', '--allowImportingTsExtensions', '--verbatimModuleSyntax', '--types', 'node', file];
}
export async function provenance(): Promise<Provenance> {
  const commands = {
    node: await run([process.execPath, '-v']),
    scriptc: await run([SCRIPTC, '--version']),
    pnpm: await run(['pnpm', '--version']),
    typescript: await run([resolve(ROOT, 'node_modules/.bin/tsc'), '--version']),
    linker: await run([process.env.SCRIPTC_LINKER ?? 'clang', '--version']),
    systemLinker: await run(['ld', '--version']),
  };
  const { effectVersion, typescriptVersion, versionOut, scriptcVersion } = installedVersions(commands.scriptc);
  const executableHashes = {
    node: fileSha(process.execPath), scriptc: executableSha(SCRIPTC),
    linker: executableSha(process.env.SCRIPTC_LINKER ?? 'clang'), systemLinker: executableSha('ld'),
  };
  const cliSha256 = executableHashes.scriptc;
  return { nodeVersion: commands.node.stdout.trim(), pnpmVersion: ok(commands.pnpm) ? commands.pnpm.stdout.trim() : null,
    effectVersion, typescriptVersion, scriptcVersion, scriptcVersionOutput: versionOut,
    scriptcPrintedCommit: versionOut.match(/\b[0-9a-f]{7,40}\b/)?.[0] ?? null,
    scriptcReleaseTag: pins.scriptc.githubReleaseTag, scriptcReleaseCommit: pins.scriptc.githubCommit,
    hostTriple: hostTriple(),
    platform: platform(), arch: arch(), kernel: release(), toolchainPins: pins,
    lockfileSha256: fileSha('pnpm-lock.yaml'), effectPackageJsonSha256: fileSha('node_modules/effect/package.json'), cliSha256, executableHashes, commands };
}
function hostTriple(): string {
  const cpu = ({ x64: 'x86_64', arm64: 'aarch64' } as Record<string, string>)[arch()] ?? arch();
  const os = ({ darwin: 'apple-darwin', linux: 'unknown-linux-gnu' } as Record<string, string>)[platform()] ?? platform();
  return `${cpu}-${os}`;
}

function installedVersions(scriptc: Run): { effectVersion: string; typescriptVersion: string; versionOut: string; scriptcVersion: string } {
  const effectVersion = readJson<{ version: string }>('node_modules/effect/package.json').version;
  const typescriptVersion = readJson<{ version: string }>('node_modules/typescript/package.json').version;
  const versionOut = scriptc.stdout.trim() || scriptc.stderr.trim();
  const scriptcVersion = versionOut.match(/\b\d+\.\d+\.\d+(?:[-+][\w.-]+)?\b/)?.[0] ?? 'unavailable';
  if (!ok(scriptc)) throw new Error(`scriptc unavailable: ${scriptc.spawnError ?? versionOut}. Install npm install -g scriptc@${pins.scriptc.npmVersion}`);
  if (scriptcVersion !== pins.scriptc.npmVersion) throw new Error(`scriptc pin mismatch: expected ${pins.scriptc.npmVersion}, got ${versionOut}`);
  if (effectVersion !== pins.effect || typescriptVersion !== pins.typescript) throw new Error('Installed Effect / TypeScript does not match toolchain.json');
  if (Number(process.versions.node.split('.')[0]) < 24) throw new Error('Node >=24 is required');
  return { effectVersion, typescriptVersion, versionOut, scriptcVersion };
}

export async function concurrent<T, U>(items: T[], jobs: number, fn: (x: T, i: number) => Promise<U>): Promise<U[]> {
  const results: U[] = new Array(items.length); let cursor = 0;
  await Promise.all(Array.from({ length: Math.max(1, jobs) }, async () => {
    for (;;) { const i = cursor++; if (i >= items.length) return; results[i] = await fn(items[i]!, i); }
  }));
  return results;
}
export function binaryInfo(file: string): { binary: string | null; binarySize: number | null; binarySha256: string | null } {
  const path = resolve(ROOT, file);
  if (!existsSync(path) || !statSync(path).isFile()) return { binary: null, binarySize: null, binarySha256: null };
  return { binary: file, binarySize: statSync(path).size, binarySha256: fileSha(file) };
}

export function executableSha(command: string): string | null {
  const candidates = command.includes('/') ? [resolve(ROOT, command)] : (process.env.PATH ?? '').split(delimiter).map(dir => resolve(dir, command));
  const path = candidates.find(path => existsSync(path) && statSync(path).isFile());
  return path ? fileSha(realpathSync(path)) : null;
}

export function assertProvenance(expected: Provenance, actual: Provenance): void {
  for (const key of ['nodeVersion', 'effectVersion', 'typescriptVersion', 'scriptcVersion', 'scriptcReleaseCommit', 'hostTriple', 'lockfileSha256', 'effectPackageJsonSha256', 'cliSha256'] as const) {
    if (expected[key] !== actual[key]) throw new Error(`Stale map: ${key} changed (${expected[key]} -> ${actual[key]}). Run pnpm map again.`);
  }
  if (JSON.stringify(expected.executableHashes) !== JSON.stringify(actual.executableHashes)) throw new Error('Stale map: compiler, Node or linker executable changed. Run pnpm map again.');
  for (const key of ['linker', 'systemLinker']) {
    if (toolOutputIdentity(expected.commands[key]) !== toolOutputIdentity(actual.commands[key])) throw new Error(`Stale map: ${key} output changed. Run pnpm map again.`);
  }
}

export function linkerIdentity(q: Provenance): string {
  return JSON.stringify([q.executableHashes, toolOutputIdentity(q.commands.linker), toolOutputIdentity(q.commands.systemLinker)]);
}

function toolOutputIdentity(r: Run | undefined): string {
  if (!r) return 'missing';
  return JSON.stringify([r.stdout, r.stderr, r.exitCode, r.signal, r.timedOut, r.spawnError]);
}

export function cacheIdentityFor(q: Provenance, o: { compileTimeoutMs: number; coverageTimeoutMs: number }): string {
  return sha(JSON.stringify({ schema: 3, executables: q.executableHashes, node: q.nodeVersion, effect: q.effectVersion, typescript: q.typescriptVersion,
    scriptc: q.scriptcVersion, host: q.hostTriple, lock: q.lockfileSha256, effectPackage: q.effectPackageJsonSha256,
    cli: q.cliSha256, linker: toolOutputIdentity(q.commands.linker),
    systemLinker: toolOutputIdentity(q.commands.systemLinker), compilerTimeout: o.compileTimeoutMs, coverageTimeout: o.coverageTimeoutMs }));
}
