// Generated from node_modules/effect/dist/ai/Toolkit.d.ts, example 0.
// SHA-256: 725ca7f4ec20a7f099a44cfd0b4bfba7b0778e5dd8074d6666ed39be2997c9fb
const __compatObserved: unknown[] = []
import { Effect, Schema } from "effect"
import * as Toolkit from "effect/ai/Toolkit"
import { Tool } from "effect/ai"

const SearchDocs = Tool.make("SearchDocs", {
  description: "Search project documentation",
  parameters: Schema.Struct({ query: Schema.String }),
  success: Schema.Array(Schema.String)
})

const SummarizeText = Tool.make("SummarizeText", {
  description: "Summarize text",
  parameters: Schema.Struct({ text: Schema.String }),
  success: Schema.String
})

const AiToolkit = Toolkit.make(SearchDocs, SummarizeText)

const ready = AiToolkit.pipe(Effect.provide(AiToolkit.toLayer({
  SearchDocs: ({ query }) => Effect.succeed([query]),
  SummarizeText: ({ text }) => Effect.succeed(text)
})))

__compatObserved.push(Object.keys((await Effect.runPromise(ready)).tools))
console.log(JSON.stringify(__compatObserved))
