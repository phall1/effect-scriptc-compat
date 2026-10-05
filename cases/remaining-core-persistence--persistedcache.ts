// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as PersistedCache from "effect/persistence/PersistedCache"
import * as Persistable from "effect/persistence/Persistable"
import * as Persistence from "effect/persistence/Persistence"
import { Cache, Duration, Effect, Schema } from "effect"
import { TestClock } from "effect/testing"
class Lookup extends Persistable.Class<{payload: {id: string}}>()("Lookup", {primaryKey: p => p.id, success: Schema.Number}) {}
const request = new Lookup({id: "one"})
let lookups = 0
const program = Effect.scoped(Effect.gen(function*() {
  const cache = yield* PersistedCache.make((_: Lookup) => Effect.sync(() => ++lookups), {storeId: "fixture", timeToLive: () => Duration.infinity, inMemoryTTL: () => Duration.infinity})
  const first = yield* cache.get(request)
  yield* Cache.invalidate(cache.inMemory, request)
  const persisted = yield* cache.get(request)
  yield* cache.invalidate(request)
  const fresh = yield* cache.get(request)
  return [first, persisted, fresh, lookups]
})).pipe(Effect.provide(Persistence.layerMemory), Effect.provide(TestClock.layer()))
console.log(JSON.stringify(await Effect.runPromise(program)))
