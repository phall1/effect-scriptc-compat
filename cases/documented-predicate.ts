// Generated from node_modules/effect/dist/Predicate.d.ts, example 10.
// SHA-256: bc712433e89e58d36bdc447227e7500854fda77f378410875c0cb8e9803b10c2
const __compatObserved: unknown[] = []
import * as Predicate from "effect/Predicate"

const isLongerThan2 = Predicate.mapInput((s: string) => s.length)(
  (n: number) => n > 2
)

__compatObserved.push(isLongerThan2("hello"))
console.log(JSON.stringify(__compatObserved))
