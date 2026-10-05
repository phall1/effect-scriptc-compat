// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as PartitionedSemaphore from "effect/PartitionedSemaphore"
import { Effect } from "effect"
const program = Effect.gen(function*() {
  const semaphore = yield* PartitionedSemaphore.make<string>({ permits: 2 })
  return yield* PartitionedSemaphore.withPermit(semaphore, "a", Effect.succeed("partitioned:ok"))
})
console.log(await Effect.runPromise(program))
