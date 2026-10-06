// Generated from node_modules/effect/dist/FiberSet.d.ts, example 0.
// SHA-256: a794b64b88500cdd86c126deb74875694bc3cfc269654a49c7f6b38f32b7604e
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
