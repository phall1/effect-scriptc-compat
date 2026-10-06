// Generated from node_modules/effect/dist/Data.d.ts, example 0.
// SHA-256: dfe2804d3cea8c8bd2661819cb2ce0afbb092335eb27e6b28a8edb0ee2da1a4f
const __compatObserved: unknown[] = []
import * as Data from "effect/Data"
import { Equal } from "effect"

class Person extends Data.Class<{ readonly name: string }> {}

__compatObserved.push(Equal.equals(new Person({ name: "Mike" }), new Person({ name: "Mike" })))
console.log(JSON.stringify(__compatObserved))
