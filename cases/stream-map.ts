// Adapted from the installed effect@4.0.1 published declarations.
import { Effect, Stream } from "effect"
const result = await Effect.runPromise(Stream.fromIterable([1, 2, 3]).pipe(Stream.map(n => n * 2), Stream.runCollect))
console.log(`stream.map:${Array.from(result).join(",")}`)
