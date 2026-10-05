// Generated from node_modules/effect/dist/PubSub.d.ts, example 0.
// SHA-256: 54e132614bd61acffef2e4c02ad7aa760cf6ddc8af95e5bc007ae40096bd793f
const __compatObserved: unknown[] = []
import * as PubSub from "effect/PubSub"
import { Effect } from "effect"

const program = Effect.scoped(Effect.gen(function*() {
  // Create a bounded PubSub with capacity 10
  const pubsub = yield* PubSub.bounded<string>(10)

  // Subscribe and consume messages
  const subscription = yield* PubSub.subscribe(pubsub)

  // Publish messages
  yield* PubSub.publish(pubsub, "Hello")
  yield* PubSub.publish(pubsub, "World")

  const message1 = yield* PubSub.take(subscription)
  const message2 = yield* PubSub.take(subscription)
  return [message1, message2]
}))

const actual = await Effect.runPromise(program)
__compatObserved.push(actual)
console.log(JSON.stringify(__compatObserved))
