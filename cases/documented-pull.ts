// Generated from node_modules/effect/dist/Pull.d.ts, example 0.
// SHA-256: 0e96e768cb021f2ddc6eba96350cae9842c4b40d13cdb0071d4716c99ae07679
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
