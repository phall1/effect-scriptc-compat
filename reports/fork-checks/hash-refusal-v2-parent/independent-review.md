# Retained P1 disposition review

**Code verdict: OK with notes — the accepted P1 is closed by an honest bounded SC1090 refusal. No new concrete P0/P1/P2 in this delta. Overall landing readiness remains pending full-gate disposition, not green.** No universal native-array prototype support is required or claimed.

## Stable reviewed identity

Compiler HEAD before/after: `d5cdca0e8c6dea870761dade26c2dbb4d317dd8a`. Package/native source diff: **`91b38c412c2b85dfba6f849508e32d773050c109b5aa2864d8dbac168752a586`**, unchanged. Full `git diff --binary HEAD` SHA256: `c25aa88b0136dceb8f1548154f05a7279ee64201a2a332f41fc5488f5fbfaa4e`; combined tracked diff plus sorted untracked path/NUL/bytes fingerprint: **`0476584e9c9e4050fe7eaa93f37ae4443ebcf0d7cdea33ae133121928e3d5b78`**, unchanged. New integration test hash: `76fc07faa03c1989cf069a85f1d72bc89efc68462518d12d6685489d82759562`. No staged files; harness remains untouched/clean; diff whitespace and generated-state checks pass.

No checkout edits, commits/pushes, children, package rebuilds, full gates or sweeps. Four tiny existing-CLI probes ran only in two disposable external source/output/cache directories, with explicit Node 24.19.0/linker and process-group deadlines; scratch removed. Review applies only to the stable source/artifact identity below.

## Refusal and immediate siblings

- `packages/runtime/src/scr_json.c:1460–1481`: the typed-ref setter materializes, handles an already-pending exception, then detects ARR **before the prototype setter can mutate the view**. It releases the borrowed snapshot reference, records coded SC1090 and returns NULL. Non-array typed refs retain the existing path. The owning capsule remains responsible for its cached view; no success value is fabricated.
- The exact original null-prototype repro now builds, but native execution exits **1**, prints **no stdout**, and reports `Uncaught Error: Native array prototype mutation has no lowering [SC1090]`. Node still exits 0 with `null false true\n`. The former successful `null true true` answer is gone. This is an explicit unsupported boundary, not runtime parity.
- `tests/harness/native-array-prototype.test.ts` covers **direct, alias, custom and optional** mutation, requiring no continuation stdout and a nonzero SC1090 native result. Saved `hash-p1-v2-whitebox.log` reports all four plus the two C-audit configurations passing; `hash-p1-v2-whitebox-san.log` reports **4/4 sanitized refusals** passing. Both saved exit artifacts are 0.
- New C assertions (`scr_json.test.c:354–384`) take the exception, rematerialize the capsule and verify its view's prototype/null flag is unchanged, native default membership survives, references release, and no exception remains. Existing C runner uses ASan/UBSan, RC audit on/off and cycle thresholds 1/7/256 with JSON-only linking. These are inspected saved checks, not a reviewer C rebuild.
- Object's lowering route continues to call the exception-bearing `dyn.setPrototype` ABI, whose backend/runtime mapping is unchanged. **Reflect.setPrototypeOf is explicitly unsupported**, not implemented as boolean false: my external probe failed compilation with **SC2020**, named `Reflect.setPrototypeOf`, and produced no binary. `builtins/reflection.ts` implements other Reflect operations, not this setter; no new swallowing/false-return route was found.
- Getter correction (`scr_json.c:1439–1449`) honors explicit/null prototypes for ordinary checked arrays and the shared Array.prototype before default selection. Lazy membership now handles the default prototype's inventory at its actual query node (`:1698–1710,5406–5413`), so restoring an explicit checked-array link to an uninitialized shared prototype does not lose methods; initialized live deletions still win.
- Independent supported-sibling Node/native probe matched exact bytes/exit0/empty stderr:
  `checked null true false true\nrestored true\ndeleted false false\nmethod restored true true\n`.
  It detached a JSON checked array, verified its null getter/own index, restored the shared prototype, deleted shared map, checked both native/checked presence, then restored the actual method. No lazy resurrection or null-getter regression demonstrated.

