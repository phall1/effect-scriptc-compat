// Generated from node_modules/effect/dist/Ref.d.ts, example 0.
// SHA-256: 2be52bec055168edd150d2fdf8a64aa46d24a4e2055dde45b3cf744d388fad9a
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
