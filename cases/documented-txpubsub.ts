// Generated from node_modules/effect/dist/TxPubSub.d.ts, example 0.
// SHA-256: 5970817e7103d95f38581423f915d968aa67da3d1227e31bcdc797991910a3ef
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
