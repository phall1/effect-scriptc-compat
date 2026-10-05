// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as Terminal from "effect/Terminal"
import { Effect } from "effect"
const cancelled = new Terminal.QuitError()
const recovered = Effect.fail(cancelled).pipe(Effect.catch(error => Effect.succeed([error._tag, Terminal.isQuitError(error), Terminal.isQuitError({})])))
console.log(JSON.stringify(Effect.runSync(recovered)))
