// Adapted from the installed effect@4.0.1 published declarations.
import { Effect } from "effect"
const program = Effect.fail({ _tag: "ExpectedFailure" as const }).pipe(
  Effect.catch(error => Effect.succeed(error._tag))
)
console.log(Effect.runSync(program))
