// Adapted from the installed effect@4.0.1 published declarations.
import { Effect, Schema } from "effect"
const program = Schema.decodeUnknownEffect(Schema.Number)("invalid").pipe(
  Effect.catch(error => Effect.succeed(error._tag))
)
console.log(await Effect.runPromise(program))
