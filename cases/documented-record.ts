// Generated from node_modules/effect/dist/Record.d.ts, example 5.
// SHA-256: 0671a4762dd5606f1866785fce5d6ed0406157d54f98f556927606a4ea9f8428
const __compatObserved: unknown[] = []
import * as Record from "effect/Record"

// Create an empty record
const emptyRecord = Record.empty<string, number>()
__compatObserved.push(emptyRecord)

// The type ensures type safety for future operations
__compatObserved.push(Record.set(emptyRecord, "count", 42))
console.log(JSON.stringify(__compatObserved))
