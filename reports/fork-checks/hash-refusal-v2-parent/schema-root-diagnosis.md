# Schema module-initialization root diagnosis

## Finding

**The observed SC1090 is an incorrect constructor-value ABI, not Schema decoding, Hash, or the representation annotation.** The compiler specializes `instanceOf(globalThis.URL, annotations)` with a first parameter of IR `url` (a URL **instance**), but lowers its actual argument `globalThis.URL` as STRING `[builtin URL]`. Exact-shape enforcement correctly rejects that mismatch; JavaScript statement deferral places the rejection into the Schema module initializer. Importing Schema executes the initializer before the fixture can decode its Number field.

There is a second, latent issue: the generated `u => u instanceof constructor` predicate has lost the builtin constructor's provenance and itself contains an SC1090 fence. Merely suppressing the initializer mismatch is not coherent support for generic `instanceOf`.

## Source-to-IR chain

All compiler paths below are relative to `/Users/phall/workspace/scriptc-effect`; Effect paths refer to the actual installed package under `/Users/phall/workspace/effect-scriptc-compat/node_modules/.pnpm/effect@4.0.1/node_modules/effect/dist/`.

1. **Source:** `Schema.js:3277–3278` implements `instanceOf(constructor, annotations)` as `declare(u => u instanceof constructor, annotations)`. The published `Schema.d.ts:5182` has generic constructor parameter `C extends abstract new (...args: any) => any`; its output represents `InstanceType<C>`, not the constructor value itself. `Schema.js:5870–5882` eagerly initializes exported schema `URL` with `instanceOf(globalThis.URL, { representation: { id: "effect/schema/URL", payload: null }, ... })`.
2. **Constructor/instance confusion:** `frontend/type-mapper.ts:2196–2208` maps any stdlib-provenance interface/class symbol named `URL` to `{ kind: "url" }`. It does **not** exclude types having construct signatures. The adjacent `URLSearchParams` rule at `2211–2223` repeats this. General program class instance/static branches at `1603–1661` already distinguish those signatures, but exclude declaration-file classes. The installed Node `url.d.ts:433` declares `class URL`; its global `var URL` at `1033–1037` can have `typeof _URL`, so the ambient class's static side reaches the later URL-instance rule. This is a provenance-correct symbol but the wrong **side** of that symbol.
3. **Value lowering:** `frontend/lowering/lower-exprs.ts:2520–2551` recognizes `globalThis.<builtin>` with `stdlibGlobalNameOf` and, for JS sources lacking a special value implementation, returns `strLit("[builtin URL]"): string`. The bare-global counterpart at `1597–1621` does the same. This token is not a parsed URL and must not be relabeled `url`.
4. **Implicit specialization:** `frontend/lowering/generic-functions.ts:1405–1544` chooses implicit-any parameter ABIs from the argument's checker type. `storedImplicitArgumentType` at `1330–1385` can observe the property-read's actual STRING representation, but `implicitCallInstance` only gives special priority to stored `dyn`, `array`, and `func`; a stored STRING token falls through to checker-type mapping. It therefore interns a URL-instance parameter. `lowerGenericCall:235–241` then invokes `completeArgs`; positional argument lowering/coercion and `Lowerer.coerceInto` ultimately call `requireExactShape` (`lowerer.ts:6231–6324`), which produces the observed string/URL diagnostic.
5. **Current emitted IR:** `%m112.instanceOf%1` has parameters `[url, record:r103]`. `%init.112.body[139]` is a `runtimeFence` at installed `Schema.js` byte offsets `179414–179723` (line 5870), instead of an assignment to `%g.m112.URL`. Its message is exactly `'string' values where 'URL' is expected is not supported yet [SC1090 at /Users/phall/workspace/effect-scriptc-compat/node_modules/.pnpm/effect@4.0.1/node_modules/effect/dist/Schema.js:5870]`.
6. **Sibling already demonstrated:** the same IR has `%m112.instanceOf%2` parameters `[searchParams, record:r103]` and a second initializer fence at `Schema.js:6235`: `'string' values where 'URLSearchParams' is expected`. Fixing only URL moves the first failure later.
7. **Latent predicate:** `%fn941`, generated for the URL specialization, has `[dyn] => bool`, no captures, and only a `runtimeFence` at `Schema.js:3278`: `'instanceof' right-hand sides other than classes declared in the program is not supported yet (instantiating 'instanceOf' with (URL, { expected: string; representation: { id: string; payload: null | undefi...)) [SC1090 at /Users/phall/workspace/effect-scriptc-compat/node_modules/.pnpm/effect@4.0.1/node_modules/effect/dist/Schema.js:3278]`. The URL brand path in `lower-exprs.ts:11576–11582` recognizes a stdlib global or `node:url` member; the local `constructor` parameter is neither. Its incorrectly instance-typed value also cannot take the checked-constructor branch at `11806–11820`.

