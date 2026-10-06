// Generated from node_modules/effect/dist/Trie.d.ts, example 0.
// SHA-256: fb6c1bb045e9ce779db2f8a357ce1ac96677ca13c139d1822b2047892c9285d6
const __compatObserved: unknown[] = []
import * as Trie from "effect/Trie"
import { Option } from "effect"

// Create a trie with string-to-number mappings
const trie: Trie.Trie<number> = Trie.make(
  ["apple", 1],
  ["app", 2],
  ["application", 3],
  ["banana", 4]
)

// Get values by exact key
__compatObserved.push(Trie.get(trie, "apple"))
__compatObserved.push(Trie.get(trie, "grape"))

// Find all keys with a prefix
__compatObserved.push(Array.from(Trie.keysWithPrefix(trie, "app")))

// Iterate over all entries (sorted alphabetically)
__compatObserved.push(Array.from(trie))

// Check if key exists
__compatObserved.push(Trie.has(trie, "app"))

// Get size
__compatObserved.push(Trie.size(trie))
console.log(JSON.stringify(__compatObserved))
