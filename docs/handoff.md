# Active handoff

## Current state (2026-10-09)

This section is the live next action. The notes below it stay as history of the stopped published-CLI map and must not be relabeled.

- Oracle is published **effect@4.0.2** on Node **24.21.0**. `@types/node` stays **24.19.1** (latest 24.x; do not follow the 26.x `latest` tag). pnpm stays on the 11 line at **11.28.2** (not pnpm 12). TypeScript stays **7.0.2**. The published scriptc CLI pin stays **0.2.3** / `52169979ee3fac98ad6651eb2a717fbbf4ac1f89`: the reduction map and the integration mocks hard-require that CLI, and there is no remap. Compiler work is the owned fork branch `effect-compat-0.2.7`, replayed onto upstream `2476844e13c7b2d85ce0c1ce5d0dfafe70c449e1`. The six replayed commits end at `2852286fdf612823b862e9f2248a96cd9543e9dc`; local mission note `0aed51e9` is not part of that packet. Number `toString` fix `f926b6d2663bb17ea4cbe716c65ddeb651d26b67` is a later cherry-pick. Pick that SHA after `871e8140`. It sits outside `2476844e..2852286f` because the replay note is in between. Mission note `bfc5ee98` records that re-proof and is not a cherry-pick. Call-heritage fix `ce9d169b79c9bafc10b22a9ab96b15bd12efbac9` is the next code commit. Cherry-pick that SHA after `f926b6d2`. Mission note `3655ed7c` records that re-proof and is not a cherry-pick. URI fix `dbec30d4969a1ffd8d479e10bf8c51005a544f02` comes after that. Cherry-pick it after `ce9d169b`. Mission note `dda6231f` records the header re-proof and is not a cherry-pick. The previous tip stays on `origin/effect-compat-0.2.6` at `a5507c95cfa804abee9fae00f602efcf941692eb`. Do not force-push `origin/effect-compat`. Commit packets for a later upstream PR are in `docs/upstream-commits.md`.
- Inventory is 459 surfaces: **404 ready**, 41 uncovered, 14 skipped. Three new uncovered placeholders (`effect/Version`, HTTP internal tracing, RPC internal tracing) are not probes and are not a compatibility pass.
- On Node 24.19.0, `pnpm check` passed strict typecheck, 35/35 tests, and 404/404 ready fixtures twice. Five observability expected baselines now include Effect 4.0.2 telemetry SDK resource attributes (`telemetry.sdk.*`, `effect.fiberId`, logger scope `effect` / `4.0.2`): `module-observability--otlp`, `module-observability--otlplogger`, `module-observability--otlpmetrics`, `namespace-observability`, `namespace-observability-otlpresource`. Probe source was not rewritten. The other 399 expected stdout values are unchanged. The 2026-10-06 404/404 validation snapshot remains in git history; maps under `reports/` and imported runs stay labeled as their original Effect 4.0.1 evidence. Checked-in `reports/corpus-validation.json` stays that Node 24.19.0 snapshot. On 2026-10-09, the same `pnpm check` passed on Node 24.21.0 with `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer` and `SDKROOT`/`TOOLCHAINS` unset. Inherited Nix `DEVELOPER_DIR` makes `ld --version` hang past the integration spawn budget.
- The same ten representative probes are EXACT against this oracle, including `documented-hash` and `schema-decode`. That is 10/404, not corpus parity.
- The 404 sweep `.effect-compat/effect-402-all404-v1` on pre-rebase `8f9991f0` is 323 exact, 27 rejected, 54 mismatched, 0 invalid baselines. That is not corpus parity and it is not a measurement of the replay tip. Later partial campaigns are listed in `docs/upstream-commits.md` and are also not a new 404 count. On replay note `0aed51e9`, Node v24.21.0, campaign `effect-402-rebase-027-v1` measured 13 probes: 12 exact and one mismatch, `namespace-encoding` (`Hex.encode("OK")` native `1616`, Node `4f4b`).
- `f926b6d2` formats number `toString` from the receiver. An explicit radix uses `num.toStringRadix`. Campaign `effect-402-hex-radix-v1` on that commit, Node v24.21.0, Effect 4.0.2, is 7/7 EXACT, including `namespace-encoding`. That is not a new 404 count and it is not corpus parity.
- `ce9d169b` lowers a call-expression class base at emit when collection misses. Campaign `effect-402-opaque-v1` on that commit, Node v24.21.0, Effect 4.0.2, is 3/3 EXACT: `namespace-ai-mcpprotocol`, `namespace-ai-mcpschema`, `namespace-ai-mcpserver`. That is not a new 404 count and it is not corpus parity.
- `dbec30d4` lowers `globalThis` URI calls as string intrinsics. Campaign `effect-402-otlp-headers-v1` on that commit, Node v24.21.0, Effect 4.0.2, is 1/1 EXACT: `module-observability--internal--otlpenv`. That is not a new 404 count and it is not corpus parity. A local `module-observability--otlpmetrics` run on the same dist still drops `asDouble` (Node 1134 bytes, native 1108, empty stderr). That run is not a campaign.
- Next action is the remaining `asDouble` stdout delta on `module-observability--otlp` and `module-observability--otlpmetrics`, then the four SC2011 probes only as an explicit `--dynamic` decision. Do not restart the published-CLI map or reduction. Do not open an upstream PR from this doc.

