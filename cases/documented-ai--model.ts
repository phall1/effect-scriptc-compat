// Generated from node_modules/effect/dist/ai/Model.d.ts, example 0.
// SHA-256: cc62a8c90d5afa78a42fecc179fdc38d72c63db3883db307618d612474c3b49a
const __compatObserved: unknown[] = []
import { Effect, Layer } from "effect"
import * as Model from "effect/ai/Model"

const model = Model.make("amazon-bedrock", "claude-3-5-haiku", Layer.empty)
const program = Effect.gen(function*() {
  const provider = yield* Model.ProviderName
  const modelName = yield* Model.ModelName
  return { provider, modelName }
}).pipe(Effect.provide(model))

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
