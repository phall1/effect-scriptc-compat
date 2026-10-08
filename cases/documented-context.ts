// Generated from node_modules/effect/dist/Context.d.ts, example 0.
// SHA-256: a95365f0513d3a86768c4b0d1c42b67a3a7c812d431595faa8103b51c66555e3
const __compatObserved: unknown[] = []
import * as Context from "effect/Context"

// Define an identifier for a database service
const Database = Context.Service<{ query: (sql: string) => string }>(
  "Database"
)

// The key can be used to store and retrieve services
const context = Context.make(Database, { query: (sql) => `Result: ${sql}` })
__compatObserved.push(Context.get(context, Database).query("SELECT 1"))
console.log(JSON.stringify(__compatObserved))
