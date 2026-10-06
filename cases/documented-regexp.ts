// Generated from node_modules/effect/dist/RegExp.d.ts, example 0.
// SHA-256: 764d803bd2755e629af51f94c2cbdba197135bdfce34ed3a3864bb398c5143b7
const __compatObserved: unknown[] = []
import * as RegExp from "effect/RegExp"

const pattern = new RegExp.RegExp("hello", "i")
__compatObserved.push(pattern)
__compatObserved.push(pattern.test("Hello World"))
__compatObserved.push(pattern.test("goodbye"))
console.log(JSON.stringify(__compatObserved))
