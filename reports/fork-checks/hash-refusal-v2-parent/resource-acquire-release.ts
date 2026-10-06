// Adapted from the installed effect@4.0.1 published declarations.
import { Effect } from "effect"
const events: string[] = []
const resource = Effect.acquireRelease(
  Effect.sync(() => { events.push("acquire"); return 42 }),
  value => Effect.sync(() => { events.push(`release:${value}`) })
)
Effect.runSync(Effect.scoped(Effect.gen(function*() {
  events.push(`use:${yield* resource}`)
})))
console.log(events.join("|"))
