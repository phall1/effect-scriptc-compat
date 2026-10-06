// Adapted from the installed effect@4.0.1 published declarations.
import { Context, Effect, Layer } from "effect"
const Value = Context.Service<{ readonly value: number }>("Value")
const program = Effect.gen(function*() { return `provide:${(yield* Value).value}` })
console.log(Effect.runSync(Effect.provide(program, Layer.succeed(Value, { value: 42 }))))
