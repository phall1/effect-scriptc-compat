// Primary API probe derived from installed effect@4.0.1 declarations.
import * as OtlpLogger from "effect/observability/OtlpLogger"
import { ConfigProvider, Effect, Layer, Metric } from "effect"
import { HttpClient, HttpClientResponse } from "effect/http"
import { OtlpExporter, OtlpSerialization } from "effect/observability"
import { TestClock } from "effect/testing"
const payloads: unknown[] = []
const client = HttpClient.make(request => Effect.sync(() => {
  payloads.push(request.body._tag === "Uint8Array" ? JSON.parse(new TextDecoder().decode(request.body.body)) : request.body._tag)
  return HttpClientResponse.fromWeb(request, new Response(null, { status: 204 }))
}))
const layer = OtlpLogger.layer({ url: "https://collector.test/logs", resource: { serviceName: "fixture" }, exportInterval: "1 hour", mergeWithExisting: false }).pipe(
  Layer.provide(OtlpSerialization.layerJson), Layer.provide(Layer.succeed(HttpClient.HttpClient, client))
)
await Effect.runPromise(Effect.gen(function*() {
  yield* Effect.log("fixed")
  const flusher = yield* OtlpExporter.Flusher
  yield* flusher.flush
}).pipe(
  Effect.provide(layer),
  Effect.provide(TestClock.layer()),
  Effect.provideService(ConfigProvider.ConfigProvider, ConfigProvider.fromEnvRecord({})),
  Effect.provideService(Metric.MetricRegistry, new Map()),
  Effect.withTracerEnabled(false)
))
console.log(JSON.stringify(payloads))
