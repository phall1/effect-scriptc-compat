// Generated from node_modules/effect/dist/Iterable.d.ts, example 0.
// SHA-256: 7ac3adbdded2ef9385a4a44fca1674feac2fe3cef2b7a446d7df7773a3f9077d
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
