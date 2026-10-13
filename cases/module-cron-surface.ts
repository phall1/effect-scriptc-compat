// Published Cron examples. Each call is a documented one-liner with a fixed result.
import * as Cron from "effect/Cron"

const observed = [
  Cron.isCron({}),
  Cron.isCron("not a cron"),
  Cron.parse("invalid expression"),
  Cron.isCronParseError(new Error("regular error")),
  Cron.isCronParseError("not an error"),
]
console.log(JSON.stringify(observed))
