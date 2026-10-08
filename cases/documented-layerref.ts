// Generated from node_modules/effect/dist/LayerRef.d.ts, example 0.
// SHA-256: 87f0a3cecbcd62f19a706e841473a58becf9a9c8aad7466200030954c980fd62
const __compatObserved: unknown[] = []
import * as LayerRef from "effect/LayerRef"
import { Context, Effect, Layer } from "effect"

class Database extends Context.Service<Database, {
  readonly query: Effect.Effect<string>
}>()("Database") {}

const databaseLayer = Layer.succeed(Database, {
  query: Effect.succeed("result")
})

const query = Effect.gen(function*() {
  const database = yield* Database
  return yield* database.query
})

const program = Effect.scoped(
  Effect.gen(function*() {
    const ref = yield* LayerRef.make(databaseLayer, {
      idleTimeToLive: "5 seconds"
    })

    const result = yield* Effect.provide(query, ref.get)

    yield* ref.invalidate

    return result
  })
)

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
