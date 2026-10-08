// Generated from node_modules/effect/dist/Cache.d.ts, example 0.
// SHA-256: 081d233900ac077dbda4c97f77880a475ab04b9384565aee3b67506ff226ae76
const __compatObserved: unknown[] = []
import * as Cache from "effect/Cache"
import { Effect } from "effect"

// Basic cache with string keys and number values
const program = Effect.gen(function*() {
  const cache = yield* Cache.make<string, number>({
    capacity: 100,
    lookup: (key: string) => Effect.succeed(key.length)
  })

  // Cache operations
  const value1 = yield* Cache.get(cache, "hello") // 5
  const value2 = yield* Cache.get(cache, "world") // 5
  const value3 = yield* Cache.get(cache, "hello") // 5 (cached)

  return [value1, value2, value3]
})

const actual = await Effect.runPromise(program)
__compatObserved.push(actual)
console.log(JSON.stringify(__compatObserved))
