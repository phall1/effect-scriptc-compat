// Generated from node_modules/effect/dist/DateTime.d.ts, example 0.
// SHA-256: 47486890f4d783d088c2bf138bed424771b3837790e08690fea96f4cc5e5a070
const __compatObserved: unknown[] = []
import * as DateTime from "effect/DateTime"
import { Option } from "effect"

// Fall-back example: 01:30 on Nov 2, 2025 in New York happens twice
const ambiguousTime = { year: 2025, month: 11, day: 2, hour: 1, minute: 30 }
const timeZone = DateTime.zoneMakeNamedUnsafe("America/New_York")

const earlier = DateTime.makeZoned(ambiguousTime, {
  timeZone,
  adjustForTimeZone: true,
  disambiguation: "earlier"
})
// Earlier occurrence (DST time): 2025-11-02T05:30:00.000Z

const later = DateTime.makeZoned(ambiguousTime, {
  timeZone,
  adjustForTimeZone: true,
  disambiguation: "later"
})
// Later occurrence (standard time): 2025-11-02T06:30:00.000Z

// Gap example: 02:30 on Mar 9, 2025 in New York doesn't exist
const gapTime = { year: 2025, month: 3, day: 9, hour: 2, minute: 30 }

const beforeGap = DateTime.makeZoned(gapTime, {
  timeZone,
  adjustForTimeZone: true,
  disambiguation: "earlier"
})
// Time before gap: 2025-03-09T06:30:00.000Z (01:30 EST)

const afterGap = DateTime.makeZoned(gapTime, {
  timeZone,
  adjustForTimeZone: true,
  disambiguation: "later"
})
// Time after gap: 2025-03-09T07:30:00.000Z (03:30 EDT)

__compatObserved.push(earlier.pipe(Option.getOrThrow, DateTime.formatIso))
__compatObserved.push(later.pipe(Option.getOrThrow, DateTime.formatIso))
__compatObserved.push(beforeGap.pipe(Option.getOrThrow, DateTime.formatIso))
__compatObserved.push(afterGap.pipe(Option.getOrThrow, DateTime.formatIso))
console.log(JSON.stringify(__compatObserved))
