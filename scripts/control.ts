import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { binaryInfo, json, ok, raw, ROOT, run, sameBytes, SCRIPTC } from './common.ts';
export async function control(timeoutMs = 180_000): Promise<void> {
  mkdirSync(resolve(ROOT, '.work'), { recursive: true });
  mkdirSync(resolve(ROOT, 'bin'), { recursive: true });
  const file = '.work/compiler-control.ts';
  writeFileSync(resolve(ROOT, file), 'console.log("scriptc-control:42");\n');
  rmSync(resolve(ROOT, 'bin/compiler-control'), { force: true });
  const build = await run([SCRIPTC, 'build', file, '--npm-static=effect', '-o', 'bin/compiler-control'], timeoutMs);
  raw('reports/raw/compiler-control.build', build);
  if (!ok(build) || !binaryInfo('bin/compiler-control').binary) { json('reports/control.json', { passed: false, build }); throw new Error('Non-Effect compiler control failed. Install a supported Clang linker before mapping Effect. See reports/control.json'); }
  const node = await run([process.execPath, '--experimental-strip-types', file]);
  const native = await run([resolve(ROOT, 'bin/compiler-control')]);
  const passed = ok(node) && sameBytes(node, native);
  json('reports/control.json', { passed, build, node, native });
  if (!passed) throw new Error('Non-Effect compiler control diverged. See reports/control.json');
}
