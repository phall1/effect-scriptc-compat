// Generated from node_modules/effect/dist/MutableHashMap.d.ts, example 0.
// SHA-256: 5eefe1ba2f9582a6be988d0f9a7b101de7d14a53e4fae1567ef945464fb57d1d
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