## Context, shadowing, and real representation

- **Annotations are ordinary metadata.** `SchemaRepresentation.d.ts:10–13` defines `RepresentationAnnotation` as `{ id: string; payload: Schema.Json }`. Emitted `r101` is `{ id: string; payload: union:u4 }`, with `u4 = null | undefined`; `r103` has `expected: string`, `representation: r101`, `toCode: () => dyn`, and `toCodecJson: () => object`. None of those fields is `url`. The compiler's contextual literal/field layout mechanisms (`expressions/object-literals.ts:901+`, `lowerer.ts:7480+`) must keep those contracts, evaluation order, and contextual callback typing. There is no evidence that `"effect/schema/URL"`, `"Schema.URL"`, or `"globalThis.URL"` strings are the mismatching argument. No reason to weaken their validation or special-case their spelling.
- **Schema.String and Schema.URL are not global constructors.** `Schema.js:1695` declares module-local `String = make(SchemaAST.string)`; `5870` declares module-local `URL`. The preceding `URLString = String.annotate(...)` uses that schema, and the next `URLFromString` expression uses the schema `URL`. The observed IR correctly reads `%g.m112.String:dyn` and `%g.m112.URL:dyn` on these paths. Only `globalThis.URL` denotes the host constructor. `surfaces.ts:2715–2755` already checks symbol provenance and canonicalizes global/globalThis/alias spellings; use that mechanism, never AST name matching. A user class named URL must remain a user class.
- **IR `url` is real native instance storage.** `ir/ir.ts:109–116` defines it as the refcounted WHATWG instance produced by `new URL`/`url.pathToFileURL`, not a constructor and not a string. `type-mapper.ts:738` merely prints that kind as `URL`. `runtime/src/scr_url.c:1547–1563` boxes/checks actual URL instances as `SCR_DYNH_URL` handles. A coercion accepting constructor tokens as `url`, or converting metadata strings into URLs, would be semantically wrong and unsafe.

## Smallest coherent compiler seam for the sole writer

Own this as **constructor-value specialization**, at the existing type-mapping / implicit-argument binding / builtin-`instanceof` boundary; no Effect changes and no Schema-name hook.

