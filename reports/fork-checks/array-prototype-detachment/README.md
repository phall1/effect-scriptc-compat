# Uncommitted fork-patch review finding: array prototype detachment

This is a bounded compiler regression diagnostic, **not corpus coverage, a baseline update, an accepted compiler fix, or a claim of Effect compatibility**. The external compiler lead's uncommitted Hash/array patch builds the Hash representative successfully, but the newly accepted native string-key array membership path ignores an individual array's detached prototype.

The parent independently confirmed the retained review finding with the saved `repro.ts`:

| Runtime | stdout | stderr | exit |
| --- | --- | --- | ---: |
| Node 24.19.0 | `null false true\n` | empty | 0 |
| Current dirty source fork | `null true true\n` | empty | 0 |

The native build succeeds. This is a semantic divergence, not a deferred trap or a failed Node baseline. `"map" in detached` must become false after `Object.setPrototypeOf(detached, null)`, while the present own index remains true.

`results.json` records the exact source checkout/HEAD/dirty package diff and untracked source hashes, compiled compiler/CLI/helper/runtime artifact hashes, controlled environment, Node executable identity, linker output/status, fixture hash, raw command bytes and native binary hash. Source and compiled/native artifacts were verified unchanged across this probe. The temporary source-external output/cache directory was removed after capture. Raw `.json`, `.stdout` and `.stderr` command artifacts retain their original paths; deleted native binaries are not portable evidence.

The source HEAD `d5cdca0e` adds only the mission document to upstream core `f053c81f`; **the reviewed implementation is the dirty patch identified in the report**, not that pristine commit or npm 0.2.4. Preserve this distinction when reproducing against later fork commits. The harness corpus, package pins and historical 0.2.3 map/differentials are unchanged.

The review traces `array-membership.ts` into `scr_arr_has_key`: it checks own storage/metadata and then the shared Array.prototype. The existing typed-ref `dyn.setPrototype` path mutates its checked view, while the new membership expression reads the original native array. The sole compiler writer owns correcting receiver-specific prototype propagation (or a sound explicit refusal), adding regressions and revalidating. Prototype restoration, custom inherited properties/numeric holes and optional/aliased array views require attention if implementing prototype state. Do not change expected output or suppress checks.

The latest earlier stabilized source campaign was **9 exact comparisons out of 10 selected programs**, including Hash, with Schema still reaching SC1090; its denominator remains 404 ready programs. This diagnostic is outside that denominator. Full local gates also exposed missing WASI artifacts, cache/linker launch-environment conflicts and unresolved sanitizer stderr; none is waived by this small diagnostic or by the successful Hash comparison.
