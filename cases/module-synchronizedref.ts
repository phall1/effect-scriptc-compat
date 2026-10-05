// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as SynchronizedRef from "effect/SynchronizedRef"
import { Effect } from "effect"
const program = Effect.gen(function*() {
  const ref = yield* SynchronizedRef.make(21)
  yield* SynchronizedRef.updateEffect(ref, n => Effect.succeed(n * 2))
  return yield* SynchronizedRef.get(ref)
})
console.log(`synchronizedRef:${await Effect.runPromise(program)}`)
