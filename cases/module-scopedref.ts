// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as ScopedRef from "effect/ScopedRef"
import { Effect } from "effect"
const program = Effect.scoped(Effect.gen(function*() {
  const ref = yield* ScopedRef.make(() => 1)
  yield* ScopedRef.set(ref, Effect.succeed(42))
  return yield* ScopedRef.get(ref)
}))
console.log(`scopedRef:${await Effect.runPromise(program)}`)
