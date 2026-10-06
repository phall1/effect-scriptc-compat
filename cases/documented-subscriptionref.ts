// Generated from node_modules/effect/dist/SubscriptionRef.d.ts, example 0.
// SHA-256: 4823df1a54e889d87063665273b2013794ad8733002491d8e5284d7a968da147
const __compatObserved: unknown[] = []
import * as SubscriptionRef from "effect/SubscriptionRef"
import { Deferred, Effect, Fiber, Stream } from "effect"

const program = Effect.gen(function*() {
  const ref = yield* SubscriptionRef.make(0)
  const ready = yield* Deferred.make<void>()

  const fiber = yield* SubscriptionRef.changes(ref).pipe(
    Stream.tap(() => Deferred.succeed(ready, void 0)),
    Stream.take(3),
    Stream.runCollect,
    Effect.forkChild
  )

  yield* Deferred.await(ready)
  yield* SubscriptionRef.set(ref, 1)
  yield* SubscriptionRef.set(ref, 2)

  const values = yield* Fiber.join(fiber)
  return Array.from(values)
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
