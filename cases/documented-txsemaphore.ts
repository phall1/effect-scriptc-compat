// Generated from node_modules/effect/dist/TxSemaphore.d.ts, example 0.
// SHA-256: 87d3b41f6fd28e7722fe0b250a86ea6bbc68fa08b08ab13051bf89cd4eca170a
const __compatObserved: unknown[] = []
import * as TxSemaphore from "effect/TxSemaphore"
import { Effect } from "effect"

// Create a semaphore with 3 permits for managing concurrent database connections
const program = Effect.gen(function*() {
  const dbSemaphore = yield* TxSemaphore.make(3)

  // Acquire a permit before accessing the database
  yield* TxSemaphore.acquire(dbSemaphore)
  const acquired = yield* TxSemaphore.available(dbSemaphore)

  // Perform database operations...

  // Release the permit when done
  yield* TxSemaphore.release(dbSemaphore)
  const released = yield* TxSemaphore.available(dbSemaphore)
  return [acquired, released] as const
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
