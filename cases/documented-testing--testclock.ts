// Generated from node_modules/effect/dist/testing/TestClock.d.ts, example 5.
// SHA-256: cb19125bab7b5fa50c7adf5259206bca4b572646cb4e8258225c52389954c7d0
const __compatObserved: unknown[] = []
import { Effect } from "effect"
import * as TestClock from "effect/testing/TestClock"

// Create a TestClock layer
const testClockLayer = TestClock.layer()

// Create a TestClock layer with custom options
const customTestClockLayer = TestClock.layer({
  warningDelay: "5 seconds"
})

const program = Effect.gen(function*() {
  // Use the layer in your program
  yield* TestClock.adjust("1 hour")
  return yield* TestClock.testClockWith((testClock) =>
    Effect.succeed(testClock.currentTimeMillisUnsafe())
  )
})

__compatObserved.push(await Effect.runPromise(Effect.provide(program, testClockLayer)))
__compatObserved.push(await Effect.runPromise(Effect.provide(program, customTestClockLayer)))
console.log(JSON.stringify(__compatObserved))
