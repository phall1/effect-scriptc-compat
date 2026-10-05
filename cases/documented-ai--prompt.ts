// Generated from node_modules/effect/dist/ai/Prompt.d.ts, example 1.
// SHA-256: 9798677e2712511379b262bc30723ecbcc86698ceb373820114b69075623dd41
const __compatObserved: unknown[] = []
import * as Prompt from "effect/ai/Prompt"

const textPart: Prompt.TextPart = Prompt.makePart("text", {
  text: "Hello, how can I help you today?"
})
__compatObserved.push(textPart.text)
console.log(JSON.stringify(__compatObserved))
