// Generated from node_modules/effect/dist/SchemaRepresentation.d.ts, example 1.
// SHA-256: 2d4173f7c91435f6cdc96ca71585ae58742c64bfa981f71c94c013850700bbc1
const __compatObserved: unknown[] = []
import * as SchemaRepresentation from "effect/SchemaRepresentation"
import { Schema } from "effect"

const document = SchemaRepresentation.toRepresentation(Schema.Struct({ name: Schema.String }).ast)
const persisted = SchemaRepresentation.toJson(document)
const restored = SchemaRepresentation.fromJson(persisted)
const schema = SchemaRepresentation.fromRepresentation(restored, { revivers: [] })
const Person = Schema.make<Schema.Codec<{ readonly name: string }>>(schema.ast)

__compatObserved.push(Schema.decodeUnknownSync(Person)({ name: "Ada" }))
console.log(JSON.stringify(__compatObserved))
