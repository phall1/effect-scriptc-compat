// Generated from node_modules/effect/dist/Pull.d.ts, example 0.
// SHA-256: e119a9421f90330e4fc752a4c342949478a95ff1f2988283802f37a1811fa6c2
const __compatObserved: unknown[] = []
import * as Pull from "effect/Pull"
import { Cause, Effect } from "effect"

const pull = Cause.done("stream ended")

const result = Pull.matchEffect(pull, {
  onSuccess: (value) => Effect.succeed(`Got value: ${value}`),
  onFailure: (cause) => Effect.succeed(`Got error: ${cause}`),
  onDone: (leftover) => Effect.succeed(`Stream halted with: ${leftover}`)
})

__compatObserved.push(await Effect.runPromise(result))
console.log(JSON.stringify(__compatObserved))
