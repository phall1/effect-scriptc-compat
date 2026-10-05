// Adapted from the installed effect@4.0.1 published declarations.
import { Effect } from "effect"
const program = Effect.never.pipe(Effect.timeout(0), Effect.catch(error => Effect.succeed(error._tag)))
console.log(await Effect.runPromise(program))
