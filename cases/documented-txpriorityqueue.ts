// Generated from node_modules/effect/dist/TxPriorityQueue.d.ts, example 0.
// SHA-256: ab7c11709880d9691065702c1ca7cba42683ef9d7d2180227ada17c732296244
const __compatObserved: unknown[] = []
import * as TxPriorityQueue from "effect/TxPriorityQueue"
import { Effect, Order } from "effect"

const program = Effect.gen(function*() {
  const pq = yield* TxPriorityQueue.empty<number>(Order.Number)
  yield* TxPriorityQueue.offer(pq, 3)
  yield* TxPriorityQueue.offer(pq, 1)
  yield* TxPriorityQueue.offer(pq, 2)
  return yield* TxPriorityQueue.take(pq)
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
