// Published LogLevel examples. Each call is a documented one-liner with a fixed result.
import * as LogLevel from "effect/LogLevel"

const observed = [
  LogLevel.Order("Error", "Info"),
  LogLevel.Order("Debug", "Error"),
  LogLevel.Order("Info", "Info"),
  LogLevel.Equivalence("Error", "Error"),
  LogLevel.Equivalence("Error", "Info"),
  LogLevel.isGreaterThan("Error", "Info"),
  LogLevel.isGreaterThan("Debug", "Error"),
  LogLevel.isGreaterThanOrEqualTo("Error", "Error"),
  LogLevel.isGreaterThanOrEqualTo("Error", "Info"),
  LogLevel.isGreaterThanOrEqualTo("Debug", "Info"),
  LogLevel.isLessThan("Debug", "Info"),
  LogLevel.isLessThan("Error", "Info"),
  LogLevel.isLessThanOrEqualTo("Info", "Info"),
  LogLevel.isLessThanOrEqualTo("Debug", "Info"),
  LogLevel.isLessThanOrEqualTo("Error", "Info"),
]
console.log(JSON.stringify(observed))
