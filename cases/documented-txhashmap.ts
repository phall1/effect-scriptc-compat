// Generated from node_modules/effect/dist/TxHashMap.d.ts, example 0.
// SHA-256: 6928b86d731d37b365b99dd94788835b6eddfeeaef7bf6e9a64d6942bc0e555e
const __compatObserved: unknown[] = []
import * as TxHashMap from "effect/TxHashMap"
import { Effect, Option } from "effect"

const program = Effect.gen(function*() {
  // Create a transactional hash map
  const txMap = yield* TxHashMap.make(["user1", "Alice"], ["user2", "Bob"])

  // Single operations are automatically transactional
  yield* TxHashMap.set(txMap, "user3", "Charlie")
  yield* TxHashMap.get(txMap, "user1") // => Option.some("Alice")

  // Multi-step atomic operations
  yield* Effect.tx(
    Effect.gen(function*() {
      const currentUser = yield* TxHashMap.get(txMap, "user1")
      if (currentUser._tag === "Some") {
        yield* TxHashMap.set(txMap, "user1", currentUser.value + "_updated")
        yield* TxHashMap.remove(txMap, "user2")
      }
    })
  )

  return yield* TxHashMap.size(txMap)
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
