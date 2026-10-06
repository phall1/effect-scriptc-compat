// Generated from node_modules/effect/dist/Combiner.d.ts, example 0.
// SHA-256: 98034f3c137df14454b79f662596ef7c97783edc876df396c97a6bcf4786948f
const __compatObserved: unknown[] = []
import * as Combiner from "effect/Combiner"

const Sum = Combiner.make<number>((self, that) => self + that)

__compatObserved.push(Sum.combine(3, 4))
console.log(JSON.stringify(__compatObserved))
