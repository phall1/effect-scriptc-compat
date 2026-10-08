// Generated from node_modules/effect/dist/Reducer.d.ts, example 0.
// SHA-256: 1e2ceb148c0cdede7ed50463fae03f51b199ab3e7b769c343a74c568759c3510
const __compatObserved: unknown[] = []
import * as Reducer from "effect/Reducer"

const Concat = Reducer.make<string>((a, b) => a + b, "")

__compatObserved.push(Concat.combineAll(["hello", " ", "world"]))
console.log(JSON.stringify(__compatObserved))
