// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as Take from "effect/Take"
import { Effect } from "effect"
console.log(`take:${Effect.runSync(Take.toPull([1, 2, 3])).join(",")}`)
