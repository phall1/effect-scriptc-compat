import { resolve } from 'node:path';
import { cases, concurrent, fileSha, json, ok, run, sameBytes } from './common.ts';
import type { Case, Run } from './types.ts';

export function fixtureMatches(c: Case, r: Run): boolean {
  return ok(r) && r.stderrBase64 === '' && typeof c.expectedStdout === 'string' &&
    r.stdoutBase64 === Buffer.from(c.expectedStdout).toString('base64');
}

export async function main(): Promise<void> {
  const list = cases().filter(c => c.status === 'ready');
  const results = await concurrent(list, 4, async c => {
    const command = [process.execPath, '--experimental-strip-types', c.file];
    const first = await run(command, 30_000), second = await run(command, 30_000);
    const valid = fixtureMatches(c, first) && fixtureMatches(c, second) && sameBytes(first, second);
    if (!valid) console.error(`INVALID NODE FIXTURE: ${c.id}`);
    return { caseId: c.id, sourceSha256: fileSha(c.file), valid, first, second };
  });
  const invalid = results.filter(r => !r.valid).length;
  json('reports/corpus-validation.json', { schemaVersion: 1, generatedAt: new Date().toISOString(), nodeVersion: process.version,
    manifestSha256: fileSha('cases/manifest.json'), summary: { ready: list.length, valid: list.length - invalid, invalid }, results });
  console.log(`Node corpus: ${list.length - invalid}/${list.length} stable, exact expected baselines`);
  if (invalid) process.exitCode = 1;
}
if (process.argv[1] && resolve(process.argv[1]) === resolve(import.meta.filename)) await main();
