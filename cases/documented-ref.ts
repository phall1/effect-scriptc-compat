// Generated from node_modules/effect/dist/Ref.d.ts, example 0.
// SHA-256: cb8ab988cc5f9c9649e191511e0f672ea154523cca86cb99c09c0c72fcab6261
const __compatObserved: unknown[] = []
import * as Ref from "effect/Ref"
import { Effect } from "effect"

const program = Effect.gen(function*() {
  const counter = yield* Ref.make(0)
  const value = yield* Ref.get(counter)
  yield* Ref.update(counter, (n) => n + 1)
  const newValue = yield* Ref.get(counter)
  return [value, newValue]
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
