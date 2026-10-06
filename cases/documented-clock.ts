// Generated from node_modules/effect/dist/Clock.d.ts, example 1.
// SHA-256: 5f4b52959650f11b3ab82a82c5931b67366131f27b0558b418e813eb88bbee3f
const __compatObserved: unknown[] = []
import * as Clock from "effect/Clock"
import { Effect } from "effect"

const testClock: Clock.Clock = {
  currentTimeMillisUnsafe: () => 1_000,
  currentTimeMillis: Effect.succeed(1_000),
  monotonicTimeNanosUnsafe: () => 1_000_000_000n,
  monotonicTimeNanos: Effect.succeed(1_000_000_000n),
  currentTimeNanosUnsafe: () => 1_000_000_000n,
  currentTimeNanos: Effect.succeed(1_000_000_000n),
  sleep: () => Effect.void
}

const program = Effect.gen(function*() {
  const clock = yield* Clock.Clock
  return clock.currentTimeMillisUnsafe()
})

__compatObserved.push(await Effect.runPromise(Effect.provideService(program, Clock.Clock, testClock)))
console.log(JSON.stringify(__compatObserved))
