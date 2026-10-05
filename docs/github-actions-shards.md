# Manual GitHub Actions host shards

The workflow is prepared for an authorized run, but adding or pushing these files does **not** start one. Its only trigger is `workflow_dispatch`. It never edits billing, pushes commits, opens upstream issues, or vendors scriptc source/native executables. All hosts are ordinary `ubuntu-24.04` x64 runners; this is parallel host-local measurement, not cross-compilation or an OS compatibility matrix.

## Capacity and cost gate

Before dispatch, verify the repository owner's remaining **included Linux runner minutes**, concurrent-job limit, and artifact-storage allowance. Include other active workflows in that check. Check the existing spending controls too; this workflow cannot enforce an account-level no-overage rule and cannot verify remaining quota. If that information is unavailable, **do not dispatch**. Do not turn on paid usage or change a spending limit to run this harness without separate authorization.

The default is eight shards, four simultaneous hosts, two case workers per host, and a **90-minute hard limit per host**. The conservative total limit is:

`selected host count × job_minutes + 10 plan minutes + 20 aggregate minutes`

Defaults therefore permit **750 runner-minutes**, plus artifact storage. Concurrency shortens wall time; it does not reduce this bound. A single selected shard with the same settings permits 120 runner-minutes including orchestration. A 64-shard, 360-minute configuration permits 23,070 runner-minutes. Real runs can finish earlier. Re-runs and retries consume additional minutes; every dispatch needs a fresh capacity check. Artifacts expire after three days and still count toward storage while retained.

Preview the validated settings and bound locally, without creating a GitHub run:

```sh
INPUT_CAPACITY_CHECKED=true \
INPUT_SHARDS=8 INPUT_PARALLEL=4 INPUT_JOBS=2 INPUT_JOB_MINUTES=90 \
node .github/scripts/host-shards.mjs preview
```

The preview flag is an acknowledgement, not proof of quota. The actual workflow requires the `capacity_checked` box, default off. Leaving it off skips all jobs.

## Authorized manual run

1. Commit the final corpus, harness, lockfile, and workflow to the authorized GitHub repository. The workflow must exist on the repository's default branch for GitHub's manual trigger to be available. Do not regenerate or edit the corpus independently on runners.
2. Check capacity and get any required authorization as above. For a first run, select one shard from the intended full partition, for example `shards=8`, `shard_indices=0`, `parallel=1`, `job_minutes=90`. This preserves the same eight-way assignment for the later run.
3. In Actions, choose **Manual host compatibility shards**, then **Run workflow**. Select the intended committed branch/tag and inputs. Leave `run_reducer=false` unless the additional reduction work is explicitly wanted.
4. Copy the actual run ID and head SHA from the run page. Every job checks out that resolved SHA, not a moving branch head. The plan prints the runner-minute bound and saves its complete snapshot as an artifact.

Equivalent GitHub CLI example, **only after authorization and the capacity check**:

```sh
gh workflow run host-shards.yml --repo OWNER/REPO --ref COMMITTED_BRANCH_OR_TAG \
  -f shards=8 -f shard_indices=0 -f parallel=1 -f jobs=2 -f job_minutes=90 \
  -f compile_timeout_ms=180000 -f run_reducer=false -f capacity_checked=true
gh run list --repo OWNER/REPO --workflow host-shards.yml
gh run view RUN_ID --repo OWNER/REPO
```

This documentation does not authorize the example command. No workflow was dispatched as part of adding these files.

## Deterministic assignment and pins

- The plan snapshots the immutable Git commit, complete tracked `cases/`, harness `scripts/`, `.github/` orchestration, toolchain/configuration, package files, and lockfile with SHA-256 hashes. Every host verifies the same snapshot before discarding pre-existing local reports.
- Case order is the harness's sorted manifest order. Shard `i` receives positions where `position % total === i`. With every index selected once, shards are disjoint and exhaustive, including explicit inventory exclusions. A selected subset remains visibly incomplete.
- Node **24.19.0**, pnpm **11.19.0**, Effect **4.0.1**, TypeScript **7.0.2**, and the published global scriptc CLI **0.2.3** are checked explicitly. Dependencies install from the frozen lockfile; Effect is never patched.
- scriptc's pinned release tag/commit and exact commands are recorded by the harness. CI additionally records npm distribution metadata, installed package versions, hashes of the compiler package's files (including the native executable), the Node executable, Clang and system linker.
- Linux jobs select `/usr/bin/clang-18` and fail if it is unavailable. Runner image/package revisions are not immutable: exact image version, linker path, package versions, version output, executable hashes, runner identity, and run attempt are saved per host. A new runner image cannot silently reuse old checkpoints.
- Build and coverage commands default to **180 seconds each** and accept 30,001–900,000 ms. Node/native execution stays fixed at **30 seconds per process**. Compiler timeouts never become runtime-equality claims.

`job_minutes` is bounded to 60–360. Mapping gets `job_minutes - 40` minutes, or `job_minutes - 50` with reduction enabled, reserving time for checks, differential execution and upload. Dependency installation is capped at 10 minutes, checks at five, differentials at 10, and optional reduction at 10. A hard timeout, runner loss, or forced cancellation can prevent final uploads; missing artifacts are reported rather than assumed complete. The always-upload steps cover ordinary command errors and compiler/differential failures, not impossible-to-recover host loss.

## Outputs and failure semantics

