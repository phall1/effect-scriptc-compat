// Adapted from the installed effect@4.0.1 published declarations.
import { Effect } from "effect"
console.log(Effect.runSync(Effect.succeed(21).pipe(Effect.map(n => `runSync:${n * 2}`))))
