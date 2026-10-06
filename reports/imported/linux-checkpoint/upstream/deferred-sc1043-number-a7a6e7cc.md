# deferred-sc1043-number-a7a6e7cc

Classification: **missing lowering**

Signature: `deferred:Number:SC1043`

Effect API family: Number; public entrypoint: effect/Number

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
scriptc coverage reports/upstream/repro/deferred-sc1043-number-a7a6e7cc.ts --npm-static=effect
```

## Reduction status

Verified at committed repro path: **true**. Line deletion attempts: 8/12. Budget exhausted: false. Original 155 bytes; repro 84 bytes.

Repro SHA-256: 2f84e2a3799d7bcdac62d2695b0467fe6f433815f394a9c7b65b575692834b32

The reducer requires strict typechecking, the same successful Node stdout/stderr/exit baseline, and the original failure signature. It deletes lines only; it does not rewrite Effect idioms or modify dependencies. This is a verified line reduction when true above, not a claim of global minimality.

```ts
import * as Number from "effect/Number"
console.log(`number:${Number.sum(20, 22)}`)
```

## Expected behavior

This packet is a reported deferred lowering gap. The originating terminal-value execution may match Node; this is not a claim that the deferred site was executed.

Compile the ordinary published Effect pattern and match Node byte-for-byte, or report a precise unsupported construct without a compiler crash. A handled typed error in the fixture exits zero.

## Full original diagnostic / differential

```text
Command: /tmp/effect-scriptc-tools/bin/scriptc coverage cases/module-number.ts --npm-static=effect
Exit: 0; signal: null; timeout: false; spawn error: null

STDOUT (2430 bytes):
scriptc coverage /workspace/shared/effect-scriptc-compat/cases/module-number.ts

  statements analyzed   1010
  compile statically    1009  (99%)

  npm packages compiled statically (--npm-static):
    effect  static

  deferred to runtime   7 sites (JS statements that throw their fence if executed)
      ×1  comparing non-number, non-string values are not supported yet (instantiating 'number' with (string))                                                                                                                                                                                          SC1043
      ×1  'string' values where 'number' is expected is not supported yet (instantiating 'number' with (string))                                                                                                                                                                                        SC1090
      ×1  'in' on 'string' receivers (only process.env, Error instances, record-typed values, and unions of fixed record shapes answer; narrow first: check a discriminant field, or compare with '!== undefined'/'!== null' for unit arms) are not supported yet (instantiating 'hash' with (string))  SC1090
      ×1  'Object.defineProperty' is part of the standard library types but has no scriptc lowering yet (instantiating 'assignProperty' with (m17.%cx12200.Base, unknown, unknown))                                                                                                                     SC2020
      ×1  'string.toString' is part of the standard library types but has no scriptc lowering yet (instantiating 'hash' with (string))                                                                                                                                                                  SC2020
      ×1  'string.getTime' is part of the standard library types but has no scriptc lowering yet (instantiating 'hash' with (string))                                                                                                                                                                   SC2020
      ×1  'string.toISOString' is part of the standard library types but has no scriptc lowering yet (instantiating 'hash' with (string))                                                                                                                                                               SC2020


STDERR (0 bytes):

```

## Repro deferred coverage evidence

```text
Command: /tmp/effect-scriptc-tools/bin/scriptc coverage reports/upstream/repro/deferred-sc1043-number-a7a6e7cc.ts --npm-static=effect
Exit: 0; signal: null; timeout: false; spawn error: null

STDOUT (2465 bytes):
scriptc coverage /workspace/shared/effect-scriptc-compat/reports/upstream/repro/deferred-sc1043-number-a7a6e7cc.ts

  statements analyzed   1010
  compile statically    1009  (99%)

  npm packages compiled statically (--npm-static):
    effect  static

  deferred to runtime   7 sites (JS statements that throw their fence if executed)
      ×1  comparing non-number, non-string values are not supported yet (instantiating 'number' with (string))                                                                                                                                                                                          SC1043
      ×1  'string' values where 'number' is expected is not supported yet (instantiating 'number' with (string))                                                                                                                                                                                        SC1090
      ×1  'in' on 'string' receivers (only process.env, Error instances, record-typed values, and unions of fixed record shapes answer; narrow first: check a discriminant field, or compare with '!== undefined'/'!== null' for unit arms) are not supported yet (instantiating 'hash' with (string))  SC1090
      ×1  'Object.defineProperty' is part of the standard library types but has no scriptc lowering yet (instantiating 'assignProperty' with (m17.%cx12200.Base, unknown, unknown))                                                                                                                     SC2020
      ×1  'string.toString' is part of the standard library types but has no scriptc lowering yet (instantiating 'hash' with (string))                                                                                                                                                                  SC2020
      ×1  'string.getTime' is part of the standard library types but has no scriptc lowering yet (instantiating 'hash' with (string))                                                                                                                                                                   SC2020
      ×1  'string.toISOString' is part of the standard library types but has no scriptc lowering yet (instantiating 'hash' with (string))                                                                                                                                                               SC2020


STDERR (0 bytes):

```

## Repro compiler evidence

```text
Command: /tmp/effect-scriptc-tools/bin/scriptc build reports/upstream/repro/deferred-sc1043-number-a7a6e7cc.ts --npm-static=effect -o bin/repro-deferred-sc1043-number-a7a6e7cc
Exit: 0; signal: null; timeout: false; spawn error: null

STDOUT (82 bytes):
/workspace/shared/effect-scriptc-compat/bin/repro-deferred-sc1043-number-a7a6e7cc

STDERR (0 bytes):

```

## Related cases

- module-number:static

## Suggested scriptc destination

Add the verified reduced program to the scriptc `tests/` differential corpus with the npm-static Effect dependency fixture available. Preserve the normal Effect idiom; this packet proposes a compiler/runtime test and fix in scriptc.

The [contributing notes](https://github.com/vercel-labs/scriptc/blob/v0.2.3/CONTRIBUTING.md) describe comparing Node and native stdout, stderr and exit status. File an issue at [Issues · vercel-labs/scriptc](https://github.com/vercel-labs/scriptc/issues). No issue or PR has been opened by this harness.
