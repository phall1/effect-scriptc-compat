// Adapted from the installed effect@4.0.1 published declarations.
import { Effect } from "effect"
const result = await Effect.runPromise(Effect.forEach([1, 2, 3], n => Effect.succeed(n * 2), { concurrency: 2 }))
console.log(`forEach:${result.join(",")}`)
