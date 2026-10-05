# Handoff: Effect 4.0.1 × scriptc 0.2.3

Stopped for transfer to the user's host on **2026-10-05 at 23:02 UTC**. Start with [the measured summary](reports/summary.md), then [the transfer state](reports/handoff/transfer-state.json).

## What is done

- Complete cloud-host map: **422/422 runnable cases**, covering 404 primary and 18 auxiliary probes. The inventory also records 38 declaration-only/uncovered entries and 14 I/O skips, not compatibility successes.
- Outcomes: **27 static, 41 deferred, 354 rejected**, zero dynamic-fallback builds.
- Every produced native binary compared with pinned Node: **68 comparisons, 60 exact matches, 8 mismatching cases representing 7 distinct output deltas**. No invalid Node baselines or runtime hangs. All 422 independent Node baselines pass.
- **446 current distinct failure/deferred/runtime signatures**, each with an indexed original-observation packet. **327 have sealed, freshly verified canonical reproductions; 119 remain pending**, spanning 102 representative source cases. Historical-only packets add zero to that count.
- All seven observed runtime deltas have verified reproductions. The remaining canonical work is compiler/deferred signatures, including the HttpApiClient final-verification retry described below.
- Strict TypeScript and all 54 harness tests passed; the separate 10 workflow tests passed. Logs are in `reports/harness-tests.txt` and `reports/workflow-tests.txt`.

These are measured paths, not whole-module compatibility claims. A deferred build that matches Node may still have runtime fences on other paths. Reductions are bounded line deletion with a 24-candidate budget, not a claim of global minimality.

## Get the complete project

**The GitHub tree is still incomplete at this handoff. Do not assume a clone contains the fixtures, reports, or checkpoints.** Use the two latest Library attachments, `effect-scriptc-compat-transfer-source.zip` and `effect-scriptc-compat-transfer-git-bundle.zip`, rather than an older partial GitHub checkout. The source ZIP contains the complete source, fixtures, lockfile, reports, completed checkpoints, and this file. The separate bundle ZIP contains `transfer.bundle`, a Git bundle of the matching committed snapshot. Both are below 15 MiB to fit attachment limits. No npm packages, compiler/linker binaries, native executables, or credentials are bundled.

```sh
unzip effect-scriptc-compat-transfer-source.zip
unzip effect-scriptc-compat-transfer-git-bundle.zip
# Inspect effect-scriptc-compat/HANDOFF.md and reports/summary.md first.
git clone effect-scriptc-compat/transfer.bundle effect-scriptc-compat-newhost
cd effect-scriptc-compat-newhost
git switch -c host-transfer
```

The extracted original is your immutable cloud-host evidence archive. Keep it intact. The bundle reconstructs the code/report commit even if GitHub publication is unfinished. Local transfer status is recorded in `reports/local-run-status.json`.

## Exact pins and setup

| Component | Required version |
| --- | --- |
| Node | 24.19.0 |
| pnpm | 11.19.0 |
| TypeScript | 7.0.2 |
| Effect | 4.0.1 |
| Node declarations | 24.10.1 |
| scriptc npm CLI / release | 0.2.3 / v0.2.3 |
| scriptc release commit | 52169979ee3fac98ad6651eb2a717fbbf4ac1f89 |

Install Node 24.19.0 using your existing trusted Node manager or official distribution. Then:

```sh
node --version  # must print v24.19.0
npm install --global pnpm@11.19.0 scriptc@0.2.3
pnpm install --frozen-lockfile
export SCRIPTC="$(command -v scriptc)"
export SCRIPTC_LINKER="$(command -v clang)"
"$SCRIPTC" --version
"$SCRIPTC_LINKER" --version
pnpm check
```

Use the host's supported Clang/system toolchain. The original Linux x64 host used Debian Clang 19.1.7 (3+b1), with package hashes in `reports/linker-provenance.json`. Its paths were `/tmp/effect-scriptc-tools/bin/scriptc` and `/tmp/effect-scriptc-clang/root/usr/bin/clang-19`; those paths are historical, not portable installation instructions. The harness runs a non-Effect native control before mapping.

Do not run `pnpm generate` merely to transfer: the 422-fixture corpus is already fixed and validated. Manifest SHA-256: `9e605abf919f4cb6d14fdb60f94b1aa82defed49e66fa6293bbbf76682d3c008`.

## Fast, independent new-host continuation

Do **not** blindly remap all 422 cases or overwrite the cloud evidence. A different host/linker/path changes provenance; old native binaries are absent and old validation does not become new-host validation. Reuse the source and known pending work, while measuring the new host independently.

In the new Git clone, preserve the old reports outside the new run before starting. The original extracted archive remains the self-contained cloud report:

