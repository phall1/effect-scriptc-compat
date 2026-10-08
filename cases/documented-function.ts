// Generated from node_modules/effect/dist/Function.d.ts, example 1.
// SHA-256: f3acae8510da25c4e941bd85506eaaf945ac58b78e803ffc5b5f4b56b7757c7e
const __compatObserved: unknown[] = []
import * as Function from "effect/Function"
import { pipe } from "effect"

const sum = Function.dual<
  (that: number) => (self: number) => number,
  (self: number, that: number) => number
>(2, (self, that) => self + that)

__compatObserved.push(sum(2, 3))
__compatObserved.push(pipe(2, sum(3)))
console.log(JSON.stringify(__compatObserved))
