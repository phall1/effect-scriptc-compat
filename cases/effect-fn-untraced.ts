// Adapted from the installed effect@4.0.1 published declarations.
import { Effect } from "effect"
const double = Effect.fnUntraced(function*(value: number) {
  return yield* Effect.succeed(value * 2)
})
console.log(`fnUntraced:${Effect.runSync(double(21))}`)
