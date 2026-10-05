// Adapted from the installed effect@4.0.1 published declarations.
import { Effect, Schema } from "effect"
console.log(`encode:${await Effect.runPromise(Schema.encodeEffect(Schema.NumberFromString)(42))}`)
