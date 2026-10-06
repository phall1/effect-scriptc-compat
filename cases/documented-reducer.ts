// Generated from node_modules/effect/dist/Reducer.d.ts, example 0.
// SHA-256: f66a888acfb5fad5489717a94e65620d247d6788a7f1941771e80d05ed742cff
const __compatObserved: unknown[] = []
import * as Reducer from "effect/Reducer"

const Concat = Reducer.make<string>((a, b) => a + b, "")

__compatObserved.push(Concat.combineAll(["hello", " ", "world"]))
console.log(JSON.stringify(__compatObserved))
