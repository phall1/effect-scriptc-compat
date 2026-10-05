// Generated from node_modules/effect/dist/ai/Chat.d.ts, example 1.
// SHA-256: 35f4b7a203b6c2bac65376b4db2fc4152c6b7d21ac57329a9ef466c978e7e2bf
const __compatObserved: unknown[] = []
import { Effect, Ref } from "effect"
import * as Chat from "effect/ai/Chat"

const inspectHistory = Effect.gen(function*() {
  const chat = yield* Chat.fromPrompt("Hello")
  const currentHistory = yield* Ref.get(chat.history)
  return currentHistory.content.length
})

__compatObserved.push(await Effect.runPromise(inspectHistory))
console.log(JSON.stringify(__compatObserved))
