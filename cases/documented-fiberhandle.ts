// Generated from node_modules/effect/dist/FiberHandle.d.ts, example 0.
// SHA-256: f2670b517fef69d5ee230119c9837008199be4922069dd6ba05ae36b07a866a3
const __compatObserved: unknown[] = []
import * as FiberHandle from "effect/FiberHandle"
import { Effect, Fiber } from "effect"

const program = Effect.gen(function*() {
  // Create a FiberHandle that can hold fibers producing strings
  const handle = yield* FiberHandle.make<string, never>()

  // The handle can store and manage a single fiber
  const fiber = yield* FiberHandle.run(handle, Effect.succeed("hello"))
  return yield* Fiber.join(fiber)
})

const actual = await Effect.runPromise(Effect.scoped(program))
__compatObserved.push(actual)
console.log(JSON.stringify(__compatObserved))
