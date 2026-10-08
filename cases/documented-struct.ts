// Generated from node_modules/effect/dist/Struct.d.ts, example 3.
// SHA-256: 8964f822ef38ae5e5a5d9112b58a73a56914f445af5993d19175e50d5799e372
const __compatObserved: unknown[] = []
import * as Struct from "effect/Struct"
import { pipe } from "effect"

__compatObserved.push(pipe({ name: "Alice", age: 30 }, Struct.get("name")))
console.log(JSON.stringify(__compatObserved))
