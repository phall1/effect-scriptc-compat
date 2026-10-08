// Generated from node_modules/effect/dist/FiberSet.d.ts, example 0.
// SHA-256: 53405b4c00442a934332d3032b190e06eb2273d83a6516c6406c828a540b6280
const __compatObserved: unknown[] = []
import * as FiberSet from "effect/FiberSet"
import { Effect } from "effect"

const program = Effect.gen(function*() {
  const set = yield* FiberSet.make<string, string>()

  // Add fibers to the set
  yield* FiberSet.run(set, Effect.succeed("hello"))
  yield* FiberSet.run(set, Effect.succeed("world"))

  // Wait for all fibers to complete
  yield* FiberSet.awaitEmpty(set)
  return yield* FiberSet.size(set)
})

const actual = await Effect.runPromise(Effect.scoped(program))
__compatObserved.push(actual)
console.log(JSON.stringify(__compatObserved))
