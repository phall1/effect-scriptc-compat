// Generated from node_modules/effect/dist/JsonPointer.d.ts, example 0.
// SHA-256: 3eb3b0501cfebc202b082c1fe614e42c2a4514ed374f67002968fa2deb18f5e2
const __compatObserved: unknown[] = []
import * as JsonPointer from "effect/JsonPointer"

__compatObserved.push(JsonPointer.escapeToken("a/b"))
__compatObserved.push(JsonPointer.escapeToken("c~d"))
__compatObserved.push(JsonPointer.escapeToken("path/to~key"))
console.log(JSON.stringify(__compatObserved))
