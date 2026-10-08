// Generated from node_modules/effect/dist/TxDeferred.d.ts, example 0.
// SHA-256: fd649a78d5be93e70abc9335e9e7dc9f885735867aab19b90e64800c8031040d
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
