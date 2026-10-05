// Generated from node_modules/effect/dist/TxPriorityQueue.d.ts, example 0.
// SHA-256: 440002da7feecd676c12aca48dfc4bcd0038dc64182d018e463ce6ff53f71eb0
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
