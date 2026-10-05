// Generated from node_modules/effect/dist/Predicate.d.ts, example 10.
// SHA-256: 4db6129fc99fa29e43c347d53b03f03c91a5c5e840db03c9cd7bb42ee34bbafd
const __compatObserved: unknown[] = []
import * as Predicate from "effect/Predicate"

const isLongerThan2 = Predicate.mapInput((s: string) => s.length)(
  (n: number) => n > 2
)

__compatObserved.push(isLongerThan2("hello"))
console.log(JSON.stringify(__compatObserved))
