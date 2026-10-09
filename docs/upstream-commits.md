# Upstream commit packets

Owned fork: https://github.com/phall1/scriptc

Current branch: `effect-compat-0.2.7`. The six replayed commits end at `2852286fdf612823b862e9f2248a96cd9543e9dc`. Local mission note `0aed51e9` records that replay and is not in the cherry-pick range. Later fix `f926b6d2663bb17ea4cbe716c65ddeb651d26b67` sits on top of that note. Cherry-pick it by SHA after `871e8140`. It is outside the six-commit range because the note is in between. Mission note `bfc5ee98beb82acf77b47c82da33d8ec9c0e5890` records the hex re-proof and is not a cherry-pick. Call-heritage fix `ce9d169b79c9bafc10b22a9ab96b15bd12efbac9` is the next code commit. Cherry-pick that SHA after `f926b6d2`. Mission note `3655ed7cc8c0fa4fc6d8ee0fa974b7a0701dcd64` records that re-proof and is not a cherry-pick. URI fix `dbec30d4969a1ffd8d479e10bf8c51005a544f02` is the next code commit after that. Cherry-pick it after `ce9d169b`. Mission note `dda6231f97aa34f63b714d00988f8dc339ccb20e` records the header re-proof and is not a cherry-pick. Array-key fix `610463e7bbe5640adf4139e6669526469e666ac0` is the next code commit. Cherry-pick it after `dbec30d4`. Mission note `d121385cd1fdbd3deb70209714a3296a3910f1eb` records the asDouble re-proof and is not a cherry-pick. Symbol-key fix `52bc6c0eb7d6fcf97fa3adb6b05f1ed8eeb8d917` is the next code commit. Cherry-pick it after `610463e7`. Mission note `4b975eec4b9ec2e3191ad0592fa7f035a8c8478a` records the Headers re-proof and is not a cherry-pick. That commit changes the C runtime. A checkout needs a rebuilt `@scriptc/runtime-darwin-arm64@0.2.7` pack before the native probe matches. The pack stays gitignored.

Base: upstream `main` `2476844e13c7b2d85ce0c1ce5d0dfafe70c449e1` (tag `v0.2.7` is `9131a3498c877e3a6b8e24a95f1bedf4d031fc5d`, plus the three commits after that tag).

Previous immutable tip: `origin/effect-compat-0.2.6` at `a5507c95cfa804abee9fae00f602efcf941692eb`, which was six commits ahead of v0.2.6 `b9bac854`. Do not force-push `origin/effect-compat` or `origin/effect-compat-0.2.6`.

No upstream pull request is opened from this file. Each code row below is one cherry-pick candidate when an upstream PR is requested. The mission document is not a compiler fix.

Native numbers below were measured on the pre-rebase SHAs, Node 24.19.0, published Effect 4.0.2. They are not a measurement of the replayed SHAs, and 323 plus later exact probes is not a new 404 count. The 404 census is not corpus parity.

## Replay map

| Replayed SHA | Pre-rebase SHA | Subject | Upstream PR |
| --- | --- | --- | --- |
| `a038fb90ccc582c0ecc10e208be4006a75c1004c` | `a4071f6343c17165d6be443336b717d483f1959f` | Record the corpus-parity mission | No. Documentation only. |
| `f83f32db83ee982d4e8e5ba3f3915526b0c573fe` | `baa6d7bf5a8e64b4202f3ffae3850d2247055f0a` | Native array membership and Effect Hash | Yes, after re-proof. |
| `e077fcc2301682fed3ae6d6639d84c7f317f7172` | `30de9a82e99da212bff178fb5a9b04f4456a8877` | TDZ validation for boxed global unions | Yes, after re-proof. |
| `07926fce11b78ebb359a6de9481b95efdae8e890` | `8f9991f077eeb7e284ccf3e6b042c1db1f743d9e` | Builtin constructors for Effect Schema | Yes, after re-proof. |
| `871e81405016be85db60f89d99f60d2cb1db2223` | `158ec4205dd5bc9a73a7c11a4bbc1c29292b9852` | Re-exported primitive constructors and unmapped string indexes | Yes, after re-proof. |
| `2852286fdf612823b862e9f2248a96cd9543e9dc` | `a5507c95cfa804abee9fae00f602efcf941692eb` | `Object.isFrozen` and generic string indexes | Yes, after re-proof. |
| `f926b6d2663bb17ea4cbe716c65ddeb651d26b67` | none (new on this branch) | Number `toString` uses the receiver and the radix | Yes. Cherry-pick this SHA after `871e8140`. |
| `ce9d169b79c9bafc10b22a9ab96b15bd12efbac9` | none (new on this branch) | Call-expression class bases lower at emit when collection misses | Yes. Cherry-pick this SHA after `f926b6d2`. |
| `dbec30d4969a1ffd8d479e10bf8c51005a544f02` | none (new on this branch) | `globalThis` URI calls use the string intrinsics | Yes. Cherry-pick this SHA after `ce9d169b`. |
| `610463e7bbe5640adf4139e6669526469e666ac0` | none (new on this branch) | JavaScript arrays keep an object opened by a later key | Yes. Cherry-pick this SHA after `dbec30d4`. |
| `52bc6c0eb7d6fcf97fa3adb6b05f1ed8eeb8d917` | none (new on this branch) | `Object.defineProperties` defines enumerable symbol keys | Yes. Cherry-pick this SHA after `610463e7`. Rebuild the local runtime pack after it. |

