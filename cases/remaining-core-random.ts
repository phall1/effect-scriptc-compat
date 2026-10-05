// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as Random from "effect/Random"
import { Effect } from "effect"
const empty: number[] = []
const result = Random.choice(empty).pipe(Effect.catch(error => Effect.succeed([error._tag, error.message])))
console.log(JSON.stringify(Effect.runSync(result)))
