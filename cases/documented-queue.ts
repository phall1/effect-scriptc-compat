// Generated from node_modules/effect/dist/Queue.d.ts, example 0.
// SHA-256: af123df9ff8c226c6e61e7dd03156cc22bbc68a9475455b9385c20d83a731a1d
const __compatObserved: unknown[] = []
import * as Queue from "effect/Queue"
import { Effect } from "effect"

// Function that only needs write access to a queue
const producer = (enqueue: Queue.Enqueue<string>) =>
  Effect.gen(function*() {
    yield* Queue.offer(enqueue, "hello")
    yield* Queue.offerAll(enqueue, ["world", "!"])
  })

const program = Effect.gen(function*() {
  const queue = yield* Queue.bounded<string>(10)
  yield* producer(queue)
  return yield* Queue.takeAll(queue)
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