Range for the six replayed commits: `2476844e13c7b2d85ce0c1ce5d0dfafe70c449e1..2852286fdf612823b862e9f2248a96cd9543e9dc`. Then `git cherry-pick f926b6d2663bb17ea4cbe716c65ddeb651d26b67`, `git cherry-pick ce9d169b79c9bafc10b22a9ab96b15bd12efbac9`, `git cherry-pick dbec30d4969a1ffd8d479e10bf8c51005a544f02`, `git cherry-pick 610463e7bbe5640adf4139e6669526469e666ac0`, and `git cherry-pick 52bc6c0eb7d6fcf97fa3adb6b05f1ed8eeb8d917`. Leave out `a038fb90`, `0aed51e9`, `bfc5ee98`, `3655ed7c`, `dda6231f`, `d121385c`, and `4b975eec`.

## What each code commit changes

`f83f32db` queries native array keys, including string keys such as `~effect/Hash`, without copying the array. It preserves key-before-receiver evaluation and refuses native array prototype mutation. Upstream already lowers numeric `k in arr` through the dense `arrayHas` path. The replay keeps that dense numeric path and adds the string-key `scr_arr_has_key` path beside it.

`e077fcc2` allows boxed union storage for TDZ globals. Undefined and null arms stay non-null interned boxes, so the uninitialized null pointer remains the sentinel. The order-parity baseline keeps every upstream row and adds the local array-key rows. Deleted upstream diagnostic paths were not put back.

`07926fce` gives Effect Schema stable URL, RegExp, and URLSearchParams constructor identity, and fences unmodeled constructor keys. The replay runs that fence and then uses upstream's `scr_closure_identity` owner for function property tables.

`871e8140` lowers Effect's re-exported `Boolean`, `Number`, and `String` constructor calls with the same ToBoolean, ToNumber, and ToString paths as the bare globals. Passing the constructor as a value still uses the stored closure. Unmapped JavaScript string indexes lower instead of SC1090.

