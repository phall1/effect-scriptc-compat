// Adapted from the installed effect@4.0.1 published declarations.
import { Effect, Schedule } from "effect"
let attempt = 0
const task = Effect.suspend(() => { attempt++; return Effect.fail({ _tag: "RetryExhausted" as const }) })
const program = Effect.retry(task, Schedule.recurs(2)).pipe(Effect.catch(error => Effect.succeed(`${error._tag}:${attempt}`)))
console.log(await Effect.runPromise(program))
