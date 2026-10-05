// Adapted from the installed effect@4.0.1 published declarations.
import { Effect, Stream } from "effect"
const result = Stream.fromIterable([1, 2, 3]).pipe(
  Stream.mapEffect(n => n === 2 ? Effect.fail({ _tag: "ElementFailure" as const }) : Effect.succeed(n)),
  Stream.runCollect,
  Effect.catch(error => Effect.succeed(error._tag))
)
console.log(await Effect.runPromise(result))
