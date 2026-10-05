// Generated from node_modules/effect/dist/cli/CliOutput.d.ts, example 0.
// SHA-256: 148356f724485c7f41bf8e758d4b8165f52d8cfc93a217125e0c105bdfb17eff
const __compatObserved: unknown[] = []
import { Effect } from "effect"
import * as CliOutput from "effect/cli/CliOutput"

// Create a custom formatter implementation
const customFormatter: CliOutput.Formatter = {
  formatHelpDoc: (doc) => `Custom Help: ${doc.usage}`,
  formatCliError: (error) => `Error: ${error.message}`,
  formatError: (error) => `[ERROR] ${error.message}`,
  formatVersion: (name, version) => `${name} (${version})`,
  formatErrors: (errors) => errors.map((error) => error.message).join("\\n")
}

// Use the custom formatter in a program
const program = Effect.gen(function*() {
  const formatter = yield* CliOutput.Formatter
  return formatter.formatVersion("myapp", "1.0.0")
}).pipe(
  Effect.provide(CliOutput.layer(customFormatter))
)

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
