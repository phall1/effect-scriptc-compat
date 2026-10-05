// Generated from node_modules/effect/dist/Latch.d.ts, example 0.
// SHA-256: 41f97a043cfd5e183878adbbd2af2758b55491ed124d89436396d07b431fec41
const __compatObserved: unknown[] = []
import * as Latch from "effect/Latch"
import { Effect, Fiber } from "effect"

// Create and use a latch for coordination between fibers
const program = Effect.gen(function*() {
  const latch = yield* Latch.make()
  const waiter = yield* Effect.forkChild(latch.await.pipe(Effect.as("opened")))
  yield* latch.open
  return yield* Fiber.join(waiter)
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
