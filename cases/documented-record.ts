// Generated from node_modules/effect/dist/Record.d.ts, example 5.
// SHA-256: 54d7906581efd26405ce63da1222e2b5a42e15dc3dde2dccbdf654a1a1c07fb3
const __compatObserved: unknown[] = []
import * as Record from "effect/Record"

// Create an empty record
const emptyRecord = Record.empty<string, number>()
__compatObserved.push(emptyRecord)

// The type ensures type safety for future operations
__compatObserved.push(Record.set(emptyRecord, "count", 42))
console.log(JSON.stringify(__compatObserved))
