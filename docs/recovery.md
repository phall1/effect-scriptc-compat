# Recovery and continuation

## Recovered state

The published `main` at `da5e867` had harness source but no corpus or reports. The source checkpoint was saved in commit `0c8305c` as `effect-scriptc-compat-progress-4.tar.gz`, subsequently removed from the tip. Its SHA-256 was verified before extraction:

`cceb9aa62d63012de3e0561159b5eff6c30c171a41e7e01ecedabe9be37e910a`

The corpus is restored as ordinary `cases/` files, not another opaque archive. A fresh generator run against published Effect 4.0.1 reproduces the same fixture sources and manifest: 456 inventory cases, 404 ready, 38 uncovered, 14 skipped for I/O. `pnpm check` now revalidates every ready fixture twice on Node, even authored fixtures whose expected stdout was already saved.

The original Linux evidence is preserved under `reports/imported/linux-checkpoint/`, including all raw output, provenance, 122 measured cases, 39 differentials and five verified repro packets. These are historical **partial** results, not a finished run or macOS observations. Original command paths and the old checkpoint's disclosed manual legacy-context assertions remain unchanged as historical evidence. No native binaries were in the archive. Do not resume its successful cases or label it current-host evidence.

## Correctness fixes

- Unknown/empty case selection fails before any evidence is overwritten. Map destinations reject reserved metadata directories/files and path aliases; empty reduction selection cannot accidentally launch the whole corpus.
- The map saves its exact manifest, assigned cases, report destination, deadlines and toolchain fingerprint before work starts. It immediately publishes a visibly pending report.
- Checkpoint recovery no longer requires an older completed map or an environment switch asserting legacy context. It reuses only complete, typechecked, same-source/cache-identity records with exact expected binary paths and hashes.
- JSON results are published atomically. Fresh attempts remove stale binaries and LLVM output.
- Resume and differential/reduction stale checks include Node/compiler/linker executable hashes and the linker command's exact output/status, not just a version label.
- Pending/skipped sibling paths never turn a module into a fully static compatibility claim. Known exact-session typecheck failures survive recovery rather than becoming anonymous pending cases.
- Retained repro verifications are bound to the originating source, signature and toolchain fingerprint; changed contexts cannot silently count old packets as verified.
- The standard test command includes the GitHub orchestration tests. Interrupted CI uses the same checkpoint verifier as local runs.

No dependency or compiler version was upgraded. Effect and scriptc remain unmodified. No upstream issues/PRs, hosted Actions dispatches or billing changes are authorized by this recovery.

## Continue on this host

```sh
pnpm install --frozen-lockfile
pnpm generate
pnpm check
MAP_JOBS=4 pnpm map
pnpm diff
pnpm reduce
```

`pnpm checkpoint` is safe during a long map. After interruption, `MAP_RESUME=1 MAP_JOBS=4 pnpm map` reruns missing, malformed or stale records and reuses valid same-toolchain observations. One map writer per checkout; use independent checkouts for concurrent hosts. `pnpm diff` exit 1 means observed native mismatches, not harness failure; exit 2 means invalid Node baselines. Both retain evidence. Reports, not process presence or a green build, are the acceptance authority.

For a selected smoke run, use an isolated report destination in every phase:

```sh
MAP_CASES=module-number,effect-succeed MAP_REPORT=reports/shards/smoke.json pnpm map
MAP_REPORT=reports/shards/smoke.json DIFF_REPORT=reports/shards/smoke.differentials.json pnpm diff
```

The verified macOS arm64 smoke found `module-number` deferred but byte-equal to Node, and `effect-succeed` rejected with retained compiler diagnostics. Neither observation establishes full Effect compatibility. Full mapping, differentials for every built binary and independently verified repro predicates are still required. Smoke evidence (including the verified Number packet) is archived independently in `reports/imported/macos-smoke/` so full-host runs cannot overwrite its raw files.

## Complexity evidence

ESLint's cyclomatic `complexity` rule, default/classic variant, measured the touched functions:

| Function | Before | After |
| --- | ---: | ---: |
| `mapCase` | 33 | 7 |
| `summarize` | 13 | 5 |
| map markdown rendering | 25 | 2 |
| `provenance` | 23 | 6 |
| checkpoint record callback | 24 | 2 |
| CI `finish` | 9 + nested callback 14 | 6 |
| reducer orchestration `main` | 28 | 8 |

Extracted responsibilities: case selection, checkpoint validation/classification, report rendering, and version validation. New helpers stay at or below 10. Existing unrelated CI configuration/collection and reduction-predicate complexity is outside this delivery slice. Verification: strict typecheck, 31 harness/orchestration tests, 404 repeated Node baselines, fresh generation, and real pinned-compiler map/differential/checkpoint smoke.
