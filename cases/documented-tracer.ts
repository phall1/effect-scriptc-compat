// Generated from node_modules/effect/dist/Tracer.d.ts, example 1.
// SHA-256: 60893fbc52d56d426093b897c99d5c8e293193d668a8dfa704ec74042acc1034
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
