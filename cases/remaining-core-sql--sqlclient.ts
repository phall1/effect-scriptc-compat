// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as SqlClient from "effect/sql/SqlClient"
import { Statement } from "effect/sql"
import { Reactivity } from "effect/reactivity"
import { Effect } from "effect"
const program = Effect.gen(function*() {
  const sql = yield* SqlClient.make({acquirer: Effect.die("Unexpected connection acquisition"), compiler: Statement.makeCompilerSqlite(), spanAttributes: []})
  const statement = sql`SELECT ${sql("name")} FROM ${sql("items")} WHERE id = ${7}`
  return [statement.compile(), sql.safe === sql, sql.withoutTransforms().unsafe("SELECT ?", [3]).compile()]
}).pipe(Effect.provide(Reactivity.layer))
console.log(JSON.stringify(Effect.runSync(program)))
