// Generated from node_modules/effect/dist/JsonSchema.d.ts, example 0.
// SHA-256: b628d2c2d97f5a2ef889a3382b93dca59c51d34ad17e1d489833ceab0eccee5c
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
