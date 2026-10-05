// Generated from node_modules/effect/dist/TxChunk.d.ts, example 0.
// SHA-256: d9ecb2e566f432b9dd26d48901e612ae2ebe1d8b34b2bb1e805b2edee1afdefa
const __compatObserved: unknown[] = []
import * as TxChunk from "effect/TxChunk"
import { Chunk, Effect } from "effect"

const program = Effect.gen(function*() {
  // Create a transactional chunk
  const txChunk: TxChunk.TxChunk<number> = yield* TxChunk.fromIterable([
    1,
    2,
    3
  ])

  // Single operations - no explicit transaction needed
  yield* TxChunk.append(txChunk, 4)
  const result = yield* TxChunk.get(txChunk)

  // Multi-step atomic operation - use explicit transaction
  yield* Effect.tx(
    Effect.gen(function*() {
      yield* TxChunk.prepend(txChunk, 0)
      yield* TxChunk.append(txChunk, 5)
    })
  )

  const finalResult = yield* TxChunk.get(txChunk)
  return [Chunk.toArray(result), Chunk.toArray(finalResult)]
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
