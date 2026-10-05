// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as Resource from "effect/Resource"
import { Effect } from "effect"
let version = 0
const program = Effect.scoped(Effect.gen(function*() {
  const resource = yield* Resource.manual(Effect.sync(() => ++version))
  const first = yield* Resource.get(resource)
  yield* Resource.refresh(resource)
  const second = yield* Resource.get(resource)
  return `resource:${first},${second}`
}))
console.log(await Effect.runPromise(program))
