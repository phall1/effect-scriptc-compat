// Direct published-entrypoint variant of cases/chunk-round-trip.ts.
// Adapted from the installed effect@4.0.1 published declarations.
import * as Chunk from "effect/Chunk"
console.log(`chunk:${Chunk.toArray(Chunk.map(Chunk.fromIterable([1, 2, 3]), n => n * 2)).join(",")}`)
