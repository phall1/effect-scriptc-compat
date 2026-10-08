// Generated from node_modules/effect/dist/ai/Telemetry.d.ts, example 2.
// SHA-256: 867741413bcc12037dcdf503f4ce4c51bcd054d96750cb89cfcca87a2a2e032e
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