## Accepted source

- Branch: `resume-harness`, pushed to owned `phall1/effect-scriptc-compat`.
- Implementation commit: `2316272d1abf031f1db8bd3c4edd478c2ccee191`.
- Missing corpus and historical evidence recovered from Git's SHA-verified source archive; see `docs/recovery.md`.
- Verification: strict typecheck, 31 tests, actionlint, fresh corpus generation, 404 exact Node baselines each executed twice, real native map/diff/checkpoint smoke and a verified Number repro.
- Independent review's three P1 issues are closed. Its remaining two input-validation P2 findings were fixed and re-tested before commit.
- Historical Linux and macOS smoke evidence are separate under `reports/imported/`; never relabel them as a completed current-host map.

## Bulk work stopped at the user's cost objection

The full host-local pipeline is **stopped**, with its former `@52` worker terminated and terminal removed. The completed checkpoint is **323/404 cases**: 26 static, 36 deferred, 261 rejected, 81 pending. There is no active worker or broad reduction. `.work/native-status.json` and `reports/triage/run-status.json` record `map-stopped` with intentional exit 130, not successful completion. Compiler children were inspected after freezing and were defunct; subsequent process checks confirmed all saved PIDs were gone. The 323 exact-session source/typecheck/binary records were independently revalidated before shutdown. Four RPC probes' partial command artifacts are retained, but none is promoted to a complete result.

253 rejected cases share the same null/union SC3004 message. Focused persisted diagnostics in `reports/triage/` show the failure even with an unused `effect/Effect` import, and with `Effect.runSync(Effect.succeed(42))`; Node succeeds in both. Do not interpret this as hundreds of distinct API defects. See `reports/triage/README.md` for the bounded investigation and its limitations.

Before pausing, the full host-local pipeline ran in **phux worker `@52`**, alias `native-map`, cwd this repository. The local launcher is `.work/run-native.sh`.

It was started with a clean environment, not the shared terminal server's inherited developer shell:

```sh
/usr/bin/env -i HOME=/Users/phall USER=phall \
  PATH=/Users/phall/.local/share/mise/installs/node/24.19.0/bin:/Users/phall/.npm-global/bin:/usr/bin:/bin:/usr/sbin:/sbin \
  DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer \
  SCRIPTC_LINKER=/usr/bin/clang /bin/bash .work/run-native.sh
```

The launcher checks the Node pin before producing evidence. It clears SDKROOT/TOOLCHAINS, distinguishes a missing differential report from findings exit 1, and checks that reduction processed every signature before advancing. Its continuation defaults remain map → diff → reduce → aggregate → check; the file is local task tooling, not a portable package entrypoint.

Four map/differential workers; original 180-second compiler deadlines, 30-second runtime deadlines, reduction budget 24. Sequence: full map → diff → reduce → aggregate (`pnpm merge reports`) → `pnpm check`.

Authoritative phase and exit: `.work/native-status.json`. Logs: `.work/native-{map,diff,reduce,aggregate,check}.log`. Atomic completed records: `reports/raw/*.result.json`. Session context: `reports/map-session.json`. The completion-pass checkpoint found map active, **55/404 complete cases, 349 pending**, published in commit `fd84288`. Node 24.19.0, Apple Clang 21.0.0 and the non-Effect control were verified; the entire recorded provenance passed comparison with the parent's current reference context. Treat this count as a historical observation, not live state. The map file is refreshed on checkpoint/finalization, not on every case.

Do not start another writer or regenerate/change corpus or harness while compilers run. Snapshot completed progress with `pnpm checkpoint`. If exhaustive mapping is explicitly requested again, `MAP_RESUME=1 MAP_JOBS=4 pnpm map` in the verified reference environment can reuse exact-source/toolchain checkpoints; the four incomplete RPC probes will rerun. Do not restart the old all-phase launcher automatically. Retain verified packet context and target representative reduction signatures instead of repeating finished work.

## Completion-pass runtime correction

