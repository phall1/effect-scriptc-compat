# Active handoff

## Accepted source

- Branch: `resume-harness`, pushed to owned `phall1/effect-scriptc-compat`.
- Implementation commit: `2316272d1abf031f1db8bd3c4edd478c2ccee191`.
- Missing corpus and historical evidence recovered from Git's SHA-verified source archive; see `docs/recovery.md`.
- Verification: strict typecheck, 31 tests, actionlint, fresh corpus generation, 404 exact Node baselines each executed twice, real native map/diff/checkpoint smoke and a verified Number repro.
- Independent review's three P1 issues are closed. Its remaining two input-validation P2 findings were fixed and re-tested before commit.
- Historical Linux and macOS smoke evidence are separate under `reports/imported/`; never relabel them as a completed current-host map.

## Work currently running

The full host-local pipeline runs in **phux worker `@52`**, alias `native-map`, cwd this repository. The local launcher is `.work/run-native.sh`.

It was started with a clean environment, not the shared terminal server's inherited developer shell:

```sh
/usr/bin/env -i HOME=/Users/phall USER=phall \
  PATH=/Users/phall/.local/share/mise/installs/node/24.19.0/bin:/Users/phall/.npm-global/bin:/usr/bin:/bin:/usr/sbin:/sbin \
  DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer \
  SCRIPTC_LINKER=/usr/bin/clang /bin/bash .work/run-native.sh
```

The launcher checks the Node pin before producing evidence. It clears SDKROOT/TOOLCHAINS, distinguishes a missing differential report from findings exit 1, and checks that reduction processed every signature before advancing. Its continuation defaults remain map → diff → reduce → aggregate → check; the file is local task tooling, not a portable package entrypoint.

Four map/differential workers; original 180-second compiler deadlines, 30-second runtime deadlines, reduction budget 24. Sequence: full map → diff → reduce → aggregate (`pnpm merge reports`) → `pnpm check`.

Authoritative phase and exit: `.work/native-status.json`. Logs: `.work/native-{map,diff,reduce,aggregate,check}.log`. Atomic completed records: `reports/raw/*.result.json`. Session context: `reports/map-session.json`. The completion-pass checkpoint found map active, **20/404 complete cases, 384 pending**. Node 24.19.0, Apple Clang 21.0.0 and the non-Effect control were verified; the entire recorded provenance passed comparison with the parent's current reference context. Treat this count as a historical observation, not live state. The map file is refreshed on checkpoint/finalization, not on every case.

Do not start another writer or regenerate/change corpus or harness while compilers run. Snapshot completed progress with `pnpm checkpoint`. After a proven interruption and after checking for active compiler descendants, `/bin/bash .work/run-native.sh resume` can reuse exact-source/toolchain checkpoints. Prefer continuing only the failed phase; retain verified packet context and target pending reduction signatures instead of repeating finished work.

## Completion-pass runtime correction

The original `@47` inherited Node 24.21.0 and Nix Clang. Its source/binary-validated 44-case partial map and seven equal native differentials are preserved in `reports/imported/macos-node24.21-nix-clang/`. The first correction (`@49`) selected Node 24.19.0 but `/usr/bin/clang` still dispatched through inherited DEVELOPER_DIR/SDKROOT to Nix. Its 18-case partial map and two equal differentials are preserved in `reports/imported/macos-node24.19-nix-sdk/`. Each comparison was executed only with the recorded context; none was relabeled as the reference run. Both old jobs were safely stopped after inspecting their exact compiler descendants. The final clean environment was preflighted in a short-lived worker before launching `@52`.

The post-correction `pnpm check` again passed strict typechecking, all 31 tests and all 404 twice-run exact Node baselines. Source/corpus/dependencies were not changed during compiler work.

## Automatic monitoring blocked

The attempt to start Pi's built-in `monitor` failed before a run was created:

> Pi Workflows durable state is incompatible. Back up and move state.sqlite with its -wal and -shm files, then start Pi Workflows to create a new state.sqlite database. The incompatible state was not changed.

This is the **shared** `/Users/phall/.pi/agent/workflows/state.sqlite`, not repository-local state. It was left untouched: resetting it could discard unrelated workflow history/continuations. Operator approval is required before backup/reset of this shared database. The native pipeline remains running independently, but there is no active Monitor run and no automatic completion claim.

## Next ready action

1. Inspect `@52`, its process/phase and latest durable outputs; never infer liveness from this handoff.
2. With approved shared workflow-state recovery, start one Monitor for the existing job (do not relaunch it). Otherwise inspect the existing job directly when this session is continued.
3. At terminal state, verify full 404-case mapping, every built binary's valid differential baseline, per-signature repro outcomes, aggregate disagreements and final checks. Compiler refusals/mismatches are findings; unreproduced predicates must remain explicitly unverified.
4. Commit/push only intended completed evidence to the owned repo. `origin/main` advanced independently to `9b46de2` with an older handoff and corpus publication; local `main` was safely fast-forwarded to it without checking it out. It is not an ancestor of this branch. After compiler work, merge that history without losing the freshly generated inventory metadata (`cases/documented-cases.json`, `cases/public-exports.json`) or treating its old HANDOFF.md as current state. Do not switch/check out the older main while compilers read this checkout. No force push, upstream publication, hosted Actions dispatch, paid runners, releases or remote deletion. Clean task-created scratch only after results are preserved.
