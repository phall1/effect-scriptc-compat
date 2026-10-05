// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as EventLogServerUnencrypted from "effect/eventlog/EventLogServerUnencrypted"
import { StoreId } from "effect/eventlog/EventLogMessage"
import { Effect, Schema } from "effect"
const allowed = Schema.decodeUnknownSync(StoreId)("main")
const missing = Schema.decodeUnknownSync(StoreId)("other")
const program = Effect.gen(function*() {
  const mapping = yield* EventLogServerUnencrypted.StoreMapping
  const found = yield* mapping.hasStore({publicKey: "fixture", storeId: allowed})
  const resolved = yield* mapping.resolve({publicKey: "fixture", storeId: allowed})
  const failed = yield* mapping.resolve({publicKey: "fixture", storeId: missing}).pipe(Effect.catch(error => Effect.succeed([error._tag, error.reason])))
  return [found, resolved, failed]
}).pipe(Effect.provide(EventLogServerUnencrypted.layerStoreMappingStatic({storeId: allowed})))
console.log(JSON.stringify(Effect.runSync(program)))
