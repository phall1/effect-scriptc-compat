// Generated from node_modules/effect/dist/TxRef.d.ts, example 0.
// SHA-256: 3a7714d6e7bdf742de0b28149c56b38ca9eea3899cf741710ec583c1902808af
const __compatObserved: unknown[] = []
import * as TxRef from "effect/TxRef"
import { Effect } from "effect"

const program = Effect.gen(function*() {
  // Create a transactional reference
  const ref: TxRef.TxRef<number> = yield* TxRef.make(0)

  // Use within a transaction
  yield* Effect.tx(Effect.gen(function*() {
    const current = yield* TxRef.get(ref)
    yield* TxRef.set(ref, current + 1)
  }))

  return yield* TxRef.get(ref)
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