1. Distinguish the constructor static side from the instance side in the URL and URLSearchParams stdlib mapping rules (construct signatures are already the existing discriminator for program classes). Audit adjacent stdlib class-based handle rules for this same pattern when touching that shared contract; do not globally remap actual URL instances to strings/dyn.
2. Make implicit specialization agree with the actual represented constructor argument, rather than reusing an instance-only checker mapping. A stable stdlib constructor snapshot can carry its **provenance-backed builtin identity as compile-time specialization metadata**, alongside its actual argument ABI. This is a narrowly scoped extension of `GenericInstance` / `implicitCallInstance` / `lowerGenericInstance`, not a new IR URL representation. Bindable implicit params are already never-written; carry identity through immutable aliases/forwarding and nested predicate lowering only where proven.
3. Include builtin identity in specialization/cache keys, not just the shared STRING or DYN signature. `instanceOf(URL, sameAnnotations)` and `instanceOf(RegExp, sameAnnotations)` must not share the wrong predicate. Preserve/restores the identity context like the existing `implicitParamTypes` context; do not install process-wide name aliases for scoped parameters.
4. Let `lowerInstanceOf` consult that proven constructor identity and reuse its existing native brand lowering (`dyn.nativeUrlIs`, analogous supported family brand tests). URLSearchParams has an existing runtime predicate `scr_dyn_native_search_params_is` (`scr_url.c:1666–1668`) but no corresponding named compiler `nativeSearchParamsIs` lowering found; exposing that existing brand test through the IR/backend is the narrow sibling work, not a new URL representation. This addresses `u instanceof constructor`, not just the import trap. Preserve normal class-value specialization for user classes, unknown/reassigned constructors and operation fences outside the supported family.

**Why not just change an ABI to dyn?** It can remove the initializer mismatch but still feeds `[builtin URL]` to the checked runtime constructor test. `class-construction.ts:25–55` dispatches checked `instanceof` to `bytes.instanceOf`; `runtime/src/scr_json.c:2368–2383` requires a real `SCR_DYN_FUNC` and recognizes ArrayBuffer/Array/numeric typed-array constructor identities. STRING tokens are not callable. The predicate will then throw `Right-hand side of 'instanceof' is not callable`. A full runtime first-class URL-constructor callable is another valid implementation choice, following existing native bytes constructors, but is larger than reusing compiler-proven constructor identity for this static specialization. The sole writer should choose the seam; this diagnosis made no implementation changes.

## Verified reproducer and exact execution

The existing five-line fixture (four executable lines) is a small, independently verified reproducer; it has not been globally minimized and does not exercise URL itself:

```ts
// Adapted from the installed effect@4.0.1 published declarations.
import { Effect, Schema } from "effect"
const Value = Schema.Struct({ value: Schema.Number })
const decoded = await Effect.runPromise(Schema.decodeUnknownEffect(Value)({ value: 42 }))
console.log(`decode:${decoded.value}`)
```

Existing campaign binary: `/Users/phall/workspace/scriptc-effect/.effect-compat/hash-refusal-v2-representative/schema-decode/program`. Both executions were repeated during this diagnosis with 10-second deadlines and cwd `/Users/phall/workspace/effect-scriptc-compat`:

| Execution | Command | stdout, exact | stderr, exact | status / signal |
| --- | --- | --- | --- | --- |
| Node | `/Users/phall/.local/share/mise/installs/node/24.19.0/bin/node --experimental-strip-types /Users/phall/workspace/effect-scriptc-compat/cases/schema-decode.ts` | `decode:42\n` | empty | `0 / null` |
| Native | campaign binary above, no arguments | empty | `Uncaught Error: 'string' values where 'URL' is expected is not supported yet [SC1090 at /Users/phall/workspace/effect-scriptc-compat/node_modules/.pnpm/effect@4.0.1/node_modules/effect/dist/Schema.js:5870]\n` | `1 / null` |

No timeout or spawn error occurred. These exactly match the retained campaign evidence; report summary remains 9/10 equal, partial representative evidence, not corpus parity.

One successful current prebuilt-CLI IR emission, with a private external cache and a 60-second deadline:

```text
/Users/phall/.local/share/mise/installs/node/24.19.0/bin/node /Users/phall/workspace/scriptc-effect/packages/cli/dist/main.js build /Users/phall/workspace/effect-scriptc-compat/cases/schema-decode.ts --npm-static=effect --emit=ir -o /var/folders/6k/_cy0x5fn1c53gx23j8s3_mnm0000gn/T/schema-root-diagnosis-YQP4uA/schema.ir.json
status=0 signal=null elapsedMs=43814
stdout=/var/folders/6k/_cy0x5fn1c53gx23j8s3_mnm0000gn/T/schema-root-diagnosis-YQP4uA/schema.ir.json\n
stderr=empty
```

