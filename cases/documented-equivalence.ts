// Generated from node_modules/effect/dist/Equivalence.d.ts, example 3.
// SHA-256: 186fdadd3c630ca1e5406fedad4ea7ea815d62999a0d7d4ca1f8d3c01e7e3973
const __compatObserved: unknown[] = []
import * as Equivalence from "effect/Equivalence"

const caseInsensitive = Equivalence.make<string>((a, b) =>
  a.toLowerCase() === b.toLowerCase()
)

__compatObserved.push(caseInsensitive("Hello", "HELLO"))
__compatObserved.push(caseInsensitive("foo", "bar"))

// Same reference optimization
const str = "test"
__compatObserved.push(caseInsensitive(str, str))
console.log(JSON.stringify(__compatObserved))
