// Generated from node_modules/effect/dist/cli/Command.d.ts, example 17.
// SHA-256: aca593d1d374ad3c935194c0c0084d48e73b2aa0de488803c58cba1c1d088aa3
const __compatObserved: unknown[] = []
import * as Command from "effect/cli/Command"

// `experimental` still runs when invoked as `mycli experimental`,
// but it does not appear under SUBCOMMANDS in `mycli --help`.
const experimental = Command.make("experimental").pipe(
  Command.unlisted
)

const root = Command.make("mycli").pipe(
  Command.withSubcommands([experimental])
)

__compatObserved.push(root.subcommands[0].commands[0].unlisted)
console.log(JSON.stringify(__compatObserved))
