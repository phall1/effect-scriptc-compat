# Active handoff

## Accepted source

- Branch: `resume-harness`, pushed to owned `phall1/effect-scriptc-compat`.
- Implementation commit: `2316272d1abf031f1db8bd3c4edd478c2ccee191`.
- Missing corpus and historical evidence recovered from Git's SHA-verified source archive; see `docs/recovery.md`.
- Verification: strict typecheck, 31 tests, actionlint, fresh corpus generation, 404 exact Node baselines each executed twice, real native map/diff/checkpoint smoke and a verified Number repro.
- Independent review's three P1 issues are closed. Its remaining two input-validation P2 findings were fixed and re-tested before commit.
- Historical Linux and macOS smoke evidence are separate under `reports/imported/`; never relabel them as a completed current-host map.

## Work currently running

The full host-local pipeline runs in **phux worker `@47`**, alias `native-map`, cwd this repository:

`/bin/bash .work/run-native.sh`

Four map/differential workers; original 180-second compiler deadlines, 30-second runtime deadlines, reduction budget 24. Sequence: full map → diff → reduce → aggregate (`pnpm merge reports`) → `pnpm check`.

Authoritative phase and exit: `.work/native-status.json`. Logs: `.work/native-{map,diff,reduce,aggregate,check}.log`. Atomic completed records: `reports/raw/*.result.json`. Session context: `reports/map-session.json`. The last observation found map active, **8/404 completed raw case records**. Treat this count as a historical observation, not live state. The map file is refreshed on checkpoint/finalization, not on every case.

Do not start another writer or regenerate/change corpus or harness while compilers run. Snapshot completed progress with `pnpm checkpoint`. After a proven interruption and after checking for active compiler descendants, `/bin/bash .work/run-native.sh resume` can reuse exact-source/toolchain checkpoints. Prefer continuing only the failed phase; retain verified packet context and target pending reduction signatures instead of repeating finished work.

## Automatic monitoring blocked

The attempt to start Pi's built-in `monitor` failed before a run was created:

> Pi Workflows durable state is incompatible. Back up and move state.sqlite with its -wal and -shm files, then start Pi Workflows to create a new state.sqlite database. The incompatible state was not changed.

This is the **shared** `/Users/phall/.pi/agent/workflows/state.sqlite`, not repository-local state. It was left untouched: resetting it could discard unrelated workflow history/continuations. Operator approval is required before backup/reset of this shared database. The native pipeline remains running independently, but there is no active Monitor run and no automatic completion claim.

## Next ready action

1. Inspect `@47`, its process/phase and latest durable outputs; never infer liveness from this handoff.
2. With approved shared workflow-state recovery, start one Monitor for the existing job (do not relaunch it). Otherwise inspect the existing job directly when this session is continued.
3. At terminal state, verify full 404-case mapping, every built binary's valid differential baseline, per-signature repro outcomes, aggregate disagreements and final checks. Compiler refusals/mismatches are findings; unreproduced predicates must remain explicitly unverified.
4. Commit/push only intended completed evidence to the owned repo, then safely fast-forward local/remote `main` if ancestry permits. No force push, upstream publication, hosted Actions dispatch, paid runners, releases or remote deletion. Clean task-created scratch only after results are preserved.
