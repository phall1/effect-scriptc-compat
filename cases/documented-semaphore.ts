// Generated from node_modules/effect/dist/Semaphore.d.ts, example 0.
// SHA-256: b808373f04d5f3dd72043f063c23c91e33104ef47811980c592a8f762cf5e442
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
