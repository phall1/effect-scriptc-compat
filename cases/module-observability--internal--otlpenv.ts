// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as OtlpEnv from "effect/observability/internal/otlpEnv"
import { ConfigProvider, Effect } from "effect"
const program = Effect.gen(function*() { return [yield* OtlpEnv.headers("LOGS"), (yield* OtlpEnv.endpoint("LOGS"))?.toString()] })
const provider = ConfigProvider.fromEnvRecord({ OTEL_EXPORTER_OTLP_LOGS_HEADERS: "x-key=fixed", OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: "https://example.test/logs" })
console.log(JSON.stringify(await Effect.runPromise(program.pipe(Effect.provideService(ConfigProvider.ConfigProvider, provider)))))
