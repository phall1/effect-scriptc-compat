// Generated from node_modules/effect/dist/TxReentrantLock.d.ts, example 0.
// SHA-256: 498a352ed3b2692ec5615165470759892b529c435521d9812cca53d852986543
const __compatObserved: unknown[] = []
import * as TxReentrantLock from "effect/TxReentrantLock"
import { Effect } from "effect"

const program = Effect.gen(function*() {
  const lock = yield* TxReentrantLock.make()

  // Multiple readers can proceed concurrently
  const read = yield* TxReentrantLock.withReadLock(lock, Effect.succeed("reading"))

  // Writer gets exclusive access
  const write = yield* TxReentrantLock.withWriteLock(lock, Effect.succeed("writing"))
  return [read, write]
})

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
