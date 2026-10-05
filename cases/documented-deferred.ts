// Generated from node_modules/effect/dist/Deferred.d.ts, example 0.
// SHA-256: d12e03fe6a9d0b096b162ac7a0d67ea7674d5983754bc1273b191050f995f734
const __compatObserved: unknown[] = []
import * as Deferred from "effect/Deferred"
import { Effect, Fiber } from "effect"

const program = Effect.gen(function*() {
  const deferred: Deferred.Deferred<string> = yield* Deferred.make<string>()
  const producer = yield* Effect.forkChild(
    Effect.gen(function*() {
      yield* Deferred.succeed(deferred, "Hello, World!")
    })
  )

  const consumer = yield* Effect.forkChild(Deferred.await(deferred))
  yield* Fiber.join(producer)
  return yield* Fiber.join(consumer)
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
