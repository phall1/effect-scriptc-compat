// Generated from node_modules/effect/dist/ErrorReporter.d.ts, example 0.
// SHA-256: 92e89914be5f78fbedf4d40a0b2f6a5bedda004a7706603d4aa144e029532d61
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