The original `@47` inherited Node 24.21.0 and Nix Clang. Its source/binary-validated 44-case partial map and seven equal native differentials are preserved in `reports/imported/macos-node24.21-nix-clang/`. The first correction (`@49`) selected Node 24.19.0 but `/usr/bin/clang` still dispatched through inherited DEVELOPER_DIR/SDKROOT to Nix. Its 18-case partial map and two equal differentials are preserved in `reports/imported/macos-node24.19-nix-sdk/`. Each comparison was executed only with the recorded context; none was relabeled as the reference run. Both old jobs were safely stopped after inspecting their exact compiler descendants. The final clean environment was preflighted in a short-lived worker before launching `@52`.

The post-correction `pnpm check` again passed strict typechecking, all 31 tests and all 404 twice-run exact Node baselines. Source/corpus/dependencies were not changed during compiler work.

The clean reference checkpoint's **13 binaries** were compared: **12 equal, one reached SC1090 deferred runtime trap**, no invalid Node baselines or hangs. `documented-hash` traps on `Hash.hash(number[])`; this is not a false-static classification. `reports/shards/reference-progress.differentials.json` retains the exact partial comparison. Its packet `diff-a2274461f4682d2f` was verified at its repro path and reduced from 453 to 310 bytes in 23 attempts (budget 24). `reports/upstream/index.json` explicitly covers only 1 of that checkpoint's 64 signatures; the remaining packets were not processed and the exhaustive reduction has now been deliberately dropped. The full reducer can retain this verification only when its exact origin/source/context still matches.

## Automatic monitoring blocked

The attempt to start Pi's built-in `monitor` failed before a run was created:

> Pi Workflows durable state is incompatible. Back up and move state.sqlite with its -wal and -shm files, then start Pi Workflows to create a new state.sqlite database. The incompatible state was not changed.

This is the **shared** `/Users/phall/.pi/agent/workflows/state.sqlite`, not repository-local state. It was left untouched: resetting it could discard unrelated workflow history/continuations. Operator approval is required before backup/reset of this shared database. The native pipeline is now deliberately stopped, with no active Monitor run or automatic completion claim.

## Next ready action

1. Preserve the stopped checkpoint and focused triage. `@52` no longer exists. Do not automatically restart the broad map/reduction pipeline.
2. Prefer bounded common-blocker triage and differential checks of the 62 built binaries. Select representative signatures deliberately; the API-family grouping otherwise repeats the same SC3004 reduction many times. Preserve all original evidence and explicitly partial/unverified outcomes.
3. Only if the exhaustive sweep is explicitly requested again, complete the remaining 81 cases and ensure every built binary has a valid differential baseline. Compiler refusals/mismatches are findings; unreproduced predicates remain explicitly unverified. Resetting shared workflow state still requires approval and does not fix compiler compatibility.
4. Commit/push only intended completed evidence to the owned repo. `origin/main` advanced independently to `9b46de2` with an older handoff and corpus publication; local `main` was safely fast-forwarded to it without checking it out. It is not an ancestor of this branch. After compiler work, merge that history without losing the freshly generated inventory metadata (`cases/documented-cases.json`, `cases/public-exports.json`) or treating its old HANDOFF.md as current state. Do not switch/check out the older main while compilers read this checkout. No force push, upstream publication, hosted Actions dispatch, paid runners, releases or remote deletion. Clean task-created scratch only after results are preserved.

## Bounded candidate and compiler-fork follow-up

The isolated npm **scriptc 0.2.4** check is retained under [reports/version-checks/scriptc-0.2.4](../reports/version-checks/scriptc-0.2.4/README.md), with complete raw commands/bytes, input snapshots/hashes and official release/npm history. Official `v0.2.4` resolves to `b1c11aac19e3336a70daaf637dd537ad3ddc56b9` (read-only tag confirmation). Only **2/5** inputs were byte-equal: the non-Effect control and Number. Unused Effect import and `Effect.succeed` still reject with SC3004; the reduced Hash program builds but reaches the SC1090 native trap. No baseline compiler/package pin or dependency changed, and this is not new exhaustive coverage.

Compiler implementation belongs to the separate Phux lead **@68**, cwd **`/Users/phall/workspace/scriptc-effect`**, owned fork **https://github.com/phall1/scriptc**, branch **`effect-compat`**. Its goal target is the **404 exact runtime probes** in this harness (build and match successful Node stdout/stderr/exit bytes), **not universal Effect support**. This harness writer does not edit that compiler checkout. The baseline remains deliberately stopped and **partial: 323/404 mapped, 81 pending**, with 62 built binaries and only the saved partial reference comparisons. The fork work does not promote those baseline reports. No broad map/reducer sweep, upstream publication or hosted jobs are implied.

