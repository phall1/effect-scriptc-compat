// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as SqlResolver from "effect/sql/SqlResolver"
import { Effect, Schema } from "effect"
const batches: number[][] = []
const resolver = SqlResolver.ordered({Request: Schema.Number, Result: Schema.Number, execute: requests => Effect.sync(() => {batches.push(requests); return requests.map(value => value * 2)})})
const program = Effect.all([SqlResolver.request(2, resolver), SqlResolver.request(3, resolver)], {concurrency: "unbounded"}).pipe(Effect.map(values => [values, batches]))
console.log(JSON.stringify(await Effect.runPromise(program)))
