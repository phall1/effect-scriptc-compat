// Generated from node_modules/effect/dist/JsonPatch.d.ts, example 1.
// SHA-256: f6a08e5d6e0c8ffa255783e571bc7830ba95ca9fc4db2cf5f3d041b480c3d8b3
const __compatObserved: unknown[] = []
import * as JsonPatch from "effect/JsonPatch"

const patch: JsonPatch.JsonPatch = [
  { op: "add", path: "/items/-", value: "apple" },
  { op: "replace", path: "/count", value: 5 },
  { op: "remove", path: "/oldField" }
]

__compatObserved.push(JsonPatch.apply(patch, { items: [], count: 3, oldField: "value" }))
console.log(JSON.stringify(__compatObserved))
