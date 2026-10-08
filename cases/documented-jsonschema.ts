// Generated from node_modules/effect/dist/JsonSchema.d.ts, example 0.
// SHA-256: 0789e45a54de7c5d0b0da2a92932ed00b5e7ffb6c6c8635f2fa891179a61aa5c
const __compatObserved: unknown[] = []
import * as JsonSchema from "effect/JsonSchema"

const raw: JsonSchema.JsonSchema = {
  type: "string",
  $defs: { Trimmed: { type: "string", minLength: 1 } }
}

const doc = JsonSchema.fromSchemaDraft2020_12(raw)

__compatObserved.push(doc.dialect)
__compatObserved.push(doc.schema)
__compatObserved.push(doc.definitions)
console.log(JSON.stringify(__compatObserved))
