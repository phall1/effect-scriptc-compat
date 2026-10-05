// Adapted from the installed effect@4.0.1 published declarations.
import { Effect } from "effect"
console.log(Effect.runSync(Effect.orElseSucceed(Effect.fail({ _tag: "Fallback" as const }), error => error._tag)))
