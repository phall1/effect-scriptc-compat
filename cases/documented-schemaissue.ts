// Generated from node_modules/effect/dist/SchemaIssue.d.ts, example 0.
// SHA-256: 9098144358e2dff4b90c0ca0c603f53577cbf8cef336a32b4df775991639cd34
const __compatObserved: unknown[] = []
import * as SchemaIssue from "effect/SchemaIssue"

const issue = new SchemaIssue.MissingKey(undefined)
__compatObserved.push(SchemaIssue.isIssue(issue))
__compatObserved.push(SchemaIssue.isIssue("not an issue"))
console.log(JSON.stringify(__compatObserved))
