// Generated from node_modules/effect/dist/ai/LanguageModel.d.ts, example 0.
// SHA-256: 451911f5ef8a23a05156d5dbc26e260b79ab8bb6df1602d909a3b26852fd5b0b
const __compatObserved: unknown[] = []
import { Effect, Layer, Stream } from "effect"
import * as LanguageModel from "effect/ai/LanguageModel"

const FakeLanguageModel = Layer.effect(
  LanguageModel.LanguageModel,
  LanguageModel.make({
    generateText: () =>
      Effect.succeed([{
        type: "text",
        text: "Machine learning finds patterns in data."
      }]),
    streamText: () => Stream.empty
  })
)

const program = Effect.gen(function*() {
  const model = yield* LanguageModel.LanguageModel
  const response = yield* model.generateText({
    prompt: "What is machine learning?"
  })
  return response.text
})

__compatObserved.push(await Effect.runPromise(program.pipe(Effect.provide(FakeLanguageModel))))
console.log(JSON.stringify(__compatObserved))
