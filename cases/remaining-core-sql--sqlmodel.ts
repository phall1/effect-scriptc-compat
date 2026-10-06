// Repository request validation occurs before acquiring any SQL driver connection.
import * as SqlModel from "effect/sql/SqlModel"
import { SqlClient, Statement } from "effect/sql"
import { Model } from "effect/schema"
import { Reactivity } from "effect/reactivity"
import { Effect, Schema } from "effect"
class Item extends Model.Class<Item>("FixtureItem")({id: Schema.Number.check(Schema.isGreaterThan(0)), name: Schema.String}) {}
const program = Effect.gen(function*() {
  const sql = yield* SqlClient.make({acquirer: Effect.die("Unexpected database acquisition"), compiler: Statement.makeCompilerSqlite(), spanAttributes: []})
  const repository = yield* SqlModel.makeRepository(Item, {tableName: "items", idColumn: "id", spanPrefix: "fixture"}).pipe(Effect.provideService(SqlClient.SqlClient, sql))
  return yield* repository.findById(-1).pipe(Effect.catch(error => Effect.succeed([error._tag, Schema.isSchemaError(error)])))
}).pipe(Effect.provide(Reactivity.layer), Effect.withTracerEnabled(false))
console.log(JSON.stringify(Effect.runSync(program)))
