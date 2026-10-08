// Generated from node_modules/effect/dist/JsonPointer.d.ts, example 0.
// SHA-256: ac58365c43d346b3b8d20e3ced776df061a2fad9807946ddb4c8d48697fc958a
const __compatObserved: unknown[] = []
import * as JsonPointer from "effect/JsonPointer"

__compatObserved.push(JsonPointer.escapeToken("a/b"))
__compatObserved.push(JsonPointer.escapeToken("c~d"))
__compatObserved.push(JsonPointer.escapeToken("path/to~key"))
console.log(JSON.stringify(__compatObserved))