`2852286f` answers `Object.isFrozen` for typed references, ordinary objects, and typed-to-dyn snapshots. Typed arrays and functions answer false. Handles, promises, and island values still fence. A generic body whose checker type did not map, but whose value is a string, uses the string-index lowering (`Base64.decode`'s `stripped[length - 1]`). Checker-typed strings keep upstream's in-bounds `charAt` proof from `b26d4409`; out-of-range numeric indexes stay optional.

`f926b6d2` stops the constructor-name lookup from inheriting `Object.prototype.toString`. A method whose symbol is named `toString` was treated as a `String` or `Number` constructor call, so `(79).toString(16)` lowered to the decimal text of the radix. The lookup now accepts only `StringConstructor`, `NumberConstructor`, and `BooleanConstructor`. One-argument number `toString` emits `num.toStringRadix` of the receiver. Zero-argument `toString` still formats the receiver. Re-exported constructor calls are unchanged.

`ce9d169b` adopts an `extends` call even when collection could not lower it. Collection runs before later classes are registered, so a binding whose type names one of those classes poisons the heritage lower and the callable base used to be dropped. Emit lowers that call again. This is the `Schema.Opaque()(Schema.Struct(...))` fence in `McpSchema.js`.

`dbec30d4` lowers `globalThis.encodeURIComponent`, `encodeURI`, `decodeURIComponent`, and `decodeURI` through the same string intrinsics as the bare names. Effect's OTEL header schema calls `globalThis.decodeURIComponent`. The stored-global read threw inside that schema's catch, the config fell through to `undefined`, and `JSON.stringify` printed `null`.

`610463e7` keeps a JavaScript array dynamic when one element is an object binding that a later write opened with a new key. The checker still types that array as the original record, and checking the dynamic object back onto that record dropped the key. Effect's OTLP number data point assigns `asDouble` after the literal and then stores the object in `dataPoints: [dataPoint]`. The array now keeps that object. An explicit array destination and TypeScript literals still project onto the record. A later write to a key the record already had, or a `const` array whose inferred element type is that record, still copies.

`52bc6c0e` makes `Object.defineProperties` define enumerable symbol keys after the string keys. String own-key enumeration never returned those symbols, so Effect's `Headers` prototype never received `Symbol.for("~effect/http/Headers")` and `isHeaders` was false. `Object.defineProperty` on one symbol key already worked. The Darwin arm64 runtime pack was rebuilt locally after this commit. The pack is gitignored, so a later checkout must rebuild `@scriptc/runtime-darwin-arm64` before the native probe matches.

## Probe evidence (pre-rebase only)

| Campaign | Source | Result |
| --- | --- | --- |
| `effect-402-all404-v1` | `8f9991f0` | 404 measured. 323 exact, 27 rejected, 54 mismatched, 0 invalid baselines. Not parity. |
| `effect-402-index-ctor-v1` | `158ec420` | 7/7 EXACT: `documented-boolean`, `documented-schemaissue`, `namespace-net`, `namespace-http-httpserver`, `namespace-net-ipinterface`, `namespace-net-ipnetwork`, `namespace-net-netaddress`. |
| `effect-402-regression-v1` | `158ec420` | 10/10 EXACT: `concurrency-all`, `concurrency-timeout`, `documented-hash`, `effect-gen`, `effect-succeed`, `error-cause`, `layer-succeed`, `resource-acquire-release`, `schema-decode`, `stream-map`. |
| `effect-402-isfrozen-v3` and `effect-402-isfrozen-v3b` | `a5507c95` | 5/5 EXACT: `namespace-http-api`, `namespace-http-api-httpapi`, `namespace-http-api-httpapiendpoint`, `namespace-http-api-httpapigroup`, `namespace-http-api-openapi`. |
| `effect-402-base64-v1` | `a5507c95` | 6/7 EXACT. `namespace-encoding` runs and mismatches only `Hex.encode("OK")`: native `1616`, Node `4f4b`. |

| `effect-402-rebase-027-v1` | `0aed51e9` | Node v24.21.0. 13 measured, 12 exact, 1 mismatch, 0 rejected. The mismatch is `namespace-encoding`: native `Hex.encode("OK")` is `1616`, Node is `4f4b`. Not a new 404 count. |
| `effect-402-hex-radix-v1` | `f926b6d2` | Node v24.21.0. 7/7 EXACT: `namespace-encoding`, `namespace-encoding-base64`, `namespace-encoding-base64url`, `documented-boolean`, `documented-hash`, `schema-decode`, `namespace-http-api`. Not a new 404 count. |
| `effect-402-opaque-v1` | `ce9d169b` | Node v24.21.0. 3/3 EXACT: `namespace-ai-mcpprotocol`, `namespace-ai-mcpschema`, `namespace-ai-mcpserver`. Not a new 404 count. |
| `effect-402-otlp-headers-v1` | `dbec30d4` | Node v24.21.0. 1/1 EXACT: `module-observability--internal--otlpenv`. Not a new 404 count. A local `module-observability--otlpmetrics` run on the same dist still drops `asDouble` and is not part of this campaign. |
| `effect-402-asdouble-v1` | `610463e7` | Node v24.21.0. 2/2 EXACT: `module-observability--otlp`, `module-observability--otlpmetrics`. Not a new 404 count. |
| `effect-402-symbol-headers-v1` | `52bc6c0e` | Node v24.21.0. 1/1 EXACT: `namespace-http-headers`. Not a new 404 count. Measured after rebuilding the local Darwin arm64 runtime pack. |

Do not reuse those campaign directories. `effect-402-isfrozen-v1` and `effect-402-isfrozen-v2` failed on a stale runtime pack and are not evidence about the dispatcher.

## Pins that are not part of these commits

The harness oracle is Effect 4.0.2, Node 24.21.0, pnpm 11.28.2, TypeScript 7.0.2, `@types/node` 24.19.1. The published scriptc CLI pin remains 0.2.3. Historical maps under `reports/` stay labeled with the Node and Effect versions that produced them.
