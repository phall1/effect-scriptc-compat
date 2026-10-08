// Generated from node_modules/effect/dist/Equivalence.d.ts, example 3.
// SHA-256: 635fd78303b202bd1ecea48b4b0b74e241dc969f490116667b43c6cb46707fa0
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
