// Generated from node_modules/effect/dist/LayerMap.d.ts, example 0.
// SHA-256: b28d754be202cd92ac9b0f62145148688ebde921a223607d46fce99ddff458a3
const __compatObserved: unknown[] = []
import * as LayerMap from "effect/LayerMap"
import { Context, Effect, Layer } from "effect"

// Define a service key
const DatabaseService = Context.Service<{
  readonly query: (sql: string) => Effect.Effect<string>
}>("Database")

// Create a LayerMap that provides different database configurations
const createDatabaseLayerMap = LayerMap.make((env: string) =>
  Layer.succeed(DatabaseService)({
    query: Effect.fn("DatabaseService.query")((sql) => Effect.succeed(`${env}: ${sql}`))
  })
)

// Use the LayerMap
const program = Effect.gen(function*() {
  const layerMap = yield* createDatabaseLayerMap

  // Get a layer for a specific environment
  const development = yield* Effect.provide(
    DatabaseService.use((database) => database.query("SELECT 1")),
    layerMap.get("development")
  )

  // Get context directly
  const productionContext = yield* layerMap.contextEffect("production")
  const production = yield* Context.get(productionContext, DatabaseService).query("SELECT 1")

  // Invalidate a cached layer
  yield* layerMap.invalidate("development")

  return { development, production }
})

__compatObserved.push(await Effect.runPromise(Effect.scoped(program)))
console.log(JSON.stringify(__compatObserved))
