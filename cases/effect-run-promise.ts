// Adapted from the installed effect@4.0.1 published declarations.
import { Effect } from "effect"
console.log(await Effect.runPromise(Effect.succeed("runPromise:42")))
