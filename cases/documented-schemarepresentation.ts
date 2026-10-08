// Generated from node_modules/effect/dist/SchemaRepresentation.d.ts, example 1.
// SHA-256: 0a1bbde2392ac7724443c7332316cb4ccc7694405e70eefee01165e65a447615
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
