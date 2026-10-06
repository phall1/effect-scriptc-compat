# sc3004-effect-concurrency-ac7ecbfd

Classification: **crash/hang**

Signature: `compiler:Effect.concurrency:SC3004:null is not representable in the target union (a value narrowed or asserted past it still held it)`

Effect API family: Effect.concurrency; public entrypoint: effect

## Exact toolchain

- Effect: 4.0.1
- scriptc CLI: 0.2.3
- Release: [v0.2.3](https://github.com/vercel-labs/scriptc/releases/tag/v0.2.3)
- Release commit: 52169979ee3fac98ad6651eb2a717fbbf4ac1f89
- CLI-printed commit: not printed
- Node: v24.19.0
- TypeScript: 7.0.2
- pnpm: 11.19.0
- Host: x86_64-unknown-linux-gnu (6.18.44)

## Minimal command

```sh
pnpm install --frozen-lockfile
npm install -g scriptc@0.2.3
scriptc build reports/upstream/repro/sc3004-effect-concurrency-ac7ecbfd.ts --npm-static=effect -o bin/repro-sc3004-effect-concurrency-ac7ecbfd
```

## Reduction status

Verified at committed repro path: **true**. Line deletion attempts: 12/12. Budget exhausted: true. Original 272 bytes; repro 205 bytes.

Repro SHA-256: beaf3aecc242e0c8198ffc5048115343f81ffabe1781f3f9c0c081871685f9c2

The reducer requires strict typechecking, the same successful Node stdout/stderr/exit baseline, and the original failure signature. It deletes lines only; it does not rewrite Effect idioms or modify dependencies. This is a verified line reduction when true above, not a claim of global minimality.

```ts
import { Effect } from "effect"
const result = await Effect.runPromise(Effect.all([
  Effect.succeed(1), Effect.succeed(2), Effect.succeed(3)
], { concurrency: 2 }))
console.log(`all:${result.join(",")}`)
```

## Expected behavior

Compile the ordinary published Effect pattern and match Node byte-for-byte, or report a precise unsupported construct without a compiler crash. A handled typed error in the fixture exits zero.

## Full original diagnostic / differential

```text
Command: /tmp/effect-scriptc-tools/bin/scriptc build cases/concurrency-all.ts --npm-static=effect -o bin/concurrency-all
Exit: 1; signal: null; timeout: false; spawn error: null

STDOUT (0 bytes):

STDERR (194 bytes):
/workspace/shared/effect-scriptc-compat/cases/concurrency-all.ts:1:1 - error SC3004: null is not representable in the target union (a value narrowed or asserted past it still held it)

1 error.

```

## Repro compiler evidence

```text
Command: /tmp/effect-scriptc-tools/bin/scriptc build reports/upstream/repro/sc3004-effect-concurrency-ac7ecbfd.ts --npm-static=effect -o bin/repro-sc3004-effect-concurrency-ac7ecbfd
Exit: 1; signal: null; timeout: false; spawn error: null

STDOUT (0 bytes):

STDERR (230 bytes):
/workspace/shared/effect-scriptc-compat/reports/upstream/repro/sc3004-effect-concurrency-ac7ecbfd.ts:1:1 - error SC3004: null is not representable in the target union (a value narrowed or asserted past it still held it)

1 error.

```

## Related cases

- concurrency-all:static
- concurrency-all:dynamic
- concurrency-for-each:static
- concurrency-for-each:dynamic
- concurrency-race:static
- concurrency-race:dynamic
- concurrency-timeout:static
- concurrency-timeout:dynamic

## Suggested scriptc destination

Add the verified reduced program to the scriptc `tests/` differential corpus with the npm-static Effect dependency fixture available. Preserve the normal Effect idiom; this packet proposes a compiler/runtime test and fix in scriptc.

The [contributing notes](https://github.com/vercel-labs/scriptc/blob/v0.2.3/CONTRIBUTING.md) describe comparing Node and native stdout, stderr and exit status. File an issue at [Issues · vercel-labs/scriptc](https://github.com/vercel-labs/scriptc/issues). No issue or PR has been opened by this harness.
