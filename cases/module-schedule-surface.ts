// Published Schedule examples. Each call is a documented one-liner with a fixed result.
import * as Schedule from "effect/Schedule"

const observed = [
  Schedule.isSchedule(null),
  Schedule.isSchedule(undefined),
  Schedule.isSchedule(Schedule.duration("1 second")),
  Schedule.isSchedule(Schedule.during("5 seconds")),
]
console.log(JSON.stringify(observed))
