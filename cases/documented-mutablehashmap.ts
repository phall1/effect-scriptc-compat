// Generated from node_modules/effect/dist/MutableHashMap.d.ts, example 0.
// SHA-256: 0dcee23e26dfd8d4a13b1e93ceaa40c90aa0f3d277bd6d8636b3205801aefd05
const __compatObserved: unknown[] = []
import * as MutableHashMap from "effect/MutableHashMap"

// Create a mutable hash map with string keys and number values
const map: MutableHashMap.MutableHashMap<string, number> = MutableHashMap
  .empty()

// Add some data
MutableHashMap.set(map, "count", 42)
MutableHashMap.set(map, "total", 100)

__compatObserved.push(Array.from(map))
console.log(JSON.stringify(__compatObserved))
