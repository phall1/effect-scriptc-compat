// Published DateTime examples. Each call is a documented one-liner with a fixed result.
import * as DateTime from "effect/DateTime"

const observed = [
  DateTime.fromDateUnsafe(new Date("2024-01-01T12:00:00Z")),
  DateTime.makeUnsafe(new Date("2024-01-01T12:00:00Z")),
  DateTime.makeUnsafe("2024-01-01"),
  DateTime.make(new Date("2024-01-01T12:00:00Z")),
  DateTime.make("2024-01-01"),
  DateTime.make("not a date"),
  DateTime.makeZonedFromString("2024-01-01T12:00:00Z"),
  DateTime.makeZonedFromString("invalid"),
  DateTime.zoneToString(DateTime.zoneMakeNamedUnsafe("Europe/London")),
  DateTime.zoneToString(DateTime.zoneMakeNamedUnsafe("Asia/Tokyo")),
  DateTime.zoneMakeNamed("Invalid/Zone"),
  DateTime.zoneFromString("invalid"),
  DateTime.zoneToString(DateTime.zoneMakeOffset(3 * 60 * 60 * 1000)),
  DateTime.formatIso(DateTime.makeUnsafe("2024-01-01T12:30:45.123Z")),
]
console.log(JSON.stringify(observed))
