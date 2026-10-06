// Generated from node_modules/effect/dist/Iterable.d.ts, example 0.
// SHA-256: 02e39d71b94bd236e68990d6bf6a719443b0046c5f56e7163a337b1808ada737
const __compatObserved: unknown[] = []
import * as Iterable from "effect/Iterable"

// Generate first 5 even numbers
const evens = Iterable.makeBy((n) => n * 2, { length: 5 })
__compatObserved.push(Array.from(evens))

// Generate squares
const squares = Iterable.makeBy((n) => n * n, { length: 4 })
__compatObserved.push(Array.from(squares))

// Infinite sequence (be careful when consuming!)
const naturals = Iterable.makeBy((n) => n)
const first10 = Iterable.take(naturals, 10)
__compatObserved.push(Array.from(first10))
console.log(JSON.stringify(__compatObserved))
