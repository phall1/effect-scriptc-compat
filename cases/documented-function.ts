// Generated from node_modules/effect/dist/Function.d.ts, example 1.
// SHA-256: b4bc459b681edb3382564e649e73c29696b1983b651b6104a76a9cc3050a89e1
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
