// Direct published-entrypoint variant of cases/layer-succeed.ts.
// Adapted from the installed effect@4.0.1 published declarations.
import * as Layer from "effect/Layer"
import { Context, Effect } from "effect"
class Value extends Context.Service<Value, { readonly value: number }>()("Value") {}
const layer = Layer.succeed(Value, { value: 42 })
const program = Effect.gen(function*() { return `layer.succeed:${(yield* Value).value}` })
console.log(Effect.runSync(Effect.provide(program, layer)))
