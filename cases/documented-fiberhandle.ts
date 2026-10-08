// Generated from node_modules/effect/dist/FiberHandle.d.ts, example 0.
// SHA-256: 1eea47f89caa01cefac7647dae56d786dca11cfc202ba5bbb903fd9a36977c9f
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
