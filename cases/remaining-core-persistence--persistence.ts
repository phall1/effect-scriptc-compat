// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as Persistence from "effect/persistence/Persistence"
import * as Persistable from "effect/persistence/Persistable"
import { Duration, Effect, Exit, Schema } from "effect"
import { TestClock } from "effect/testing"
class Lookup extends Persistable.Class<{payload: {id: string}}>()("Lookup", {primaryKey: p => p.id, success: Schema.Number}) {}
const request = new Lookup({id: "one"})
const program = Effect.scoped(Effect.gen(function*() {
  const store = yield* (yield* Persistence.Persistence).make({storeId: "fixture", timeToLive: () => Duration.infinity})
  const absent = (yield* store.get(request)) === undefined
  yield* store.set(request, Exit.succeed(42))
  const stored = yield* store.get(request)
  yield* store.remove(request)
  return [absent, stored && Exit.isSuccess(stored) ? stored.value : "unexpected", (yield* store.get(request)) === undefined]
})).pipe(Effect.provide(Persistence.layerMemory), Effect.provide(TestClock.layer()))
console.log(JSON.stringify(await Effect.runPromise(program)))
