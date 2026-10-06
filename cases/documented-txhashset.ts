// Generated from node_modules/effect/dist/TxHashSet.d.ts, example 19.
// SHA-256: d3cd3bb5c7c3931aa3545ed940a358e30a26ec93bf2707d54fb2cd3f14d5a25e
const __compatObserved: unknown[] = []
import * as TxHashSet from "effect/TxHashSet"
import { Effect } from "effect"

const program = Effect.gen(function*() {
  const empty = yield* TxHashSet.empty<string>()
  const emptyResult = yield* TxHashSet.isNonEmpty(empty)

  const nonEmpty = yield* TxHashSet.make("a")
  const nonEmptyResult = yield* TxHashSet.isNonEmpty(nonEmpty)
  return [emptyResult, nonEmptyResult] as const
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
