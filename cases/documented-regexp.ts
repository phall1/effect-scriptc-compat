// Generated from node_modules/effect/dist/RegExp.d.ts, example 0.
// SHA-256: 8d1dafb3a78f4ea2798c6df13992bf255d20a9c76a7e56540a3f16619532e72a
const __compatObserved: unknown[] = []
import * as RegExp from "effect/RegExp"

const pattern = new RegExp.RegExp("hello", "i")
__compatObserved.push(pattern)
__compatObserved.push(pattern.test("Hello World"))
__compatObserved.push(pattern.test("goodbye"))
console.log(JSON.stringify(__compatObserved))
