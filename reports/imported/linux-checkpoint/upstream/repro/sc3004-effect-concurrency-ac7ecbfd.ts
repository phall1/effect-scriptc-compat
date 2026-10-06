import { Effect } from "effect"
const result = await Effect.runPromise(Effect.all([
  Effect.succeed(1), Effect.succeed(2), Effect.succeed(3)
], { concurrency: 2 }))
console.log(`all:${result.join(",")}`)
