// Direct published-entrypoint variant of cases/fiber-interrupt.ts.
// Adapted from the installed effect@4.0.1 published declarations.
import * as Fiber from "effect/Fiber"
import { Effect } from "effect"
const program = Effect.gen(function*() {
  const fiber = yield* Effect.forkChild(Effect.never)
  yield* Fiber.interrupt(fiber)
  return "interrupt:ok"
})
console.log(await Effect.runPromise(program))
