// Generated from node_modules/effect/dist/cli/Prompt.d.ts, example 1.
// SHA-256: 52a4a744030144c4a5c23e9c028adb2499c10200664625a5871ec82757e5bc66
const __compatObserved: unknown[] = []
import * as Prompt from "effect/cli/Prompt"

const language = Prompt.AutoComplete({
  message: "Choose a language",
  choices: [
    { title: "TypeScript", value: "ts" },
    { title: "Rust", value: "rs" },
    { title: "Kotlin", value: "kt" }
  ]
})

__compatObserved.push(Prompt.isPrompt(language))
console.log(JSON.stringify(__compatObserved))
