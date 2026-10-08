# Effect 4 × scriptc compatibility harness

> **Recovered checkpoint:** the complete 456-case inventory (404 runnable probes) is now checked in. Historical Linux evidence is preserved separately in `reports/imported/linux-checkpoint/`: 122 measured cases, 39 differentials, and five verified packets, explicitly partial. Current-host progress is saved in `reports/map-session.json`, the selected map report, and `reports/checkpoint.json`; historical binaries are not present or reused. See [recovery notes](docs/recovery.md).

Host-first, reproducible probes for the published **effect@4.0.2** package and the **scriptc@0.2.3** npm CLI. This repository discovers compiler/runtime gaps, compares native behavior with Node, and prepares local upstream reports. It does not modify Effect or vendor scriptc. The compiler fixes themselves live on the owned scriptc fork, currently rebased onto upstream v0.2.6.

## Pins and prerequisites

| Tool | Pin |
| --- | --- |
| Effect | `4.0.2`, the only runtime dependency |
| scriptc global npm CLI | `0.2.3` |
| scriptc GitHub release | [`v0.2.3`](https://github.com/vercel-labs/scriptc/releases/tag/v0.2.3) |
| Release commit | `52169979ee3fac98ad6651eb2a717fbbf4ac1f89` |
| Node / reference TS runner | `24.19.0`, `node --experimental-strip-types` |
| TypeScript | `7.0.2`, strict / ES2025 / bundler |
| Node type declarations | `24.19.1` |
| pnpm | `11.19.0` |
| Initial host | Linux x64, `x86_64-unknown-linux-gnu` |
| Initial native linker | Debian Clang `19.1.7 (3+b1)`; exact package hashes in `reports/imported/linux-checkpoint/linker-provenance.json` |

Node must be at least 24 for scriptc. `.node-version` and `.nvmrc` pin the reference run. Every map records the actual Node, TypeScript, pnpm, scriptc and native-linker outputs, release tag/commit, host, dependency lockfile and binary hashes. The CLI prints `0.2.3`, without a commit; the independently verified GitHub tag commit is recorded separately. No local Effect checkout or compiler checkout is used.

Shared terminal workers inherit their server's environment; changing cwd does not activate `.node-version` or clear another checkout's Nix shell. Explicitly select the reference Node and preflight the recorded control/provenance. On macOS, even `/usr/bin/clang` is a dispatcher: inherited `DEVELOPER_DIR`/`SDKROOT` can select another toolchain. Use a clean environment and the intended developer directory; never relax the stale-context guard to make a comparison pass.

A supported Clang toolchain and native system libraries must be installed. On Linux, install your distribution's Clang package; on macOS arm64, install the host Command Line Tools. `SCRIPTC_LINKER=/absolute/path/to/clang` is scriptc's supported override. The harness builds and differentially checks a non-Effect control before the map, so missing linkers do not masquerade as Effect findings.

```sh
npm install --global pnpm@11.19.0 scriptc@0.2.3
pnpm install
pnpm generate
pnpm check
pnpm map
pnpm diff
pnpm reduce
```

`pnpm check` includes strict typechecking, harness/orchestration regressions, and two Node executions of all 404 ready fixtures against exact expected stdout, empty stderr and successful exit. `pnpm validate` runs that corpus baseline check independently.

`pnpm map` regenerates `reports/coverage-map.json` and `.md` from the committed, source-derived corpus. `pnpm generate` re-reads the installed export map and declaration files and regenerates the corpus/manifest. `pnpm diff` regenerates `reports/differentials.json`; in a successfully generated report, exit 1 means a real mismatch and exit 2 means an invalid Node fixture baseline. An unhandled harness exception can also exit 1 without publishing a fresh report; that is not a native finding. `pnpm reduce` creates verified local repros and issue packets; it never opens issues or PRs. Mapping reports refusals as data and exits zero unless the harness itself is invalid.

## Three execution tiers, plus compile-time rejection

1. **static**: static build produced a binary and successful, parseable coverage reports no deferred or island sites
2. **deferred**: a static build produced a binary with named runtime fences/remainders, or coverage could not reliably establish that it had none
3. **dynamic-fallback**: the static build was refused; a separate `--dynamic` retry built a binary, retaining `--npm-static=effect`

**rejected** is the fourth map outcome: neither requested build produced a binary. Preserve SC diagnostics, compiler crashes, and timeouts separately in the evidence. Rejected failures without SC codes are not assigned invented codes.

**A green coverage line with deferred sites is not compatibility.** Deferred statements may throw when reached even when this particular terminal-value execution matches Node. Similarly, static coverage is a compiler claim; a differing Node/native result is a finding, including **false coverage**. Coverage's statement denominator includes the scriptc program graph and its analyzed unreached remainder, so it is not a count of only reachable Effect code. Grouped coverage rows may omit source locations. The harness supplements locations only from exact matching deferred-fence strings in the compiler’s default LLVM output; empty location/hint arrays mean unavailable, not absent defects.

`skipped-needs-io` and `uncovered` are corpus statuses outside those compatibility tiers. A skipped or unprobed export is never counted as compatible. Explicit network/binary-dependent surfaces are skipped instead of attempting external I/O. Comment-only placeholder files preserve inventory gaps visibly.

## Corpus and scope

`cases/public-exports.json` is generated from `node_modules/effect/package.json`, expanding wildcard exports against installed `.d.ts` files, applying explicit null export exclusions, and retaining declaration hashes. Runtime names include published named exports/aliases. Small terminal-value cases come from installed documentation examples and typechecked primary API adapters; each executable case imports only `effect` or a published `effect/*` path. There are no shared runtime helpers in cases.

`cases/manifest.json` records public entrypoint, Effect module, API family, exercised APIs, source file, readiness status, and expected stable stdout. Required patterns are isolated: ordinary Effect generators/functions, success and handled errors, concurrency, services/layers, resources, Stream, Schema, collections, retry, cause inspection, callbacks, and v4 namespace barrels. Deterministic logging replaces the logger service for the Effect.log probe so wall-clock logger prefixes do not manufacture a mismatch. Fixtures use fixed inputs, no network/randomness/Date.now, and zero exits for handled typed errors.

A passing case establishes the observed path only. One probe for a module does **not** establish every exported function, branch, or configuration. The manifest lists exercised APIs; gaps are retained rather than filled with import-only or `typeof` smoke tests. No WASI, mobile, or cross-compilation is attempted before the host map.

## Exact commands and evidence

For every ready fixture the map runs:

```sh
scriptc coverage cases/<case>.ts --npm-static=effect
scriptc build cases/<case>.ts --npm-static=effect -o bin/<case>
```

Only after static refusal it separately runs:

```sh
scriptc coverage cases/<case>.ts --npm-static=effect --dynamic
scriptc build cases/<case>.ts --npm-static=effect --dynamic -o bin/<case>.dynamic
```

All cases strict-typecheck against the published package before classification. The parser recognizes actual pinned-CLI output, respects deferred groups even if a footer says fully static, distinguishes unreached groups, and fails conservatively when coverage is missing or invalid. Both commands' complete raw stdout/stderr, exit codes/signals, deadlines, command arguments and elapsed times are retained under `reports/raw/`. Binaries live in ignored `bin/`; reports include byte size and SHA-256. Native binaries must be rebuilt on your host.

The differential runner requires a defined exact expected stdout, empty Node stderr and successful Node execution; invalid baselines have no native finding and exit 2. It executes Node and every built binary with a 30-second deadline. It compares **stdout bytes, stderr bytes, and exit code**, additionally flagging signals, launch errors and hangs. Base64 fields retain invalid UTF-8 exactly; human-readable strings are supplemental. There is no output normalization. Runtime is informative; maximum RSS is null where unsampled and never gates compatibility. Source/binary/provenance changes require remapping rather than reusing stale results.

## Repro packets

`reports/upstream/index.json` lists one packet per distinct compiler diagnostic/API family, deferred SC/API family, or exact runtime delta. Because `SC3004` is a general compiler-failure wrapper, its diagnostic message is part of the grouping key. Deferred-but-equal packets explicitly say their fence was not demonstrated to execute.

The reducer deletes source lines while preserving strict typechecking, the exact successful Node terminal value, and the compiler/deferred/differential failure predicate. It verifies the final file again at its committed repro path. It never edits Effect or rewrites idioms to fit scriptc. Bounded line reduction is not a claim of global minimality; packets record attempts, exhausted budgets, byte counts and whether verification succeeded. Unverified reductions are visibly marked and cause a nonzero reducer exit.

Index `complete:true` requires a nonpartial map, a nonpartial current differential covering every `(caseId, mode, binarySha256)` with a valid Node baseline, and all discovered signatures verified. Missing reports/rows and representative-only reductions remain explicitly partial; invalid Node baselines are recorded as harness errors and exit 2, never native failure signatures. Bounded compiler-only reductions remain usable without exhaustive runtime evidence.

Packets include versions, host triple, minimal command, complete diagnostic/differential, reduced `.ts`, classification, and the suggested scriptc `tests/` differential corpus destination. Upstream's [contributing notes](https://github.com/vercel-labs/scriptc/blob/v0.2.3/CONTRIBUTING.md) and [test harness notes](https://github.com/vercel-labs/scriptc/blob/v0.2.3/tests/harness/README.md) describe comparing Node with native execution. Issues belong at [Issues · vercel-labs/scriptc](https://github.com/vercel-labs/scriptc/issues).

## Controls and tuning

| Variable | Default | Purpose |
| --- | ---: | --- |
| `SCRIPTC` | `scriptc` | External global CLI executable; version must match pin |
| `SCRIPTC_LINKER` | scriptc default | Supported host Clang override |
| `MAP_JOBS` | `2` | Concurrent independent map cases |
| `COMPILE_TIMEOUT_MS` | `180000` | Per compiler build deadline |
| `COVERAGE_TIMEOUT_MS` | `180000` | Per coverage deadline |
| `DIFF_JOBS` | `2` | Concurrent independent differential pairs |
| `REDUCE_BUDGET` | `24` | Candidate line-deletion attempts per signature |
| `MAP_RESUME` | off | Reuse verified case checkpoints for interrupted same-toolchain runs |
| `MAP_CASES` | all | Comma-separated exact case IDs; empty/unknown IDs fail before modifying evidence |
| `MAP_REPORT` | host/shard default | JSON map destination inside `reports/`; shared by diff and reduce |
| `DIFF_REPORT` | `reports/differentials.json` | Default or isolated `reports/**/*.differentials.json`; map/metadata/raw evidence destinations are rejected before execution |

Default mapping performs a fresh run. Resume is optional and requires unchanged source, compiler/Node/linker executable hashes, linker outputs, and deadlines. Malformed, incomplete or legacy records rerun rather than relying on manually asserted context. Result checkpoints are atomically published; stale binaries and LLVM output are removed before rebuilding. The reducer and differential runner keep runtime deadlines fixed at 30 seconds. All execution is host-local; no cases use sockets, spawn, signals, or a remote service as their program input.

## Files

- `cases/`: source-derived independent programs and public export inventory
- `scripts/generate.ts`: corpus generator/validation
- `scripts/map.ts`: coverage/build map
- `scripts/diff.ts`: byte-for-byte differential runner
- `scripts/reduce.ts`: line reducer and upstream packets
- `reports/coverage-map.{json,md}`: generated compatibility map
- `reports/differentials.json`: generated execution comparison
- `reports/upstream/`: generated markdown packets, repro source, verification evidence
- `tests/`: parser, process, differential and reduction regressions

Generated reports are committed. Compiler binaries, npm packages, caches and IR artifacts are not vendored.

## Optional independent-host shards

Only run on additional authorized hosts after checking runner capacity and billing. The harness itself does not provision hosts or start paid jobs. On each host, install the same pins, choose a zero-based shard, and retain the entire `reports/` tree as an artifact:

```sh
MAP_SHARD_INDEX=0 MAP_SHARD_TOTAL=12 MAP_SHARD_NAME=host-0 pnpm map
MAP_REPORT=reports/shards/host-0.json DIFF_REPORT=reports/shards/host-0.differentials.json pnpm diff
MAP_REPORT=reports/shards/host-0.json DIFF_REPORT=reports/shards/host-0.differentials.json pnpm reduce
```

Shard assignment uses the sorted committed manifest and modulo; keep that manifest fixed across all jobs. `pnpm merge reports/imported` produces `reports/aggregate.{json,md}` after shard artifacts are placed under `reports/imported/<host>/`. Every observation retains its exact runner provenance. Missing cases and cross-runner disagreements remain visible; this does not overwrite or fabricate a complete single-host map. No workflow is automatically dispatched by these scripts.

`pnpm checkpoint` snapshots only fully completed exact-source/toolchain observations from the current map session while a long local map continues. It works on the first interrupted run without an older completed map, honors its selected/shard destination, validates binary hashes, and marks pending cases explicitly. It is a progress-saving command, not a substitute for finishing `pnpm map`.

Manual multi-host workflow setup, cost bounds, artifact recovery and resume safety: [GitHub Actions shard guide](docs/github-actions-shards.md).
