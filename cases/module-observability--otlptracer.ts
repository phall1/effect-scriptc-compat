// Primary API probe derived from installed effect@4.0.1 declarations.
import * as OtlpTracer from "effect/observability/OtlpTracer"
import { ConfigProvider, Context, Effect, Exit, Layer, Option } from "effect"
import { HttpClient, HttpClientResponse } from "effect/http"
import { OtlpExporter, OtlpSerialization } from "effect/observability"
import { TestClock } from "effect/testing"
let exports = 0
const client = HttpClient.make(request => Effect.sync(() => { exports++; return HttpClientResponse.fromWeb(request, new Response(null, { status: 204 })) }))
const program = Effect.scoped(Effect.gen(function*() {
  const tracer = yield* OtlpTracer.make({ url: "https://collector.test/traces", resource: { serviceName: "fixture" }, exportInterval: "1 hour" })
  const span = tracer.span({ name: "unsampled", parent: Option.none(), annotations: Context.empty(), links: [], startTime: 0n, kind: "internal", root: true, sampled: false })
  span.attribute("fixed", 42)
  span.end(1n, Exit.void)
  return [span.name, span.status._tag, Array.from(span.attributes)]
})).pipe(
  Effect.provide(OtlpExporter.layerFlusher), Effect.provide(OtlpSerialization.layerJson),
  Effect.provide(Layer.succeed(HttpClient.HttpClient, client)), Effect.provide(TestClock.layer()),
  Effect.provideService(ConfigProvider.ConfigProvider, ConfigProvider.fromEnvRecord({})), Effect.withTracerEnabled(false)
)
console.log(JSON.stringify([await Effect.runPromise(program), exports]))
