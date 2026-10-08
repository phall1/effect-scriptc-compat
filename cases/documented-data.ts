// Generated from node_modules/effect/dist/Data.d.ts, example 0.
// SHA-256: 05d36be2286c1514b5da58ca7422f92c284145750839cffbebb78199257b6cfa
const __compatObserved: unknown[] = []
import * as Data from "effect/Data"
import { Equal } from "effect"

class Person extends Data.Class<{ readonly name: string }> {}

__compatObserved.push(Equal.equals(new Person({ name: "Mike" }), new Person({ name: "Mike" })))
console.log(JSON.stringify(__compatObserved))