An initial attempt incorrectly combined `--optimization=dev` with `--emit=ir`; it exited 1 in 277 ms before compilation with `--optimization is only meaningful with --emit=exe` plus CLI help. It was corrected rather than treated as a compiler failure.

Two very small external npm-static controls used a fake `rootdiag` package (untyped `instanceOf` returning `{ test: u => u instanceof constructor, annotations }`, shadowed exported URL/String, and a literal metadata argument). Both initialized successfully: Node/native stdout `init object\n`, stderr empty, status 0, signal null. Build status 0, stderr exactly `scriptc: warning: --emit-ir is deprecated; use --emit=ir for IR as the primary output\n`. The second control added an external symlink to installed Node types. Their emitted constructor parameter was **dyn**, not url; they therefore do **not** reproduce the offending checker-type mapping and are not proposed as passing regression evidence. They never called the predicate. Do not replace the actual Effect repro with that under-specified fake fixture. No additional build or broad campaign was run.

## Regression strategy after implementation

- Co-located mapper test: with actual stdlib/Node URL class declarations, map an instance type to `url`, but never map `typeof URL` to `url`; cover `URLSearchParams` likewise. Include fallback-interface constructor declarations and a user class named URL, so tests pin provenance and constructor/instance sides, not just a display name.
- Focused npm-static fixture test: generic/untyped `instanceOf` helper receiving globalThis.URL and another constructor with identical annotation layout; execute the returned predicates on real URL, plain object, primitive, null, undefined, and wrong-family instances. Reverse call order to catch identity-free instance-key collisions. Cover stable alias/forwarding and a module-local schema `String`/`URL` binding beside globalThis constructor accesses. A minimal fake fixture must first demonstrate the actual Node class-based constructor checker shape; the controls above did not.
- Pin representation metadata round-tripping separately: ordinary `id`, null `payload`, expected strings and toCode output survive and are never URL-coerced. Keep contextual callback/optional field layouts; do not patch object-literal lowering merely because the source location spans the entire call.
- Real installed Effect regression: unchanged `cases/schema-decode.ts` must execute as `decode:42\n`, empty stderr, exit 0. Check emitted Schema initializer for both URL and URLSearchParams fences, not just the first reached trap. Add a real URL-schema predicate/decode success and rejection probe if claiming `instanceOf` support; initialization alone does not reach its latent predicate.
- Parent owns subsequent package/focused/native gates after the Hash freeze. This report makes no claim about post-fix parity, sanitized behavior or the remaining unreached Schema surface.

## Identities, constraints, cleanup

