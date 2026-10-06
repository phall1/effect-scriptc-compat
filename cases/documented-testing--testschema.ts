// Generated from node_modules/effect/dist/testing/TestSchema.d.ts, example 0.
// SHA-256: 1d61064a4fde7a7519cd450dd37d5b463c0622a5cba69d39f90fba89a3507613
const __compatObserved: unknown[] = []
import { Schema } from "effect"
import * as TestSchema from "effect/testing/TestSchema"

const schema = Schema.Struct({ name: Schema.String })
const asserts = new TestSchema.Asserts(schema)

// decoding
__compatObserved.push(await asserts.decoding().succeed({ name: "Alice" }))

// encoding
__compatObserved.push(await asserts.encoding().succeed({ name: "Alice" }))
console.log(JSON.stringify(__compatObserved))
