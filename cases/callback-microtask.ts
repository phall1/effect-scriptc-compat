// Adapted from the installed effect@4.0.1 published declarations.
import { Effect } from "effect"
const program = Effect.callback<string>(resume => {
  queueMicrotask(() => resume(Effect.succeed("callback:ok")))
})
console.log(await Effect.runPromise(program))