## Current evidence and sanitizer disposition

Independently rehashed `.effect-compat/hash-refusal-v2-representative/report.json` source diff, all four recorded untracked package sources, compiler/dist, helper, runtime manifest/artifacts, linker, Node, published Effect tarball/extracted/installed contents, and all ten source/binary/raw command histories. They match current source and artifacts. Compiler identity: **`45a03da99be4ef018da1fb2e44934a429772498a7ed47760bc2abb400a2d104b`**. Published Effect 4.0.1 result remains **9/10 exact**, Hash exact, Schema URL/string SC1090 remaining, zero invalid baselines; measurementComplete true, partial true, corpusComplete/corpusParity false. Earlier patch campaigns are not promoted.

The newly retained `.effect-compat/asan-selfhost-original-raw-errors.json` exposes the repeated original failure's **complete assertion actual** (PID **53973**, not historical PID27058): exactly two lines, `WARN: No external symbolizers found...` and `HINT: Is PATH set?...atos?`, no AddressSanitizer ERROR/stack or unhandled errors in that capture. Its stack points to the strict stderr assertion after status/signal checks; the test deliberately executes with PATH empty. This is real evidence for that reproduced warning-only failure, not a blanket filter/waiver for memory diagnostics.

With an explicit symbolizer, `.effect-compat/asan-selfhost-symbolizer.log` reports the whole single self-hosting frontend test **1/1 passed**, and `asan-selfhost-symbolizer.exit` is **0**; the later raw reporter file has empty failures/unhandledErrors. The checked-in test's stderr assertion was not relaxed. Current full-lane `.env` records select `/opt/homebrew/opt/llvm@22/bin/llvm-symbolizer`. The historical PID27058 complete stderr was not recovered, but the preserved reproduction and unchanged-assertion passing rerun now support an environment-specific disposition of the investigated self-hosting issue, rather than an asserted patch memory defect. Other sanitizer failures must still be inspected independently.

## Remaining gate conditions

The source writer/parent owns full-gate follow-up. At initial report inspection the current full logs were still incomplete: `hash-p1-v2-full-plain.log` **3,237 lines / 285,692 bytes**, sanitized **2,858 / 272,164**, neither with final Test Files summary. Observed failures are therefore interim, not final readiness:

- Plain: native-toolchain **2**, coverage **1**, differential **14**, wasm-library **1**.
- Sanitized: native-toolchain **2**, differential **15**; includes other truncated symbolizer-stderr assertions that this review does not waive using the unrelated self-hosting capture.
- Corrected-environment `.effect-compat/hash-p1-v2-cache-clean.log` establishes native-codegen integration **14/14 passing**, replacing the earlier two failures. That combined run still failed two Zig cache tests; `.effect-compat/hash-zig-direct-binary.log` and its exit artifact establish those **2/2 passing** when isolated with the real Zig binary, not a whole-suite green result.

Required before landing: complete both current lanes, disposition remaining actual failures with exact environment/source/evidence, and meet the repository's gate policy. No full corpus or compiler-goal acceptance follows from this code review.

## Complexity

Loaded complexity skill; independently reproduced the saved same C lexical counter (comments/strings excluded; if/for/while/case/&&/||/? decisions) on HEAD/current:

| Function | Before | After |
| --- | ---: | ---: |
| scr_dyn_get_prototype | 20 | 20 |
| scr_dyn_set_prototype | 25 | 23 |
| scr_dyn_typed_ref_set_prototype | — | 4 |
| scr_dyn_array_lazy_method_key | — | 5 |
| scr_dyn_array_prototype_has_key | — | 3 |
| scr_dyn_array_has_key | — | 7 |

Extraction is small and semantically named; no legacy dispatcher rewrite requested.

## Completion-pass amendment

Rechecked every runtime `scr_dyn_set_prototype` caller: recursive typed-ref/function paths, checked-array C tests, stream checked-object construction, class function-property inheritance (which propagates pending exceptions), and checked-error-object construction. No internal caller newly forwards a typed native-array view and then fabricates success. Object's lowering and the may-throw effect entry remain intact. Exposed prototype getters populate builtin methods before user mutation, whereas internal JSON-only queries preserve the lazy inventory boundary.

