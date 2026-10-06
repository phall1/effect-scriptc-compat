// Adapted from the installed effect@4.0.1 published declarations.
import { Context, Effect, Layer } from "effect"
class Value extends Context.Service<Value, { readonly value: number }>()("Value") {}
const layer = Layer.succeed(Value, { value: 42 })
const program = Effect.gen(function*() { return `layer.succeed:${(yield* Value).value}` })
console.log(Effect.runSync(Effect.provide(program, layer)))
