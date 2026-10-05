// Generated from node_modules/effect/dist/ai/Telemetry.d.ts, example 2.
// SHA-256: 70bbf6da7d96f4ebe3da6c0260f7fa977c42a6c866ecb27d569e1fa95e4e466a
const __compatObserved: unknown[] = []
import { Context, Option, String, Tracer } from "effect"
import * as Telemetry from "effect/ai/Telemetry"

const addCustomAttributes = Telemetry.addSpanAttributes(
  "custom.ai",
  String.camelToSnake
)

const span = new Tracer.NativeSpan({
  name: "request",
  parent: Option.none(),
  annotations: Context.empty(),
  links: [],
  startTime: 0n,
  kind: "internal",
  sampled: true
})

addCustomAttributes(span, {
  modelName: "gpt-4",
  maxTokens: 1000
})

__compatObserved.push(Array.from(span.attributes.keys()))
console.log(JSON.stringify(__compatObserved))
