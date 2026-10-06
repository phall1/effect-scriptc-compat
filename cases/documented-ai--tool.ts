// Generated from node_modules/effect/dist/ai/Tool.d.ts, example 6.
// SHA-256: 2fc757e24670556872a53c2b51cda1df66243b0a1cac91a5087f68068a17d0a0
const __compatObserved: unknown[] = []
import { Schema } from "effect"
import * as Tool from "effect/ai/Tool"

// Simple tool with no parameters
const GetCurrentTime = Tool.make("GetCurrentTime", {
  description: "Returns the current timestamp",
  success: Schema.Number
})
__compatObserved.push(GetCurrentTime.name)
console.log(JSON.stringify(__compatObserved))
