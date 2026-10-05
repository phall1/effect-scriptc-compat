// Generated from node_modules/effect/dist/Pool.d.ts, example 0.
// SHA-256: 37e9c2efc9ec01ecc12e6676a0425e0a226b374d9666cfbd54ab919a62f431d8
const __compatObserved: unknown[] = []
import * as Pool from "effect/Pool"
import { Duration, Effect } from "effect"

interface Connection {
  readonly execute: (sql: string) => Effect.Effect<ReadonlyArray<string>>
  readonly close: Effect.Effect<void>
}

const acquireDBConnection = Effect.acquireRelease(
  Effect.succeed({
    execute: (sql) => Effect.succeed([`executed: ${sql}`]),
    close: Effect.void
  } satisfies Connection),
  (connection) => connection.close
)

const program = Effect.scoped(
  Effect.flatMap(
    Pool.makeWithTTL({
      acquire: acquireDBConnection,
      min: 10,
      max: 20,
      timeToLive: Duration.seconds(60)
    }),
    (pool) => Effect.flatMap(Pool.get(pool), (connection) => connection.execute("select 1"))
  )
)

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
