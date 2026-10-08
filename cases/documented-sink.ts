// Generated from node_modules/effect/dist/Sink.d.ts, example 0.
// SHA-256: d33695861881890dffc57f8252cca6dc7dfd3552fd193d543eaad0ca23cf8e64
const __compatObserved: unknown[] = []
import * as Sink from "effect/Sink"
import { Effect, Stream } from "effect"

// Create a simple sink that always succeeds with a value
const sink: Sink.Sink<number> = Sink.succeed(42)

// Use the sink to consume a stream
const stream = Stream.make(1, 2, 3)
__compatObserved.push(await Effect.runPromise(Stream.run(stream, sink)))
console.log(JSON.stringify(__compatObserved))
