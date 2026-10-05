// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as SchemaCompiler from "effect/schema/SchemaCompiler"
import { Effect, Schema, SchemaParser } from "effect"
const schema = Schema.Struct({value: Schema.Number})
const interpreted = SchemaParser.decodeUnknownEffect(schema)
Effect.runSync(interpreted({value: 0}))
SchemaCompiler.set(schema.ast, {decodeEffect: interpreted})
console.log(JSON.stringify([SchemaParser.decodeUnknownSync(schema)({value: 7, ignored: true}), SchemaParser.is(schema)({value: "bad"})]))
