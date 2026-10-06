// Generated from node_modules/effect/dist/observability/PrometheusMetrics.d.ts, example 1.
// SHA-256: db760071805b0818d0a5b31c6bc198a375d07175d1d8ee2718652584beb40daa
const __compatObserved: unknown[] = []
import { Effect, Metric } from "effect"
import * as PrometheusMetrics from "effect/observability/PrometheusMetrics"

const program = Effect.gen(function*() {
  const counter = Metric.counter("api_requests_total", {
    description: "Total API requests"
  })
  const gauge = Metric.gauge("active_connections", {
    description: "Number of active connections"
  })

  yield* Metric.update(counter, 100)
  yield* Metric.update(gauge, 25)

  // Format without prefix
  const output1 = yield* PrometheusMetrics.format()

  // Format with prefix
  const output2 = yield* PrometheusMetrics.format({ prefix: "myapp" })

  return [output1.includes("api_requests_total"), output2.includes("myapp_active_connections")]
})

__compatObserved.push(Effect.runSync(program))
console.log(JSON.stringify(__compatObserved))
