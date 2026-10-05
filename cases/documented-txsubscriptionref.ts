// Generated from node_modules/effect/dist/TxSubscriptionRef.d.ts, example 0.
// SHA-256: 78e482c2578af62b57777ea8270fbcb211d46dc62acbec9eeabb5ad91ac455f2
const __compatObserved: unknown[] = []
import * as TxSubscriptionRef from "effect/TxSubscriptionRef"
import { Effect, TxQueue } from "effect"

const program = Effect.gen(function*() {
  const ref = yield* TxSubscriptionRef.make(0)

  return yield* Effect.scoped(
    Effect.gen(function*() {
      const sub = yield* TxSubscriptionRef.changes(ref)
      const initial = yield* TxQueue.take(sub)

      yield* TxSubscriptionRef.set(ref, 1)
      const next = yield* TxQueue.take(sub)
      return [initial, next]
    })
  )
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