Each host uploads `effect-host-shard-INDEX-of-TOTAL-attempt-ATTEMPT`, retaining:

- `ci/snapshot.json`, `ci/runner.json`, `ci/toolchain.json`, phase outcomes, installation/check logs, and compiler package metadata
- `provenance.json`, the compiler control, all raw stdout/stderr/status/byte fields in `raw/`, the shard map, and its differential report
- Local upstream repro packets and verification evidence if reduction was enabled

Native executables, compiler source, `node_modules`, and caches are excluded. Native binary hashes remain in the evidence.

Compiler refusals/crashes/timeouts are observations, not reasons to delete a shard. Mapping continues across cases. A genuine differential mismatch, invalid fixture, interrupted phase, or failed reduction is surfaced **after** artifact upload. `fail-fast: false` keeps independent hosts running. Completed per-case checkpoints can be recovered into an explicitly partial shard map after interruption; absent binaries are never invented or treated as compared.

The aggregate job runs after failed shards too. It verifies snapshot/source hashes and shard assignment, then uses `scripts/merge.ts` to retain each observation's own host/toolchain provenance. It never overwrites the ordinary host-local coverage map with a fictitious single-host result. The aggregate artifact contains `aggregate.json`, `aggregate.md`, and `ci/collection.json`, including missing hosts and phase statuses. No maps means aggregation fails visibly, but any collected status and individual host artifacts remain available. Read the per-host status as well as measured-case counts: a complete compilation map is not proof that all differential or reduction phases finished.

## Retrieval and local aggregation

Download before the three-day retention expires. Keep the directories separate to avoid overwriting identically named raw files from different hosts:

```sh
gh run download RUN_ID --repo OWNER/REPO \
  --pattern 'effect-host-shard-*' --dir .work/imported
gh run download RUN_ID --repo OWNER/REPO \
  --name effect-host-plan-attempt-ATTEMPT --dir .work/plan
gh run download RUN_ID --repo OWNER/REPO \
  --name effect-host-aggregate-attempt-ATTEMPT --dir .work/aggregate
```

To verify and reaggregate locally, use a clean checkout of that run's exact commit and Node 24.19.0. `collect` does not clear local reports; it writes collection metadata. The merge writes only the aggregate files:

```sh
export GITHUB_SHA="$(node -p "require('./.work/plan/shard-plan.json').snapshot.commit")"
export SHARD_CONFIG="$(node -p "JSON.stringify(require('./.work/plan/shard-plan.json').config)")"
node .github/scripts/host-shards.mjs collect
node scripts/merge.ts .work/imported
```

Do not execute a downloaded artifact as code. This workflow deliberately does not distribute compiled programs.

## Reruns and checkpoint resume

A normal GitHub re-run uses a fresh runner and recomputes the selected jobs. Artifact names include `run_attempt`, so prior evidence is not overwritten. Aggregation keeps prior attempts' provenance as separate observations.

For deliberate checkpoint reuse, dispatch at the **same commit** with the **same shard count and compiler timeouts**, set `resume_run_id` and `resume_attempt`, and optionally select only interrupted indices. That previous attempt must contain every requested shard artifact. The download is restricted to this repository, validates the artifact digest, and rejects mismatching commit/corpus, partition, Node/compiler/linker hashes, runner image version, or timeouts. An expired or unavailable artifact fails explicitly; start a fresh run instead.

Only assigned raw case checkpoints are restored. Completed rejected cases can be reused after the harness validates their cache identity and source hash. Successful native cases rebuild because their executables are not imported. Incomplete/missing checkpoints rerun. Changing shard count, corpus, compiler limits, or runner image requires a fresh run rather than relabeling old evidence. Resume saves the original runner identity separately and does not misattribute reused failure evidence to a different source.

## Action supply-chain pins and local validation

All four official action tag-to-commit mappings and their `action.yml` files were verified through the GitHub API on 2026-10-05; all use the Node 24 action runtime:

| Official action | Tag | Verified full commit |
| --- | --- | --- |
| [actions/checkout](https://github.com/actions/checkout/tree/3d3c42e5aac5ba805825da76410c181273ba90b1) | v7.0.1 | `3d3c42e5aac5ba805825da76410c181273ba90b1` |
| [actions/setup-node](https://github.com/actions/setup-node/tree/820762786026740c76f36085b0efc47a31fe5020) | v7.0.0 | `820762786026740c76f36085b0efc47a31fe5020` |
| [actions/upload-artifact](https://github.com/actions/upload-artifact/tree/043fb46d1a93c77aae656e7c1c64a875d1fc6a0a) | v7.0.1 | `043fb46d1a93c77aae656e7c1c64a875d1fc6a0a` |
| [actions/download-artifact](https://github.com/actions/download-artifact/tree/3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c) | v8.0.1 | `3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c` |

Permissions are read-only for repository contents and Actions; checkout does not persist Git credentials. Dispatch inputs pass through environment variables and strict validation, never shell expression interpolation.

```sh
node --check .github/scripts/host-shards.mjs
node --test .github/tests/*.test.mjs
actionlint .github/workflows/host-shards.yml
pnpm check
```

Local tests cover bounded/malicious inputs, exact partitioning, snapshot changes, isolated reports, safe resume, interrupted checkpoints, missing-host aggregation, and workflow safety properties. They do not establish that a hosted run has completed. The first actual hosted execution remains a separate, authorized validation step.