### Parent acceptance and source-compiler milestone

Harness hardening commits `37d98d3` and `2ffd172` passed fresh independent review with no concrete P0/P1/P2 findings. The parent personally inspected the changed load-bearing code and tests, reran strict typechecking and all **35 tests**, checked actionlint/JavaScript syntax/diff whitespace, and validated all **404 ready fixtures twice** against the exact Node 24.19.0 contract without rewriting derived reports. Baseline corpus, pins, dependency lock, map/session/checkpoint/provenance, triage, reference differential and upstream packets remain byte-identical to `16b7dc7`.

The newer source compiler's original core was upstream `f053c81f` plus mission-document commit `d5cdca0e`, not published npm 0.2.4. After explicit local LLVM/runtime artifact builds, both previously blocked import/succeed triage diagnostics were native byte-equal to Node; the parent independently reran both. This shared blocker was already fixed by upstream main: no local stranded-union-trap suppression is warranted.

The parent additionally reran all **10 representative corpus programs** under that original source identity, verifying the manifest, fixture and binary hashes, exact expected Node stdout, empty baseline stderr and native stdout/stderr/exit. **Eight match exactly** (core succeed/gen, causes, layers, resource acquire/release, concurrent all/timeout and stream map); **two still reach SC1090 traps** (`documented-hash` array membership and `schema-decode` URL/string representation). This is 10 tested programs out of 404, not a corpus compatibility percentage. The compiler lead is implementing the remaining root fixes separately; no unreviewed working-tree compiler changes or new observations are promoted into the historical baseline.

The next ready action is to consume the compiler lead's fixed-source milestone, independently inspect the actual diff and regressions, verify fresh artifact/source/toolchain identity, and rerun bounded affected differentials before broadening the campaign. Do not resume the published-compiler rejection/reduction sweep. Durable integration mail is in the compiler project's Blackbird thread `effect-corpus-parity`; Phux `@68` retains its own native goal. Harness hardening acceptance is not completion of that 404-program goal.

### Cleanup hardening validation and complexity

Reducer indexes now share one completion predicate for intermediate and empty-selection writes. They retain missing exact binary-pair coverage and explicit invalid-baseline harness errors instead of treating zero discovered runtime signatures as complete. Differential baselines reuse the corpus fixture contract; report destinations mirror the map's reserved differential-name contract and are checked before provenance execution or any writes. Existing compiler diagnostics and exact byte evidence are unchanged.

ESLint 10.12.0 `complexity` (classic variant) with the TypeScript parser, run through ignored `.work/complexity.mjs`, measured the touched production functions before/after:

| Function | Before | After |
| --- | ---: | ---: |
| differential `main` | 10 | 10 |
| differential comparison callback → `compareBinary` | 23 | 10 |
| reducer `signatures` | 31 | 8 |
| reducer `currentDifferential` | 9 | 5 |
| reducer `saveIndex` | 3 | 1 |
| reducer `main` | 8 | 10 |

Extracted: `nativeFinding` (8), `interrupted` (3), `addCompilerFailures` (8), `compilerClassification` (5), `addDeferredFailures` (3), `addDifferentialFailure` (6), `assertCurrentBinary` (8). New contract helpers: `differentialDestination` (7), `validDifferentialBaseline` (2), `differentialCoverage` (10), `reductionComplete` (3). No touched function exceeds 10; the pre-existing reduction predicate/packet renderer was left outside this bounded change.

Validation: focused differential/reducer/fake-compiler suites **10/10 passed**; `pnpm check` passed strict typechecking, **35/35 tests** and **404 fixtures each run twice** with exact stable Node baselines. Actionlint, Node syntax checks, launcher shell syntax and `git diff --check` passed. A read-only comparison confirmed all **358** saved failure signatures (including full compiler evidence) are unchanged; the 13-row partial reference differential still leaves **49/62** current binary pairs missing, so completion remains false. Candidate preservation checks verified all five source snapshots, 13 raw command histories and official/local tag identity. Only generated validation timestamp/duration noise was restored after checking semantic equality. No full native map/reducer sweep, compiler change, upgrade, hosted job or push was performed by this cleanup.

The bounded completion pass additionally rejects absent differential `results` even when the map has no binaries; an explicit valid empty `results: []` remains supported. Unit and fake-compiler CLI regressions cover missing rows, with `reportRowsPresent` recorded in the index. The added `differentialRowsPresent` guard has CC 2; coverage stays CC 10. Focused 10/10, full 35/35 and all 404 twice-run Node fixtures passed again; no baseline evidence was rewritten.
