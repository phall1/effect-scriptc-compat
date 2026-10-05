// Adapted from the installed effect@4.0.1 published declarations.
import { Effect } from "effect"
console.log(Effect.runSync(Effect.catch(Effect.fail({ _tag: "Caught" as const }), error => Effect.succeed(error._tag))))
