// Generated from node_modules/effect/dist/ai/IdGenerator.d.ts, example 0.
// SHA-256: 8072363ebe47f0fb4095897195aa4842d8eecf1f941a05bbe068a4c88af22f4e
const __compatObserved: unknown[] = []
import { Effect } from "effect"
import * as IdGenerator from "effect/ai/IdGenerator"

const useIdGenerator = Effect.gen(function*() {
  const idGenerator = yield* IdGenerator.IdGenerator
  const newId = yield* idGenerator.generateId()
  return newId
})

const program = useIdGenerator.pipe(
  Effect.provideService(IdGenerator.IdGenerator, {
    generateId: () => Effect.succeed("id-1")
  })
)
__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
