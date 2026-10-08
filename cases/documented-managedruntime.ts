// Generated from node_modules/effect/dist/ManagedRuntime.d.ts, example 0.
// SHA-256: dfb0a1eef59a8ccb9f87555abb8db0819c6c13cdb4089082c24b238d61b60473
const __compatObserved: unknown[] = []
import * as ManagedRuntime from "effect/ManagedRuntime"
import { Context, Effect, Layer } from "effect"

const notifications: Array<string> = []

class Notifications extends Context.Service<Notifications, {
  readonly notify: (message: string) => Effect.Effect<void>
}>()("Notifications") {
  static readonly layer = Layer.succeed(this)({
    notify: Effect.fn("Notifications.notify")((message) =>
      Effect.sync(() => notifications.push(message))
    )
  })
}

const runtime = ManagedRuntime.make(Notifications.layer)

const program = Effect.flatMap(
  Notifications,
  (_) => _.notify("Hello, world!")
).pipe(Effect.ensuring(runtime.disposeEffect))

await runtime.runPromise(program)
__compatObserved.push(notifications)
console.log(JSON.stringify(__compatObserved))
