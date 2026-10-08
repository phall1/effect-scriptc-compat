// Generated from node_modules/effect/dist/RcRef.d.ts, example 0.
// SHA-256: 0579c355318732f5e1ad125569e3a4ab3a5f473cd11705ba67080db9d2a7f37c
const __compatObserved: unknown[] = []
import * as RcRef from "effect/RcRef"
import { Effect } from "effect"

const events: Array<string> = []

// Create an RcRef for a database connection
const createConnectionRef = (connectionString: string) =>
  RcRef.make({
    acquire: Effect.acquireRelease(
      Effect.succeed(`Connected to ${connectionString}`),
      (connection) => Effect.sync(() => events.push(`closed ${connection}`))
    )
  })

// Use the RcRef in multiple operations
const program = Effect.gen(function*() {
  const connectionRef = yield* createConnectionRef("postgres://localhost")

  // Multiple gets will share the same connection
  const connection1 = yield* RcRef.get(connectionRef)
  const connection2 = yield* RcRef.get(connectionRef)

  return [connection1 === connection2, events] as const
})

__compatObserved.push(await Effect.runPromise(Effect.scoped(program)))
console.log(JSON.stringify(__compatObserved))
