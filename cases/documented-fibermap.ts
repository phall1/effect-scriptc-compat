// Generated from node_modules/effect/dist/FiberMap.d.ts, example 0.
// SHA-256: d1617527e786d8dcff88ada042f7a3b9fd243bdf33caee66ab1ce0f80e51d490
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
