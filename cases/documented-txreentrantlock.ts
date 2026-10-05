// Generated from node_modules/effect/dist/TxReentrantLock.d.ts, example 0.
// SHA-256: 7cc350146911d8cb97086473b97ce4c8626e0fc6608371014c23f0c457012aa8
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
