// Generated from node_modules/effect/dist/Cron.d.ts, example 0.
// SHA-256: 3c6fd570c49ece5bf9c42727880cb4dd3567e81ac6b48031593379ff5805c128
const __compatObserved: unknown[] = []
import * as Cron from "effect/Cron"
import { DateTime } from "effect"

// Create a cron that runs at 9 AM on weekdays
const weekdayMorning = Cron.make({
  minutes: [0],
  hours: [9],
  days: [],
  months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  weekdays: [1, 2, 3, 4, 5], // Monday to Friday
  tz: DateTime.zoneMakeNamedUnsafe("UTC")
})

// Check if a date matches the schedule
__compatObserved.push(Cron.match(weekdayMorning, "2023-06-05T09:00:00Z"))
console.log(JSON.stringify(__compatObserved))
