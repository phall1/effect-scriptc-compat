// Published Logger examples. Each call is a documented one-liner with a fixed result.
import * as Logger from "effect/Logger"

const observed = [
  Logger.isLogger("not a logger"),
  Logger.isLogger(Logger.defaultLogger),
  Logger.isLogger(Logger.consoleLogFmt),
  Logger.isLogger(Logger.consoleStructured),
  Logger.isLogger(Logger.consoleJson),
]
console.log(JSON.stringify(observed))
