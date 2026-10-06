// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as Scheduler from "effect/Scheduler"
const output: number[] = []
const dispatcher = new Scheduler.MixedScheduler("sync").makeDispatcher()
dispatcher.scheduleTask(() => output.push(42), 0)
dispatcher.flush()
console.log(`scheduler:${output.join(",")}`)
