// Generated from node_modules/effect/dist/Scope.d.ts, example 0.
// SHA-256: edcd8e79c5bed3038b53f7146332caec7a2fd1765760b74e46545f808fcc0474
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
