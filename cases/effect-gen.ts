// Adapted from the installed effect@4.0.1 published declarations.
import { Effect } from "effect"
const program = Effect.gen(function*() {
  const a = yield* Effect.succeed(20)
  const b = yield* Effect.succeed(22)
  return `gen:${a + b}`
})
console.log(Effect.runSync(program))
