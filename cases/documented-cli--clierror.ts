// Generated from node_modules/effect/dist/cli/CliError.d.ts, example 0.
// SHA-256: b7c53b192035aeba6701377bc919c4318cc54d17d4fe41b3e68e4c5f55866e19
const __compatObserved: unknown[] = []
import { Effect } from "effect"
import * as CliError from "effect/cli/CliError"

const error = new CliError.MissingOption({ option: "api-key" })
const program = CliError.isCliError(error)
  ? Effect.succeed(error.message)
  : Effect.fail("Unknown error")

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
