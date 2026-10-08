// Generated from node_modules/effect/dist/NonEmptyIterable.d.ts, example 0.
// SHA-256: 00fadc583bdc7f95b37bd3dab6e60af942dd5462474b51be63d0d6c9a67f09a1
const __compatObserved: unknown[] = []
import * as NonEmptyIterable from "effect/NonEmptyIterable"
import { Chunk } from "effect"

const [first, rest] = NonEmptyIterable.unprepend(Chunk.make(1, 2, 3))

__compatObserved.push(first)
__compatObserved.push(globalThis.Array.from({ [Symbol.iterator]: () => rest }))
console.log(JSON.stringify(__compatObserved))
