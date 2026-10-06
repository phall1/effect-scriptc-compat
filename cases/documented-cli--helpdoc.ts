// Generated from node_modules/effect/dist/cli/HelpDoc.d.ts, example 0.
// SHA-256: 4ceac187f0b4b6c8eb2ce2c402aafe8e8b2fb13ee4cfc9a2b03242cc740663c4
const __compatObserved: unknown[] = []
import { Context, Option as O } from "effect"
import type { HelpDoc } from "effect/cli"

const deployCommandHelp: HelpDoc.HelpDoc = {
  description: "Deploy your application to the cloud",
  usage: "myapp deploy [options] <target>",
  annotations: Context.empty(),
  flags: [
    {
      name: "verbose",
      aliases: ["-v"],
      type: "boolean",
      description: O.some("Enable verbose logging"),
      required: false
    },
    {
      name: "env",
      aliases: ["-e"],
      type: "string",
      description: O.some("Target environment"),
      required: true
    }
  ],
  args: [
    {
      name: "target",
      type: "string",
      description: O.some("Deployment target (e.g., 'production', 'staging')"),
      required: true,
      variadic: false
    }
  ]
}

__compatObserved.push(deployCommandHelp.usage)
console.log(JSON.stringify(__compatObserved))
