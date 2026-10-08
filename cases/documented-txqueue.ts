// Generated from node_modules/effect/dist/TxQueue.d.ts, example 1.
// SHA-256: acf7b145d6196ec7761ab713d0e0410033d59b2207af5a28685f0d042bdc5094
const __compatObserved: unknown[] = []
import * as TxQueue from "effect/TxQueue"
import { Effect } from "effect"
import type { Cause } from "effect"

const program = Effect.gen(function*() {
  // Queue without error channel
  const queue = yield* TxQueue.bounded<number>(10)
  const accepted = yield* TxQueue.offer(queue, 42)

  // Queue with error channel for completion signaling
  const faultTolerantQueue = yield* TxQueue.bounded<number, string>(10)
  yield* TxQueue.offerAll(faultTolerantQueue, [1, 2, 3])
  yield* TxQueue.fail(faultTolerantQueue, "processing complete")

  // Works with Done for clean completion
  const completableQueue = yield* TxQueue.bounded<
    string,
    Cause.Done
  >(5)
  yield* TxQueue.offer(completableQueue, "task")
  yield* TxQueue.end(completableQueue)

  return accepted
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
