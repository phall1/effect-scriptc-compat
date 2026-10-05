// Generated from node_modules/effect/dist/NonEmptyIterable.d.ts, example 0.
// SHA-256: d30faebd3c50f7865091782066772e7f7465dbc5f67832afefc988f7b75d1b82
const __compatObserved: unknown[] = []
import * as NonEmptyIterable from "effect/NonEmptyIterable"
import { Chunk } from "effect"

const [first, rest] = NonEmptyIterable.unprepend(Chunk.make(1, 2, 3))

__compatObserved.push(first)
__compatObserved.push(globalThis.Array.from({ [Symbol.iterator]: () => rest }))
console.log(JSON.stringify(__compatObserved))
