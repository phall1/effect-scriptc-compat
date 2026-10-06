// Generated from node_modules/effect/dist/MutableHashSet.d.ts, example 0.
// SHA-256: 14e3bdf77741788a3bbbc2562a9843343056f7565bce3b262cdf375ee94e57cd
const __compatObserved: unknown[] = []
import * as MutableHashSet from "effect/MutableHashSet"

// Create a mutable hash set
const set: MutableHashSet.MutableHashSet<string> = MutableHashSet.make(
  "apple",
  "banana"
)

// Add elements
MutableHashSet.add(set, "cherry")

// Check if elements exist
__compatObserved.push(MutableHashSet.has(set, "apple"))
__compatObserved.push(MutableHashSet.has(set, "grape"))

// Collect the iterator values
__compatObserved.push(Array.from(set))

// Get size
__compatObserved.push(MutableHashSet.size(set))
console.log(JSON.stringify(__compatObserved))
