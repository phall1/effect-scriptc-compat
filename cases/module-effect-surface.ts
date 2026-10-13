// Published Effect examples. Each call is a documented one-liner with a fixed result.
import * as Effect from "effect/Effect"

const observed = [
  Effect.isEffect(Effect.succeed(1)),
  Effect.isEffect("hello"),
  Effect.runSyncExit(Effect.succeed(1)),
  Effect.runSyncExit(Effect.fail("my error")),
]
console.log(JSON.stringify(observed))
