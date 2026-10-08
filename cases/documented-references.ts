// Generated from node_modules/effect/dist/References.d.ts, example 0.
// SHA-256: cac5c56dbbcbdaf43e942c04db29399234dce2819d5763380598a11aff7dc0f8
const __compatObserved: unknown[] = []
import * as References from "effect/References"
import { Effect } from "effect"

const logAnnotationExample = Effect.gen(function*() {
  // Get current annotations (empty by default)
  const current = yield* References.CurrentLogAnnotations
  const defaultCount = Object.keys(current).length

  // Run with custom log annotations
  const custom = yield* Effect.provideService(
    Effect.gen(function*() {
      const annotations = yield* References.CurrentLogAnnotations
      return [annotations.requestId, annotations.userId, annotations.version]
    }),
    References.CurrentLogAnnotations,
    {
      requestId: "req-123",
      userId: "user-456",
      version: "1.0.0"
    }
  )

  // Run with extended annotations
  const extended = yield* Effect.provideService(
    Effect.gen(function*() {
      const annotations = yield* References.CurrentLogAnnotations
      return [annotations.operation, annotations.timestamp]
    }),
    References.CurrentLogAnnotations,
    {
      requestId: "req-123",
      userId: "user-456",
      version: "1.0.0",
      operation: "data-sync",
      timestamp: 1234567890
    }
  )

  return [defaultCount, custom, extended]
})

__compatObserved.push(await Effect.runPromise(logAnnotationExample))
console.log(JSON.stringify(__compatObserved))
