// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as Utils from "effect/rpc/Utils"
import { Deferred, Effect, Fiber } from "effect"
interface Buffered {
  readonly run: (write: (value: number) => Effect.Effect<void>) => Effect.Effect<never>
  readonly write: (value: number) => Effect.Effect<void>
}
const program = Effect.scoped(Effect.gen(function*() {
  const output: number[] = []
  const received = yield* Deferred.make<void>()
  const buffered = yield* Utils.withRun<Buffered>()(write => Effect.succeed({write}))
  yield* buffered.write(1)
  yield* buffered.write(2)
  const fiber = yield* buffered.run(value => Effect.sync(() => { output.push(value) }).pipe(Effect.andThen(value === 2 ? Deferred.succeed(received, undefined) : Effect.void))).pipe(Effect.forkScoped({startImmediately: true}))
  yield* Deferred.await(received)
  yield* buffered.write(3)
  yield* Fiber.interrupt(fiber)
  yield* buffered.write(4)
  return output
}))
console.log(JSON.stringify(await Effect.runPromise(program)))
