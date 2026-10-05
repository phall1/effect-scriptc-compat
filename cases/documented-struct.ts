// Generated from node_modules/effect/dist/Struct.d.ts, example 3.
// SHA-256: d48a8e6b6c8cb7b6b99f533ca7393896e66d8a53c2f27bbec276eb6b7468984c
const __compatObserved: unknown[] = []
import * as Struct from "effect/Struct"
import { pipe } from "effect"

__compatObserved.push(pipe({ name: "Alice", age: 30 }, Struct.get("name")))
console.log(JSON.stringify(__compatObserved))
