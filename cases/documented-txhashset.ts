// Generated from node_modules/effect/dist/TxHashSet.d.ts, example 19.
// SHA-256: 5c8e094ad279a21b1ed590e4e9c69d3a0e6510075c21a17f92e558c6cf665df7
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
