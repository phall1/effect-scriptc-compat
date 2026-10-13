// The published repository runs against an in-memory Connection. No database driver is opened.
import { Effect, Schema, Stream } from "effect"
import { Reactivity } from "effect/reactivity"
import { Model } from "effect/schema"
import { SqlClient, Statement } from "effect/sql"
import type { SqlConnection } from "effect/sql"
import * as SqlModel from "effect/sql/SqlModel"

class Item extends Model.Class<Item>("FixtureItem")({
  id: Schema.Number,
  name: Schema.String
}) {}

const statements: string[] = []
const connection: SqlConnection.Connection = {
  execute(sql, params) {
    statements.push(sql)
    if (sql.startsWith("insert ")) return Effect.succeed([{ id: params[0], name: params[1] }])
    if (sql.startsWith("select ")) return Effect.succeed([{ id: 1, name: "fixture" }])
    return Effect.succeed([])
  },
  executeRaw() {
    return Effect.succeed([])
  },
  executeStream() {
    return Stream.empty
  },
  executeValues() {
    return Effect.succeed([])
  },
  executeValuesUnprepared() {
    return Effect.succeed([])
  },
  executeUnprepared() {
    return Effect.succeed([])
  }
}

const program = Effect.gen(function*() {
  const sql = yield* SqlClient.make({
    acquirer: Effect.succeed(connection),
    compiler: Statement.makeCompilerSqlite(),
    spanAttributes: []
  })
  const repository = yield* SqlModel.makeRepository(Item, {
    tableName: "items",
    idColumn: "id",
    spanPrefix: "fixture"
  }).pipe(Effect.provideService(SqlClient.SqlClient, sql))
  const inserted = yield* repository.insert({ id: 1, name: "fixture" })
  const found = yield* repository.findById(1)
  yield* repository.delete(1)
  return [inserted, found, statements]
}).pipe(Effect.provide(Reactivity.layer), Effect.withTracerEnabled(false))

console.log(JSON.stringify(Effect.runSync(program)))
