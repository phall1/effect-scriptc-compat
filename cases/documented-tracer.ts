// Generated from node_modules/effect/dist/Tracer.d.ts, example 1.
// SHA-256: 713d6ce4a6627632323a1716f67b0a3c3e545482b9b6b020b83813cc0db35855
const __compatObserved: unknown[] = []
import * as Tracer from "effect/Tracer"
import { Effect } from "effect"

// Function that accepts any span type
const getSpanIds = (span: Tracer.AnySpan) => Effect.succeed([span.spanId, span.traceId])

// Works with both Span and ExternalSpan
const externalSpan = Tracer.externalSpan({
  spanId: "span-123",
  traceId: "trace-456"
})

__compatObserved.push(await Effect.runPromise(getSpanIds(externalSpan)))
console.log(JSON.stringify(__compatObserved))
