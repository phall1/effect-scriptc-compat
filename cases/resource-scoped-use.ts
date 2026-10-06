// Adapted from the installed effect@4.0.1 published declarations.
import { Effect } from "effect"
const events: string[] = []
Effect.runSync(Effect.scoped(Effect.gen(function*() {
  yield* Effect.addFinalizer(() => Effect.sync(() => { events.push("finalize") }))
  events.push("use")
})))
console.log(events.join("|"))
