// Published Function examples. Each call is a documented one-liner with a fixed result.
import * as Function from "effect/Function"

const observed = [
  Function.constTrue(),
  Function.constFalse(),
  Function.constNull(),
  Function.constUndefined(),
  Function.constVoid(),
  Function.SK(0, "hello"),
]
console.log(JSON.stringify(observed))
