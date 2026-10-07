## Review
- Correct: `ir/validate.ts:883–892` admits pointer-backed unions while retaining scalar rejection. `ir/validate.test.ts:1279–1318` covers rejection plus string/undefined-arm validation and serialization.
- Correct: Union pointer ABI, non-null undefined/null interned boxes and global null-sentinel guards are compatible (`ir/ir.ts:404–429`; `backend/llvm/emitter.ts:1582–1589,2755–2779,3530–3538`; `expr-dynamic.ts:282–300`). Inspected promotions, ordinary/borrowed reads, assignment expressions and local-only union optimizations; no newly reachable TDZ bypass found.
- Correct: The new differential fixture exercises preinitialization ReferenceError followed by initialized undefined membership (`tests/corpus/array-key-tdz-union.ts:4–15`).
- Correct: Completion pass reviewed the newly available baseline diff and final source. `packages/compiler/test/ts7/baselines/order-parity.json:14381–14416` adds exactly six fixture rows, including the new TDZ fixture; no existing rows change in the supplied diff. The TDZ row matches retained generator output. Baseline comparisons use keyed entries, not insertion order (`order-parity.test.ts:179–188`).

No issues found.

- Merge verdict: **OK with notes — CODEOK for this bounded repair and generated bookkeeping only.**
- Evidence: Read retained exit-zero results for **100 IR tests**, **15 plain + 15 sanitized differentials**, and **3 baseline-generation tests**. No commands or writes performed.
- Limits: Git diffs were parent-supplied artifacts, not independently Git-obtained. No full-gate, landing/release, unrelated Schema or staging-state acceptance.