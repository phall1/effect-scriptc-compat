// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import "effect/schema/SchemaJITCompiler/enable"
import { Schema } from "effect"
const item = Schema.Struct({id: Schema.Number, label: Schema.String})
const decode = Schema.decodeUnknownSync(item)
console.log(JSON.stringify([decode({id: 1, label: "compiled", ignored: true}), Schema.is(item)({id: "bad", label: "bad"})]))
