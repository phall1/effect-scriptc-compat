// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as SchemaParser from "effect/SchemaParser"
import { Schema } from "effect"
console.log(`schemaParser:${SchemaParser.decodeUnknownSync(Schema.NumberFromString)("42")}`)