```sh
PENDING_CASES="$(cat reports/handoff/pending-case-ids.txt)"
# Choose a nonexistent sibling destination so nothing is overwritten.
mv reports ../effect-scriptc-compat-cloud-reports
mkdir reports
pnpm baselines
# Tune to your CPU/RAM capacity; 4 is a conservative starting point.
MAP_CASES="$PENDING_CASES" MAP_SHARD_NAME=transfer-pending MAP_JOBS=4 pnpm map
cp reports/shards/transfer-pending.json reports/coverage-map.json
# The copied report retains partial=true: this is the 102-case pending subset.
status=0; pnpm diff || status=$?
test "$status" -le 1  # 1 = observed differences; 2 = invalid baseline/harness
pnpm packetize
pnpm summary
REDUCE_JOBS=4 REDUCE_RESUME=1 REDUCE_BUDGET=24 pnpm reduce
pnpm packetize
pnpm summary
```

This preserves the completed full cloud map and produces a separate new-host subset. The subset can rediscover extra signatures already verified on the cloud host or change which failures occur; report those honestly. Do not force old predicates or combine incompatible host observations into a single-host map. Run a complete independent new-host map only if wanted after this targeted work.

`REDUCE_RESUME=1` only skips completed signatures whose exact source, compiler/linker provenance, executable hashes, representative observation, options, budget, reducer/support code, repro, and all evidence hashes still match. It may deliberately redo work after relocation or a toolchain change. It does not resume an unfinished signature's in-memory deletion cursor. The eight unverified in-flight candidate sources at stop are preserved in `reports/handoff/unfinished-repros/`; they are not verified packets.

For continuation **in the unchanged original cloud workspace and toolchain only**, the command was:

```sh
SCRIPTC=/tmp/effect-scriptc-tools/bin/scriptc \
SCRIPTC_LINKER=/tmp/effect-scriptc-clang/root/usr/bin/clang-19 \
REDUCE_JOBS=8 REDUCE_RESUME=1 REDUCE_BUDGET=24 node scripts/reduce.ts
node scripts/packetize.ts
node scripts/summarize.ts
```

No cloud batch is still intentionally running. The known reducer session was stopped with Ctrl-C after its atomic checkpoint reached 327 verified signatures; its session returned exit 1. The reducer has no drain hook. Its confirmed-stale lock was archived and removed. Completed per-signature files remain intact; unfinished attempts are pending. The stopped index/log are in `reports/handoff/`.

## Two important retest notes

1. **Hydration, 447 → 446 signatures.** The original dynamic build was terminated by SIGKILL, with no SC code and no reported timeout. Its cause is unknown; do not call it a reproducible compiler rejection, compiler crash, or OOM. An exact-source controlled rerun returned ordinary SC3004 refusals in both static and dynamic modes, with no signal/timeout. The prior signal evidence is retained in `reports/rechecks/hydration-sigkill-original/`; the new measurement is in `reports/rechecks/hydration-signal-recheck/`. The current map/raw/summary use 446 signatures. The stopped reducer had captured 447 before this recheck and therefore still lists the superseded unverified signal group. No verified signature was removed. A fresh reducer invocation reconciles against the current map.
2. **HttpApiClient, `sc3004-http-api-httpapiclient-6ff07307`.** A 511-byte reduced candidate passed deletion predicates but its final verification failed once. That older failure path did not retain the failing command output, so the cause cannot be assigned. A separate exact-source, exact-path fresh verification then passed strict types and the Node baseline, and reproduced the exact SC3004 refusal without a signal or timeout. Complete sealed evidence is in `reports/rechecks/httpapiclient-reduction-verification/`. It remains pending in the canonical reducer index until an ordinary reducer retry succeeds; the supplemental witness has not been counted as a completed canonical packet.

Eighty legacy cloud observations also retain their original disclosed pre-fingerprint provenance caveat. See their per-case notes; later bookkeeping did not retroactively validate those old contexts.

## Operating limits and next deliverable

- Keep Effect and scriptc unmodified; preserve each library API idiom. No compiler checkout or vendoring is needed.
- Compiler/coverage deadlines: 180 seconds each; runtime: 30 seconds. `REDUCE_BUDGET=24` must stay consistent for matching resume identities.
- Run one reducer process per working directory; it owns `.work/reduce.lock`. Do not remove a lock until its recorded process is confirmed stopped.
- Save all failed predicates and process outputs when investigating retries. An interrupted process is not evidence of a stable language rejection.
- No GitHub Actions jobs are needed for this transfer. No upstream issues or PRs have been opened. Full GitHub publication remains separate unfinished work.
- Finish the remaining bounded reproductions, refresh packetize/summary, run tests, and publish the source plus versioned evidence. Keep cloud/new-host provenance and verified/pending statuses explicit.
