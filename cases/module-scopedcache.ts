// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as ScopedCache from "effect/ScopedCache"
import { Effect } from "effect"
let lookups = 0
const program = Effect.scoped(Effect.gen(function*() {
  const cache = yield* ScopedCache.make({ capacity: 2, lookup: (key: string) => Effect.sync(() => { lookups++; return key.length }) })
  const first = yield* ScopedCache.get(cache, "abc")
  const second = yield* ScopedCache.get(cache, "abc")
  return `cache:${first},${second}:${lookups}`
}))
console.log(await Effect.runPromise(program))
