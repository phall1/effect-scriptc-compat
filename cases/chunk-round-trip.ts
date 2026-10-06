// Adapted from the installed effect@4.0.1 published declarations.
import { Chunk } from "effect"
console.log(`chunk:${Chunk.toArray(Chunk.map(Chunk.fromIterable([1, 2, 3]), n => n * 2)).join(",")}`)
