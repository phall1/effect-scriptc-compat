// Direct published-entrypoint variant of cases/schema-decode.ts.
// Adapted from the installed effect@4.0.1 published declarations.
import * as Schema from "effect/Schema"
import { Effect } from "effect"
const Value = Schema.Struct({ value: Schema.Number })
const decoded = await Effect.runPromise(Schema.decodeUnknownEffect(Value)({ value: 42 }))
console.log(`decode:${decoded.value}`)
