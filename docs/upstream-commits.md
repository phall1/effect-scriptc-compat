# Upstream commit packets

Owned fork: https://github.com/phall1/scriptc

Current branch: `effect-compat-0.2.7` at `2852286fdf612823b862e9f2248a96cd9543e9dc`.

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

Range to format a later PR stack: `2476844e13c7b2d85ce0c1ce5d0dfafe70c449e1..2852286fdf612823b862e9f2248a96cd9543e9dc`.

## What each code commit changes

`f83f32db` queries native array keys, including string keys such as `~effect/Hash`, without copying the array. It preserves key-before-receiver evaluation and refuses native array prototype mutation. Upstream already lowers numeric `k in arr` through the dense `arrayHas` path. The replay keeps that dense numeric path and adds the string-key `scr_arr_has_key` path beside it.

`e077fcc2` allows boxed union storage for TDZ globals. Undefined and null arms stay non-null interned boxes, so the uninitialized null pointer remains the sentinel. The order-parity baseline keeps every upstream row and adds the local array-key rows. Deleted upstream diagnostic paths were not put back.

`07926fce` gives Effect Schema stable URL, RegExp, and URLSearchParams constructor identity, and fences unmodeled constructor keys. The replay runs that fence and then uses upstream's `scr_closure_identity` owner for function property tables.

`871e8140` lowers Effect's re-exported `Boolean`, `Number`, and `String` constructor calls with the same ToBoolean, ToNumber, and ToString paths as the bare globals. Passing the constructor as a value still uses the stored closure. Unmapped JavaScript string indexes lower instead of SC1090.

`2852286f` answers `Object.isFrozen` for typed references, ordinary objects, and typed-to-dyn snapshots. Typed arrays and functions answer false. Handles, promises, and island values still fence. A generic body whose checker type did not map, but whose value is a string, uses the string-index lowering (`Base64.decode`'s `stripped[length - 1]`). Checker-typed strings keep upstream's in-bounds `charAt` proof from `b26d4409`; out-of-range numeric indexes stay optional.

## Probe evidence (pre-rebase only)

| Campaign | Source | Result |
| --- | --- | --- |
| `effect-402-all404-v1` | `8f9991f0` | 404 measured. 323 exact, 27 rejected, 54 mismatched, 0 invalid baselines. Not parity. |
| `effect-402-index-ctor-v1` | `158ec420` | 7/7 EXACT: `documented-boolean`, `documented-schemaissue`, `namespace-net`, `namespace-http-httpserver`, `namespace-net-ipinterface`, `namespace-net-ipnetwork`, `namespace-net-netaddress`. |
| `effect-402-regression-v1` | `158ec420` | 10/10 EXACT: `concurrency-all`, `concurrency-timeout`, `documented-hash`, `effect-gen`, `effect-succeed`, `error-cause`, `layer-succeed`, `resource-acquire-release`, `schema-decode`, `stream-map`. |
| `effect-402-isfrozen-v3` and `effect-402-isfrozen-v3b` | `a5507c95` | 5/5 EXACT: `namespace-http-api`, `namespace-http-api-httpapi`, `namespace-http-api-httpapiendpoint`, `namespace-http-api-httpapigroup`, `namespace-http-api-openapi`. |
| `effect-402-base64-v1` | `a5507c95` | 6/7 EXACT. `namespace-encoding` runs and mismatches only `Hex.encode("OK")`: native `1616`, Node `4f4b`. |

Do not reuse those campaign directories. `effect-402-isfrozen-v1` and `effect-402-isfrozen-v2` failed on a stale runtime pack and are not evidence about the dispatcher.

## Pins that are not part of these commits

The harness oracle is Effect 4.0.2, Node 24.21.0, pnpm 11.28.2, TypeScript 7.0.2, `@types/node` 24.19.1. The published scriptc CLI pin remains 0.2.3. Historical maps under `reports/` stay labeled with the Node and Effect versions that produced them.
