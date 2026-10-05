// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as SqlStream from "effect/sql/SqlStream"
import { Effect, Stream } from "effect"
const stream = SqlStream.asyncPauseResume<number>(emit => Effect.sync(() => {
  emit.single(1)
  emit.array([2, 3])
  emit.end()
  return {onPause() {}, onResume() {}}
}), 16)
console.log(JSON.stringify(await Effect.runPromise(Stream.runCollect(stream))))
