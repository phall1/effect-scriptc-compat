// Generated from node_modules/effect/dist/SchemaIssue.d.ts, example 0.
// SHA-256: 0ca2e64bed333dbdeeae13a9269071b27648108772ccc99d761dc69e717e623e
const __compatObserved: unknown[] = []
import * as SchemaIssue from "effect/SchemaIssue"

const issue = new SchemaIssue.MissingKey(undefined)
__compatObserved.push(SchemaIssue.isIssue(issue))
__compatObserved.push(SchemaIssue.isIssue("not an issue"))
console.log(JSON.stringify(__compatObserved))
