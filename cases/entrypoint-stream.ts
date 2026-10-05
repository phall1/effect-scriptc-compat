// Direct published-entrypoint variant of cases/stream-from-iterable.ts.
// Adapted from the installed effect@4.0.1 published declarations.
import * as Stream from "effect/Stream"
import { Effect } from "effect"
const result = await Effect.runPromise(Stream.runCollect(Stream.fromIterable([1, 2, 3])))
console.log(`stream:${Array.from(result).join(",")}`)
