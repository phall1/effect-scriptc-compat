// Direct published-entrypoint variant of cases/error-cause.ts.
// Adapted from the installed effect@4.0.1 published declarations.
import * as Cause from "effect/Cause"
import { Effect, Option } from "effect"
const program = Effect.fail({ _tag: "CauseFailure" as const }).pipe(
  Effect.catchCause(cause => Effect.succeed(Option.map(Cause.findErrorOption(cause), error => error._tag)))
)
console.log(Option.getOrElse(Effect.runSync(program), () => "missing"))
