// Primary API probe derived from installed effect@4.0.1 declarations.
import * as Otlp from "effect/observability/Otlp"
import { ConfigProvider, Effect, Layer, Metric } from "effect"
import { HttpClient, HttpClientResponse } from "effect/http"
import { OtlpExporter, OtlpSerialization } from "effect/observability"
import { TestClock } from "effect/testing"
const payloads: unknown[] = []
const client = HttpClient.make(request => Effect.sync(() => {
  payloads.push(request.body._tag === "Uint8Array" ? JSON.parse(new TextDecoder().decode(request.body.body)) : request.body._tag)
  return HttpClientResponse.fromWeb(request, new Response(null, { status: 204 }))
}))
const layer = Otlp.layerJson({ baseUrl: "https://collector.test", resource: { serviceName: "fixture" }, loggerExportInterval: "1 hour", metricsExportInterval: "1 hour", tracerExportInterval: "1 hour", loggerMergeWithExisting: false }).pipe(Layer.provide(Layer.succeed(HttpClient.HttpClient, client)))
await Effect.runPromise(Effect.gen(function*() {
  yield* Effect.log("fixed")
  yield* Metric.update(Metric.counter("fixed_counter"), 2)
}).pipe(
  Effect.provide(layer),
  Effect.provide(TestClock.layer()),
  Effect.provideService(ConfigProvider.ConfigProvider, ConfigProvider.fromEnvRecord({})),
  Effect.provideService(Metric.MetricRegistry, new Map()),
  Effect.withTracerEnabled(false)
))
console.log(JSON.stringify(payloads.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))))
