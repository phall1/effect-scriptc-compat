// Generated from node_modules/effect/dist/TxSubscriptionRef.d.ts, example 0.
// SHA-256: f1f421a07529e51794f3ab46b326bdd6eaf35143510cd080f3c03df014a1772f
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
