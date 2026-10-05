// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as Persistable from "effect/persistence/Persistable"
import { Effect, Exit, PrimaryKey, Schema } from "effect"
class Lookup extends Persistable.Class<{payload: {id: string}}>()("Lookup", {primaryKey: p => p.id, success: Schema.Number, error: Schema.String}) {}
const request = new Lookup({id: "one"})
const program = Effect.gen(function*() {
  const encoded = yield* Persistable.serializeExit(request, Exit.succeed(42))
  const decoded = yield* Persistable.deserializeExit(request, encoded)
  const failure = yield* Persistable.deserializeExit(request, yield* Persistable.serializeExit(request, Exit.fail("missing")))
  return [PrimaryKey.value(request), encoded, Exit.isSuccess(decoded) ? decoded.value : "unexpected", failure._tag]
})
console.log(JSON.stringify(Effect.runSync(program)))
