// Generated from node_modules/effect/dist/FiberMap.d.ts, example 0.
// SHA-256: 7e189a5cb88ad52e65c0fb7fa8bbe0904f8d7e33747f9a7abf694dcce0101b37
const __compatObserved: unknown[] = []
import * as FiberMap from "effect/FiberMap"
import { Effect } from "effect"

// Create a FiberMap with string keys
const program = Effect.gen(function*() {
  const map = yield* FiberMap.make<string>()

  // Add some fibers to the map
  yield* FiberMap.run(map, "task1", Effect.never)
  yield* FiberMap.run(map, "task2", Effect.never)

  // Get the size of the map
  return yield* FiberMap.size(map)
})

const actual = await Effect.runPromise(Effect.scoped(program))
__compatObserved.push(actual)
console.log(JSON.stringify(__compatObserved))
