// Generated from node_modules/effect/dist/Combiner.d.ts, example 0.
// SHA-256: ce1b8c0f87a0404512f967d4b1e89d8442c765c4407d7904ed1ea7467d89034a
const __compatObserved: unknown[] = []
import * as Combiner from "effect/Combiner"

const Sum = Combiner.make<number>((self, that) => self + that)

__compatObserved.push(Sum.combine(3, 4))
console.log(JSON.stringify(__compatObserved))
