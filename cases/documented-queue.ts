// Generated from node_modules/effect/dist/Queue.d.ts, example 0.
// SHA-256: 20978db7b79c84c066c63fc5133f849c1bcbe2139bea5cd84d6ef5e6fbd4453a
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
