// Generated from node_modules/effect/dist/ai/Response.d.ts, example 0.
// SHA-256: 395cccd768786863612bf6ede2bf1e172a7d4cbe906a8a7a7f06a4c7d41577a0
const __compatObserved: unknown[] = []
import { Schema } from "effect"
import * as Response from "effect/ai/Response"
import { Tool, Toolkit } from "effect/ai"

const myToolkit = Toolkit.make(
  Tool.make("GetWeather", {
    parameters: Schema.Struct({ city: Schema.String }),
    success: Schema.Struct({ temperature: Schema.Number })
  })
)

const allPartsSchema = Response.AllParts(myToolkit)
__compatObserved.push(Schema.isSchema(allPartsSchema))
console.log(JSON.stringify(__compatObserved))
