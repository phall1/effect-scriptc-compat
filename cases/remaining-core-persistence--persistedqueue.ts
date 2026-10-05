// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as PersistedQueue from "effect/persistence/PersistedQueue"
import { Effect, Layer, Schema } from "effect"
import { TestClock } from "effect/testing"
const layer = PersistedQueue.layer.pipe(Layer.provide(PersistedQueue.layerStoreMemory))
const program = Effect.gen(function*() {
  const queue = yield* PersistedQueue.make({name: "fixture", schema: Schema.String})
  yield* queue.offer("first", {id: "one"})
  yield* queue.offer("ignored duplicate", {id: "one"})
  yield* queue.offer("second", {id: "two"})
  const first = yield* queue.take((value, metadata) => Effect.succeed([value, metadata.id, metadata.attempts]))
  const second = yield* queue.take((value, metadata) => Effect.succeed([value, metadata.id, metadata.attempts]))
  return [first, second]
}).pipe(Effect.provide(layer), Effect.provide(TestClock.layer()))
console.log(JSON.stringify(await Effect.runPromise(program)))
