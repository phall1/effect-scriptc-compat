// Generated from node_modules/effect/dist/ErrorReporter.d.ts, example 0.
// SHA-256: 1758646019744ceed25239d7af2aee55488fbd913f0f393d98dc96850daf0f31
const __compatObserved: unknown[] = []
import * as ErrorReporter from "effect/ErrorReporter"
import { Effect } from "effect"

const reports: Array<{ message: string; severity: string; attributes: object }> = []
const reporter = ErrorReporter.make(({ error, severity, attributes }) => {
  reports.push({ message: error.message, severity, attributes })
})

const program = Effect.fail(new Error("boom")).pipe(
  Effect.withErrorReporting,
  Effect.provide(ErrorReporter.layer([reporter])),
  Effect.exit
)

await Effect.runPromise(program)
__compatObserved.push(reports)
console.log(JSON.stringify(__compatObserved))
