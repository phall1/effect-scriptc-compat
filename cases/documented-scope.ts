// Generated from node_modules/effect/dist/Scope.d.ts, example 0.
// SHA-256: 388a5c527ab6bf676056498ee2669507c70bd3a1f9a72ab95543ba9d7dd82835
const __compatObserved: unknown[] = []
import * as Scope from "effect/Scope"
import { Effect, Exit } from "effect"

const program = Effect.gen(function*() {
  const scope = yield* Scope.make("sequential")

  const initial = [scope.strategy, scope.state._tag]
  yield* Scope.close(scope, Exit.void)
  return [initial, scope.state._tag]
})

__compatObserved.push(Effect.runSync(program))
console.log(JSON.stringify(__compatObserved))
