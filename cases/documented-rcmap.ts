// Generated from node_modules/effect/dist/RcMap.d.ts, example 0.
// SHA-256: afcbe81535128f1616c07b4afaddce9cb703c19148b6ed5774c14402c65cac9a
const __compatObserved: unknown[] = []
import * as RcMap from "effect/RcMap"
import { Effect } from "effect"

const program = Effect.gen(function*() {
  // Create an RcMap that manages database connections
  const dbConnectionMap = yield* RcMap.make({
    lookup: (dbName: string) =>
      Effect.acquireRelease(Effect.succeed(`Connection to ${dbName}`), () => Effect.void),
    capacity: 10,
    idleTimeToLive: "5 minutes"
  })

  // The RcMap interface provides access to:
  // - lookup: Function to acquire resources
  // - capacity: Maximum number of resources
  // - idleTimeToLive: Time before idle resources are released
  // - state: Current state of the map

  return dbConnectionMap.capacity
})

__compatObserved.push(await Effect.runPromise(Effect.scoped(program)))
console.log(JSON.stringify(__compatObserved))
