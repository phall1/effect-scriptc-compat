// Generated from node_modules/effect/dist/Semaphore.d.ts, example 0.
// SHA-256: 2a83efb61275a87eb068dc81ecd4156306b01425408720f2bf79b511ba5cad1e
const __compatObserved: unknown[] = []
import * as Semaphore from "effect/Semaphore"
import { Effect } from "effect"

// Create and use a semaphore for controlling concurrent access
const program = Effect.gen(function*() {
  const semaphore = yield* Semaphore.make(2)

  return yield* semaphore.withPermits(1)(
    Effect.succeed("Resource accessed")
  )
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
