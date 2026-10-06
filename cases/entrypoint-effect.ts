// Direct published-entrypoint variant of cases/effect-succeed.ts.
// Adapted from the installed effect@4.0.1 published declarations.
import * as Effect from "effect/Effect"
console.log(Effect.runSync(Effect.succeed("succeed:42")))
