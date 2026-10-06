// Generated from node_modules/effect/dist/TxDeferred.d.ts, example 0.
// SHA-256: 8625b52b991d154ca0e97f45a56106014770b7d7b7a4f4db587e20edee18ad52
const __compatObserved: unknown[] = []
import * as TxDeferred from "effect/TxDeferred"
import { Effect } from "effect"

const program = Effect.gen(function*() {
  const deferred = yield* TxDeferred.make<number>()

  // Complete the deferred
  const first = yield* TxDeferred.succeed(deferred, 42)

  // Second write is a no-op
  const second = yield* TxDeferred.succeed(deferred, 99)

  // Read the value
  const value = yield* TxDeferred.await(deferred)
  return [first, second, value]
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