- Compiler checkout HEAD: `d5cdca0e8c6dea870761dade26c2dbb4d317dd8a`. Pre-existing dirty compiler tree was left intact; initial/final path lists matched, with no staged files observed. Harness checkout was clean at both checks. Current tracked compiler diff SHA-256 at final inspection: `c25aa88b0136dceb8f1548154f05a7279ee64201a2a332f41fc5488f5fbfaa4e`; this is not the older campaign's recorded diff hash.
- Fixture SHA-256: `307324f322acfd6e10a5c3a4618522c5d432ae1b702d16388bd1197d2840f10c`.
- Existing campaign native binary SHA-256: `e6c1e9a17af3890e48a9affc60310699a5b1ade870aa24a12e38b3826ae93803`.
- Installed `Schema.js` SHA-256: `502b32d5804e1aba237fa6e50026d7a5d53d4e8ee53a40ab7f8c183755dc88d7`.
- Prebuilt CLI `dist/main.js` SHA-256: `1e1d82da065b447f69336e910613a4d1eef66128215f59888f1198b129d16a39` (entry file identity, not a composite compiler identity).
- Current emitted Schema IR SHA-256: `44baecfdb004473f9ba80fffb7422c861f3eb65b0c9059e19da631303d62d29a`.
- Load-bearing source SHA-256: `frontend/type-mapper.ts` = `1ff02f3aa81783e0077a00b719062a571eef9783d6b47e9b0ab0ff83929aef66`; `lowering/generic-functions.ts` = `e45ad2cbde6dfd495ded26887a421e3f745474ed3d1ac08106bbf82750ff77f1`; `lowering/lower-exprs.ts` = `0d84780409c40362fa85d4e3c7127054069ccb7616395e438f5da2c2611598c4`; `lowering/lowerer.ts` = `007e71f6ccab8dd0d54d35258943f32c68392830d0e227f1a1abd58e5571c2bd`.
- Corresponding prebuilt JS SHA-256: type-mapper = `1e4f5161f345388cb6decb0e7783aa1084bb6f9920240845f01fadefd21ac76c`; generic-functions = `7f88a814e442e9211170e020a9632afe2490b2609422fa7acde1732d07df1a02`; lower-exprs = `b8b6434f018a62572d48eac1d0a37b5ec807051b496f4328a0d6fba8ef5ef941`; lowerer = `faed81b5dbe97be28363cc7d53bbf7e94835df027fb689f8c5d6bd9fa59e2e6c`.
- Read AGENTS.md, CONTRIBUTING.md, compiler tests/harness README and compatibility-harness README. No package builds, edits to either checkout/dependency/corpus, child launches, broad gates/corpus, commits or pushes. Three substantive frontend compilations only: two tiny controls and one actual-fixture IR emission. All created scratch/cache/binaries/IR were external and are removed after extracting this handoff; the source-identified original campaign binary remains untouched.

## Completion second pass

Rechecked the specialization keys and sibling dispatch consumers without another compilation. `generic-functions.ts:1573` confirms implicit instances key only on argument IR types today; the explicit-generic machinery at `345` already has an `extraKey` concept for semantically distinct literals. Any proven-constructor specialization needs an equivalent discriminator rather than sharing a STRING/DYN key. The URL brand's registered signature is `LIB_FN_SIGS["dyn.nativeUrlIs"]` (`ir/builtin-signatures.ts:187`) and its backend binding is `scr_dyn_native_url_is` (`backend/llvm/lib-shared.ts:689`). `IrLibFn` is derived from that signature table (`builtin-signatures.ts:3446`) and the validator consumes it, so exposing the existing URLSearchParams predicate requires the signature and backend binding together, not only a frontend call string. Its native function is a pure handle-tag comparison; checked-constructor dispatch differs and is explicitly may-throw (`ir/builtin-effects.ts`). Review runtime-feature selection if adding a new family name: current searchParams feature detection recognizes `sp.*`, `url.searchParams`, and actual searchParams types (`ir/runtime-features.ts:190,293`), not an arbitrary new dyn predicate name.

Final bounded checks: compatibility-harness `git status --porcelain` empty; compiler `git diff --cached --name-only` empty; compiler `git diff --check` passed; external scratch directory and pointer both absent. No generated files, source edits, extra builds, or children were introduced. The earlier nonexistent coercion-file read was a lookup error, not a blocker; actual coercion/enforcement was inspected in `lowerer.ts` and call-argument sources. The only failed execution pertinent to behavior is the deliberately reproduced native SC1090; the invalid IR-option command was corrected successfully.

## Residual risks

The ABI diagnosis and both initializer fences are directly demonstrated, including the latent URL predicate. The suggested identity-specialization seam is an implementation recommendation, not implemented or verified code. A mapper-only fix can expose later URLSearchParams initialization or token-as-constructor predicate failures. There may be other unreached Schema failures after these fences; no broad corpus claim is warranted. Static specialization must not infer identity from forgeable `[builtin ...]` string contents, erase lexical shadowing, share predicates solely by STRING/DYN parameter shape, or drop real constructor evaluation/side effects.