Added one independent external existing-CLI probe specifically for the missing catch/held-view edge: materialize a persistent `unknown` capsule through JSON.stringify, attempt its prototype mutation in try/catch, then stringify the same capsule and query the original native array. Native exit **0**, empty stderr and exact stdout **`before [1]\ncaught\nafter [1] true true\n`** prove the exception is catchable, the success/continuation path does not run, the held view remains intact, and pending-error state clears. This is deliberately not parity with Node's successful mutation.

After the completion probe, compiler/artifact identity and full source fingerprint above were rehashed unchanged; new integration-test hash independently confirmed. Both owned scratch directories are absent. Harness still clean; no staged files, whitespace errors or generated-state delta. Prior lookup errors (directory read and nonexistent guessed Reflect filename) were resolved by listing the directory and inspecting the actual `builtins/reflection.ts`; no failed verification was hidden. Current full plain log had advanced to **3,400 lines / 300,254 bytes**, sanitized remained **2,858 / 272,164**; neither had a final Test Files summary or full-lane exit artifact. Code acceptance still does not waive gate readiness.

```acceptance-report
{
  "criteriaSatisfied": [
    {"id":"criterion-1","status":"satisfied","evidence":"Read-only bounded delta review independently confirms the original P1 now refuses explicitly, Reflect does not fake success, checked/shared siblings retain parity, current representative identity matches, and gate limits are documented."}
  ],
  "changedFiles": [],
  "testsAddedOrUpdated": [],
  "commandsRun": [
    {"command":"Before/after HEAD and tracked/untracked source fingerprint checks","result":"passed","summary":"Source stable at package diff 91b38c412c2b85dfba6f849508e32d773050c109b5aa2864d8dbac168752a586; no staged or reviewer checkout changes."},
    {"command":"Four disposable external-directory existing-CLI probes","result":"passed","summary":"Original repro exits1/no stdout/SC1090; Reflect setter compile-refuses SC2020; checked/shared paths match Node; caught refusal preserves held view and original array with exit0/empty stderr."},
    {"command":"Read-only v2 representative source/artifact/oracle/raw attestation","result":"passed","summary":"Current compiler identity 45a03da99be4ef018da1fb2e44934a429772498a7ed47760bc2abb400a2d104b verified; ten exact raw histories, nine equal outcomes, honestly partial."},
    {"command":"Saved refusal, C, self-hosting raw/symbolizer and corrected-environment gate log inspection","result":"passed","summary":"Four refusals pass plain/san; original repeated self-hosting stderr fully exposed, symbolizer rerun passes; full lanes still have unresolved failures."},
    {"command":"Same-counter C complexity and Git/generated-state checks","result":"passed","summary":"Counts reproduce saved evidence; no whitespace/generated drift, clean untouched harness."}
  ],
  "validationOutput": ["Original null-prototype repro: native exit1, no stdout, coded SC1090", "Reflect.setPrototypeOf: compile failure SC2020, no silent false/success", "Checked-array/shared-prototype sibling probe byte-equal", "Saved plain and sanitized refusal integration: 4/4 each", "Code verdict OK with notes; whole-milestone landing pending full gates"],
  "residualRisks": ["Full plain/sanitized lanes are incomplete with remaining failures; no final readiness approval.", "Native-array prototype mutation remains explicitly unsupported by design for this bounded disposition.", "Historical PID27058 full stderr remains unavailable; warning-only classification is grounded in the newly captured repeated failure and passing unchanged-assertion rerun, not invented historical output.", "Review must be renewed if source/artifact identity changes."],
  "noStagedFiles": true,
  "diffSummary": "No checkout modifications; only this authoritative external disposition report was written.",
  "reviewFindings": ["Original P1 closed through explicit SC1090 refusal before view mutation", "No new concrete P0/P1/P2 in reviewed delta", "Code verdict: OK with notes; remaining full-gate conditions are not waived"],
  "manualNotes": "Same retained reviewer role. Sole compiler writer/parent owns repairs and publication. Four cheap probes used only attested existing CLI/runtime artifacts, external caches and process-group deadlines; all scratch removed. No package rebuild, full gate, broad sweep or child launch."
}
```
