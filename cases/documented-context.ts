// Generated from node_modules/effect/dist/Context.d.ts, example 0.
// SHA-256: 91de255cf418741849f2813a6c76dc9948c5dfa8f0986a3eee6e910dfec3961a
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
