// Deterministic public API probe derived from installed effect@4.0.1 declarations.
import * as VariantSchema from "effect/schema/VariantSchema"
import { Schema } from "effect"
const variants = VariantSchema.make({variants: ["read", "write"], defaultVariant: "read"})
const secret = variants.FieldOnly(["write"])(Schema.String)
const value = variants.Struct({id: Schema.Number, secret})
const read = Schema.decodeUnknownSync(variants.extract(value, "read"))({id: 1, secret: "hidden"})
const write = Schema.decodeUnknownSync(variants.extract(value, "write"))({id: 2, secret: "visible"})
console.log(JSON.stringify([VariantSchema.isStruct(value), VariantSchema.isField(secret), read, write]))
