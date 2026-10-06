// Generated from node_modules/effect/dist/persistence/RateLimiter.d.ts, example 0.
// SHA-256: b3bb4c8a22b3d20aa4a3d2d10fd673cd070b7b3d22a0dd5747053abbc909a376
const __compatObserved: unknown[] = []
import { Effect, Layer } from "effect"
import * as RateLimiter from "effect/persistence/RateLimiter"

const messages: Array<string> = []
const program = Effect.gen(function*() {
  // Access the `withLimiter` function from the RateLimiter module
  const withLimiter = yield* RateLimiter.makeWithRateLimiter

  // Apply a rate limiter to an effect
  yield* Effect.sync(() => messages.push("Making a request with rate limiting")).pipe(
    withLimiter({
      key: "some-key",
      limit: 10,
      onExceeded: "delay",
      window: "5 seconds",
      algorithm: "fixed-window"
    })
  )
}).pipe(
  Effect.provide(RateLimiter.layer.pipe(Layer.provide(RateLimiter.layerStoreMemory)))
)

await Effect.runPromise(program)
__compatObserved.push(messages)
console.log(JSON.stringify(__compatObserved))
