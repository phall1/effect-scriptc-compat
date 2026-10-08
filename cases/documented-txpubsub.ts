// Generated from node_modules/effect/dist/TxPubSub.d.ts, example 0.
// SHA-256: 7b15d552c5f8c568c66c5a53ee8f7b88bbdbf89ead0e2938ccaa31f8c71bda3d
const __compatObserved: unknown[] = []
import * as TxPubSub from "effect/TxPubSub"
import { Effect, TxQueue } from "effect"

const program = Effect.gen(function*() {
  const hub = yield* TxPubSub.unbounded<string>()

  return yield* Effect.scoped(
    Effect.gen(function*() {
      const sub = yield* TxPubSub.subscribe(hub)
      yield* TxPubSub.publish(hub, "hello")
      return yield* TxQueue.take(sub)
    })
  )
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
