// Direct published-entrypoint variant of cases/retry-success.ts.
// Adapted from the installed effect@4.0.1 published declarations.
import * as Schedule from "effect/Schedule"
import { Effect } from "effect"
let attempt = 0
const task = Effect.suspend(() => ++attempt < 3 ? Effect.fail({ _tag: "RetryFailure" as const }) : Effect.succeed(attempt))
console.log(`retry:${await Effect.runPromise(Effect.retry(task, Schedule.recurs(3)))}`)
