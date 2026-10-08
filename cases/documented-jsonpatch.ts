// Generated from node_modules/effect/dist/JsonPatch.d.ts, example 1.
// SHA-256: 9fd9cc054fce66b2f5814d808a1e212d080e036c252895d672f74932a4f5c6c8
const __compatObserved: unknown[] = []
import * as JsonPatch from "effect/JsonPatch"

const patch: JsonPatch.JsonPatch = [
  { op: "add", path: "/items/-", value: "apple" },
  { op: "replace", path: "/count", value: 5 },
  { op: "remove", path: "/oldField" }
]

__compatObserved.push(JsonPatch.apply(patch, { items: [], count: 3, oldField: "value" }))
console.log(JSON.stringify(__compatObserved))
