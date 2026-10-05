// Generated from node_modules/effect/dist/ai/Tokenizer.d.ts, example 0.
// SHA-256: 9486e97ba3cfb856ec57d8536b7e9e4a7a3187490010759aaf7b3e7d3a2e87f3
const __compatObserved: unknown[] = []
import { Effect } from "effect"
import * as Tokenizer from "effect/ai/Tokenizer"

const useTokenizer = Effect.gen(function*() {
  const tokenizer = yield* Tokenizer.Tokenizer
  const tokens = yield* tokenizer.tokenize("Hello, world!")
  return tokens.length
})

const tokenizer = Tokenizer.make({
  tokenize: (prompt) => Effect.succeed(prompt.content.map((_, index) => index))
})
const result = useTokenizer.pipe(Effect.provideService(Tokenizer.Tokenizer, tokenizer))
__compatObserved.push(await Effect.runPromise(result))
console.log(JSON.stringify(__compatObserved))
