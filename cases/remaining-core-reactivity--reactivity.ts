// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as Reactivity from "effect/reactivity/Reactivity"
import { Effect } from "effect"
const program = Effect.gen(function*() {
  const reactive = yield* Reactivity.make
  let calls = 0
  const unregister = reactive.registerUnsafe(["items"], () => { calls++ })
  yield* reactive.invalidate(["other"])
  yield* reactive.mutation(["items"], Effect.succeed(1))
  yield* reactive.withBatch(Effect.gen(function*() {
    yield* reactive.invalidate(["items"])
    yield* reactive.invalidate(["items"])
  }))
  const before = calls
  unregister()
  yield* reactive.invalidate(["items"])
  return [before, calls]
})
console.log(JSON.stringify(Effect.runSync(program)))
