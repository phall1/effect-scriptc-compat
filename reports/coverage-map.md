# Effect × scriptc coverage map

Generated: 2026-10-06T01:00:41.407Z · Partial: **true**

Effect **4.0.1** · scriptc **0.2.3** (v0.2.3, 52169979ee3fac98ad6651eb2a717fbbf4ac1f89) · Node **v24.19.0** · TypeScript **7.0.2** · aarch64-apple-darwin

> A successful build or green coverage footer is not compatibility when deferred sites remain. Static is a compiler classification; differentials determine observed equality. Pending and untested APIs are never implicitly compatible.

## Summary

```json
{
  "cases": 456,
  "modules": 414,
  "ready": 404,
  "completed": 55,
  "pending": 349,
  "caseTiers": {
    "static": 7,
    "deferred": 6,
    "dynamic-fallback": 0,
    "rejected": 42
  },
  "skippedNeedsIo": 14,
  "uncovered": 38,
  "moduleTiers": {
    "static": 7,
    "deferred": 6,
    "dynamic-fallback": 0,
    "rejected": 38,
    "pending": 313,
    "uncovered": 38,
    "skipped-needs-io": 12
  },
  "scCodesByCaseFrequency": {
    "SC3004": 39,
    "SC1090": 9,
    "SC2020": 8,
    "SC1043": 6,
    "SC2002": 1,
    "SC1101": 1,
    "SC1100": 1,
    "SC1080": 1
  }
}
```

## Effect

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| callback-microtask / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| concurrency-all / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| concurrency-for-each / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| concurrency-race / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| concurrency-timeout / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| effect-fail / effect | ready | not run | not run | — | 0/0 | — | — |
| effect-fn / effect | ready | not run | not run | — | 0/0 | — | — |
| effect-fn-untraced / effect | ready | not run | not run | — | 0/0 | — | — |
| effect-gen / effect | ready | not run | not run | — | 0/0 | — | — |
| effect-log / effect | ready | not run | not run | — | 0/0 | — | — |
| effect-provide / effect | ready | not run | not run | — | 0/0 | — | — |
| effect-run-promise / effect | ready | not run | not run | — | 0/0 | — | — |
| effect-run-sync / effect | ready | not run | not run | — | 0/0 | — | — |
| effect-succeed / effect | ready | not run | not run | — | 0/0 | — | — |
| entrypoint-effect / effect/Effect | ready | not run | not run | — | 0/0 | — | — |
| error-catch / effect | ready | not run | not run | — | 0/0 | — | — |
| error-or-else / effect | ready | not run | not run | — | 0/0 | — | — |
| resource-acquire-release / effect | ready | not run | not run | — | 0/0 | — | — |
| resource-scoped-use / effect | ready | not run | not run | — | 0/0 | — | — |

## Chunk

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| chunk-round-trip / effect | deferred | built | not run | 1496/0/1 | 7/0 | 1136800 | SC1043, SC1090, SC2020 |
| entrypoint-chunk / effect/Chunk | ready | not run | not run | — | 0/0 | — | — |

## ai/AiError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ai--aierror / effect/ai/AiError | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/Chat

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ai--chat / effect/ai/Chat | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/IdGenerator

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ai--idgenerator / effect/ai/IdGenerator | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/LanguageModel

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ai--languagemodel / effect/ai/LanguageModel | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/Model

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ai--model / effect/ai/Model | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/Response

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ai--response / effect/ai/Response | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/Telemetry

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ai--telemetry / effect/ai/Telemetry | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/Tokenizer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ai--tokenizer / effect/ai/Tokenizer | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/Tool

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ai--tool / effect/ai/Tool | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/Toolkit

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ai--toolkit / effect/ai/Toolkit | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## BigDecimal

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-bigdecimal / effect/BigDecimal | deferred | built | not run | 1126/0/1 | 7/0 | 1119576 | SC1043, SC1090, SC2020 |

## Boolean

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-boolean / effect/Boolean | rejected | refused | refused | 156/0/2 | 0/2 | — | SC1090 |

## Cache

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-cache / effect/Cache | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Channel

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-channel / effect/Channel | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cli/CliError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-cli--clierror / effect/cli/CliError | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cli/CliOutput

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-cli--clioutput / effect/cli/CliOutput | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cli/Param

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-cli--param / effect/cli/Param | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cli/Primitive

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-cli--primitive / effect/cli/Primitive | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cli/Prompt

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-cli--prompt / effect/cli/Prompt | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Clock

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-clock / effect/Clock | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Combiner

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-combiner / effect/Combiner | static | built | not run | 8/0/0 | 0/0 | 278256 | — |

## Config

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-config / effect/Config | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ConfigProvider

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-configprovider / effect/ConfigProvider | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Console

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-console / effect/Console | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Context

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-context / effect/Context | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Cron

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-cron / effect/Cron | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Crypto

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-crypto / effect/Crypto | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Data

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-data / effect/Data | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## DateTime

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-datetime / effect/DateTime | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Deferred

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-deferred / effect/Deferred | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Duration

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-duration / effect/Duration | deferred | built | not run | 1188/0/2 | 21/0 | 1172464 | SC1043, SC1090, SC2002, SC2020 |

## Equal

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-equal / effect/Equal | rejected | refused | refused | 321/0/1 | 0/8 | — | SC1101, SC1090, SC2020, SC1100 |

## Equivalence

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-equivalence / effect/Equivalence | static | built | not run | 100/0/0 | 0/0 | 334376 | — |

## ErrorReporter

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-errorreporter / effect/ErrorReporter | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ExecutionPlan

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-executionplan / effect/ExecutionPlan | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Exit

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-exit / effect/Exit | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## FiberHandle

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-fiberhandle / effect/FiberHandle | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## FiberMap

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-fibermap / effect/FiberMap | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## FiberSet

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-fiberset / effect/FiberSet | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Filter

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-filter / effect/Filter | deferred | built | not run | 1032/0/1 | 7/0 | 1027264 | SC1043, SC1090, SC2020 |

## Formatter

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-formatter / effect/Formatter | static | built | not run | 152/0/0 | 0/0 | 433016 | — |

## Function

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-function / effect/Function | static | built | not run | 83/0/0 | 0/0 | 349424 | — |

## Graph

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-graph / effect/Graph | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Hash

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-hash / effect/Hash | deferred | built | not run | 148/0/3 | 18/0 | 371184 | SC1043, SC2020, SC1090 |

## http/HttpRouter

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-http--httprouter / effect/http/HttpRouter | ready | not run | not run | — | 0/0 | — | — |

## http/HttpStaticServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-http--httpstaticserver / effect/http/HttpStaticServer | ready | not run | not run | — | 0/0 | — | — |

## Inspectable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-inspectable / effect/Inspectable | rejected | refused | refused | 237/0/3 | 0/2 | — | SC1090, SC1080, SC2020 |

## Iterable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-iterable / effect/Iterable | deferred | built | not run | 1120/0/1 | 7/0 | 1044128 | SC1043, SC1090, SC2020 |

## JsonPatch

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-jsonpatch / effect/JsonPatch | static | built | not run | 87/0/0 | 0/0 | 444856 | — |

## JsonPointer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-jsonpointer / effect/JsonPointer | static | built | not run | 6/0/0 | 0/0 | 334344 | — |

## JsonSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-jsonschema / effect/JsonSchema | static | built | not run | 77/0/0 | 0/0 | 335352 | — |

## Latch

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-latch / effect/Latch | ready | not run | not run | — | 0/0 | — | — |

## LayerMap

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-layermap / effect/LayerMap | ready | not run | not run | — | 0/0 | — | — |

## LayerRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-layerref / effect/LayerRef | ready | not run | not run | — | 0/0 | — | — |

## Logger

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-logger / effect/Logger | ready | not run | not run | — | 0/0 | — | — |

## LogLevel

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-loglevel / effect/LogLevel | ready | not run | not run | — | 0/0 | — | — |

## ManagedRuntime

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-managedruntime / effect/ManagedRuntime | ready | not run | not run | — | 0/0 | — | — |

## Match

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-match / effect/Match | ready | not run | not run | — | 0/0 | — | — |

## Metric

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-metric / effect/Metric | ready | not run | not run | — | 0/0 | — | — |

## MutableHashMap

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-mutablehashmap / effect/MutableHashMap | ready | not run | not run | — | 0/0 | — | — |

## MutableHashSet

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-mutablehashset / effect/MutableHashSet | ready | not run | not run | — | 0/0 | — | — |

## MutableList

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-mutablelist / effect/MutableList | ready | not run | not run | — | 0/0 | — | — |

## MutableRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-mutableref / effect/MutableRef | ready | not run | not run | — | 0/0 | — | — |

## Newtype

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-newtype / effect/Newtype | ready | not run | not run | — | 0/0 | — | — |

## NonEmptyIterable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-nonemptyiterable / effect/NonEmptyIterable | ready | not run | not run | — | 0/0 | — | — |

## observability/OtlpExporter

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-observability--otlpexporter / effect/observability/OtlpExporter | ready | not run | not run | — | 0/0 | — | — |

## observability/PrometheusMetrics

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-observability--prometheusmetrics / effect/observability/PrometheusMetrics | ready | not run | not run | — | 0/0 | — | — |

## Optic

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-optic / effect/Optic | ready | not run | not run | — | 0/0 | — | — |

## Option

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-option / effect/Option | ready | not run | not run | — | 0/0 | — | — |

## Order

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-order / effect/Order | ready | not run | not run | — | 0/0 | — | — |

## Ordering

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ordering / effect/Ordering | ready | not run | not run | — | 0/0 | — | — |

## Path

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-path / effect/Path | ready | not run | not run | — | 0/0 | — | — |

## persistence/RateLimiter

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-persistence--ratelimiter / effect/persistence/RateLimiter | ready | not run | not run | — | 0/0 | — | — |

## Pool

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-pool / effect/Pool | ready | not run | not run | — | 0/0 | — | — |

## Predicate

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-predicate / effect/Predicate | ready | not run | not run | — | 0/0 | — | — |

## PubSub

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-pubsub / effect/PubSub | ready | not run | not run | — | 0/0 | — | — |

## Pull

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-pull / effect/Pull | ready | not run | not run | — | 0/0 | — | — |

## Queue

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-queue / effect/Queue | ready | not run | not run | — | 0/0 | — | — |

## RcMap

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-rcmap / effect/RcMap | ready | not run | not run | — | 0/0 | — | — |

## RcRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-rcref / effect/RcRef | ready | not run | not run | — | 0/0 | — | — |

## reactivity/Atom

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-reactivity--atom / effect/reactivity/Atom | ready | not run | not run | — | 0/0 | — | — |

## Record

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-record / effect/Record | ready | not run | not run | — | 0/0 | — | — |

## Redacted

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-redacted / effect/Redacted | ready | not run | not run | — | 0/0 | — | — |

## Reducer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-reducer / effect/Reducer | ready | not run | not run | — | 0/0 | — | — |

## Ref

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ref / effect/Ref | ready | not run | not run | — | 0/0 | — | — |

## References

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-references / effect/References | ready | not run | not run | — | 0/0 | — | — |

## RegExp

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-regexp / effect/RegExp | ready | not run | not run | — | 0/0 | — | — |

## Request

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-request / effect/Request | ready | not run | not run | — | 0/0 | — | — |

## RequestResolver

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-requestresolver / effect/RequestResolver | ready | not run | not run | — | 0/0 | — | — |

## Result

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-result / effect/Result | ready | not run | not run | — | 0/0 | — | — |

## Runtime

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-runtime / effect/Runtime | ready | not run | not run | — | 0/0 | — | — |

## SchemaAST

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-schemaast / effect/SchemaAST | ready | not run | not run | — | 0/0 | — | — |

## SchemaGetter

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-schemagetter / effect/SchemaGetter | ready | not run | not run | — | 0/0 | — | — |

## SchemaIssue

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-schemaissue / effect/SchemaIssue | ready | not run | not run | — | 0/0 | — | — |

## SchemaRepresentation

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-schemarepresentation / effect/SchemaRepresentation | ready | not run | not run | — | 0/0 | — | — |

## SchemaTransformation

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-schematransformation / effect/SchemaTransformation | ready | not run | not run | — | 0/0 | — | — |

## Scope

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-scope / effect/Scope | ready | not run | not run | — | 0/0 | — | — |

## Semaphore

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-semaphore / effect/Semaphore | ready | not run | not run | — | 0/0 | — | — |

## Sink

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-sink / effect/Sink | ready | not run | not run | — | 0/0 | — | — |

## Struct

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-struct / effect/Struct | ready | not run | not run | — | 0/0 | — | — |

## SubscriptionRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-subscriptionref / effect/SubscriptionRef | ready | not run | not run | — | 0/0 | — | — |

## Symbol

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-symbol / effect/Symbol | ready | not run | not run | — | 0/0 | — | — |

## testing/TestSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-testing--testschema / effect/testing/TestSchema | ready | not run | not run | — | 0/0 | — | — |

## Tracer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-tracer / effect/Tracer | ready | not run | not run | — | 0/0 | — | — |

## Trie

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-trie / effect/Trie | ready | not run | not run | — | 0/0 | — | — |

## Tuple

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-tuple / effect/Tuple | ready | not run | not run | — | 0/0 | — | — |

## TxChunk

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txchunk / effect/TxChunk | ready | not run | not run | — | 0/0 | — | — |

## TxDeferred

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txdeferred / effect/TxDeferred | ready | not run | not run | — | 0/0 | — | — |

## TxHashMap

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txhashmap / effect/TxHashMap | ready | not run | not run | — | 0/0 | — | — |

## TxHashSet

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txhashset / effect/TxHashSet | ready | not run | not run | — | 0/0 | — | — |

## TxPriorityQueue

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txpriorityqueue / effect/TxPriorityQueue | ready | not run | not run | — | 0/0 | — | — |

## TxPubSub

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txpubsub / effect/TxPubSub | ready | not run | not run | — | 0/0 | — | — |

## TxQueue

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txqueue / effect/TxQueue | ready | not run | not run | — | 0/0 | — | — |

## TxReentrantLock

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txreentrantlock / effect/TxReentrantLock | ready | not run | not run | — | 0/0 | — | — |

## TxRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txref / effect/TxRef | ready | not run | not run | — | 0/0 | — | — |

## TxSemaphore

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txsemaphore / effect/TxSemaphore | ready | not run | not run | — | 0/0 | — | — |

## TxSubscriptionRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txsubscriptionref / effect/TxSubscriptionRef | ready | not run | not run | — | 0/0 | — | — |

## Unify

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-unify / effect/Unify | ready | not run | not run | — | 0/0 | — | — |

## Utils

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-utils / effect/Utils | ready | not run | not run | — | 0/0 | — | — |

## workflow/DurableQueue

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-workflow--durablequeue / effect/workflow/DurableQueue | ready | not run | not run | — | 0/0 | — | — |

## Cause

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-cause / effect/Cause | ready | not run | not run | — | 0/0 | — | — |
| error-cause / effect | ready | not run | not run | — | 0/0 | — | — |

## Fiber

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-fiber / effect/Fiber | ready | not run | not run | — | 0/0 | — | — |
| fiber-interrupt / effect | ready | not run | not run | — | 0/0 | — | — |

## HashMap

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-hashmap / effect/HashMap | ready | not run | not run | — | 0/0 | — | — |
| hashmap-round-trip / effect | ready | not run | not run | — | 0/0 | — | — |

## HashSet

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-hashset / effect/HashSet | ready | not run | not run | — | 0/0 | — | — |
| hashset-round-trip / effect | ready | not run | not run | — | 0/0 | — | — |

## Layer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-layer / effect/Layer | ready | not run | not run | — | 0/0 | — | — |
| layer-effect / effect | ready | not run | not run | — | 0/0 | — | — |
| layer-succeed / effect | ready | not run | not run | — | 0/0 | — | — |

## Schedule

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-schedule / effect/Schedule | ready | not run | not run | — | 0/0 | — | — |
| retry-exhausted / effect | ready | not run | not run | — | 0/0 | — | — |
| retry-success / effect | ready | not run | not run | — | 0/0 | — | — |

## Schema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-schema / effect/Schema | ready | not run | not run | — | 0/0 | — | — |
| schema-class / effect | ready | not run | not run | — | 0/0 | — | — |
| schema-decode / effect | ready | not run | not run | — | 0/0 | — | — |
| schema-encode / effect | ready | not run | not run | — | 0/0 | — | — |
| schema-failure / effect | ready | not run | not run | — | 0/0 | — | — |

## Stream

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-stream / effect/Stream | ready | not run | not run | — | 0/0 | — | — |
| stream-failing-element / effect | ready | not run | not run | — | 0/0 | — | — |
| stream-from-iterable / effect | ready | not run | not run | — | 0/0 | — | — |
| stream-map / effect | ready | not run | not run | — | 0/0 | — | — |

## Arbitrary

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-arbitrary / effect/Arbitrary | ready | not run | not run | — | 0/0 | — | — |

module-arbitrary: Only constant arbitrary construction and its documented guard are exercised; random generation is intentionally excluded.


## Array

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-array / effect/Array | ready | not run | not run | — | 0/0 | — | — |

## BigInt

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-bigint / effect/BigInt | ready | not run | not run | — | 0/0 | — | — |

## Brand

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-brand / effect/Brand | ready | not run | not run | — | 0/0 | — | — |

## ByteSize

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-bytesize / effect/ByteSize | ready | not run | not run | — | 0/0 | — | — |

## ChannelSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-channelschema / effect/ChannelSchema | ready | not run | not run | — | 0/0 | — | — |

## Effectable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-effectable / effect/Effectable | ready | not run | not run | — | 0/0 | — | — |

## FileSystem

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-filesystem / effect/FileSystem | ready | not run | not run | — | 0/0 | — | — |

## HashRing

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-hashring / effect/HashRing | ready | not run | not run | — | 0/0 | — | — |

## http/FindMyWay/internal/queryString

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--findmyway--internal--querystring / effect/http/FindMyWay/internal/queryString | ready | not run | not run | — | 0/0 | — | — |

## http/HttpEffect

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--httpeffect / effect/http/HttpEffect | ready | not run | not run | — | 0/0 | — | — |

## http/HttpIncomingMessage

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--httpincomingmessage / effect/http/HttpIncomingMessage | ready | not run | not run | — | 0/0 | — | — |

## http/HttpMiddleware

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--httpmiddleware / effect/http/HttpMiddleware | ready | not run | not run | — | 0/0 | — | — |

## http/HttpPlatform

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--httpplatform / effect/http/HttpPlatform | ready | not run | not run | — | 0/0 | — | — |

## http/HttpServerRespondable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--httpserverrespondable / effect/http/HttpServerRespondable | ready | not run | not run | — | 0/0 | — | — |

## http/internal/mimeTypes

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--internal--mimetypes / effect/http/internal/mimeTypes | ready | not run | not run | — | 0/0 | — | — |

## http/Multipart

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipart / effect/http/Multipart | ready | not run | not run | — | 0/0 | — | — |

## http/MultipartParser

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser / effect/http/MultipartParser | ready | not run | not run | — | 0/0 | — | — |

## http/MultipartParser/HeadersParser

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser--headersparser / effect/http/MultipartParser/HeadersParser | ready | not run | not run | — | 0/0 | — | — |

## http/MultipartParser/internal/contentType

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser--internal--contenttype / effect/http/MultipartParser/internal/contentType | ready | not run | not run | — | 0/0 | — | — |

## http/MultipartParser/internal/headers

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser--internal--headers / effect/http/MultipartParser/internal/headers | ready | not run | not run | — | 0/0 | — | — |

## http/MultipartParser/internal/multipart

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser--internal--multipart / effect/http/MultipartParser/internal/multipart | ready | not run | not run | — | 0/0 | — | — |

## http/MultipartParser/internal/search

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser--internal--search / effect/http/MultipartParser/internal/search | ready | not run | not run | — | 0/0 | — | — |

## http/MultipartParser/Search

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser--search / effect/http/MultipartParser/Search | ready | not run | not run | — | 0/0 | — | — |

## http-api/HttpApiBuilder

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http-api--httpapibuilder / effect/http-api/HttpApiBuilder | ready | not run | not run | — | 0/0 | — | — |

## http-api/HttpApiMiddleware

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http-api--httpapimiddleware / effect/http-api/HttpApiMiddleware | ready | not run | not run | — | 0/0 | — | — |

## http-api/HttpApiScalar

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http-api--httpapiscalar / effect/http-api/HttpApiScalar | ready | not run | not run | — | 0/0 | — | — |

## http-api/HttpApiSwagger

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http-api--httpapiswagger / effect/http-api/HttpApiSwagger | ready | not run | not run | — | 0/0 | — | — |

## http-api/HttpApiTest

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http-api--httpapitest / effect/http-api/HttpApiTest | ready | not run | not run | — | 0/0 | — | — |

## Number

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-number / effect/Number | ready | not run | not run | — | 0/0 | — | — |

## observability/internal/otlpEnv

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-observability--internal--otlpenv / effect/observability/internal/otlpEnv | ready | not run | not run | — | 0/0 | — | — |

## observability/Otlp

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-observability--otlp / effect/observability/Otlp | ready | not run | not run | — | 0/0 | — | — |

## observability/OtlpLogger

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-observability--otlplogger / effect/observability/OtlpLogger | ready | not run | not run | — | 0/0 | — | — |

## observability/OtlpMetrics

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-observability--otlpmetrics / effect/observability/OtlpMetrics | ready | not run | not run | — | 0/0 | — | — |

## observability/OtlpTracer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-observability--otlptracer / effect/observability/OtlpTracer | ready | not run | not run | — | 0/0 | — | — |

module-observability--otlptracer: Exercises unsampled span lifecycle and attributes with explicit fixed nanoseconds; no random trace/span IDs are read or generated, and no transport export is expected.


## PartitionedSemaphore

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-partitionedsemaphore / effect/PartitionedSemaphore | ready | not run | not run | — | 0/0 | — | — |

## Pipeable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-pipeable / effect/Pipeable | ready | not run | not run | — | 0/0 | — | — |

## PlatformError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-platformerror / effect/PlatformError | ready | not run | not run | — | 0/0 | — | — |

## PrimaryKey

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-primarykey / effect/PrimaryKey | ready | not run | not run | — | 0/0 | — | — |

## Redactable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-redactable / effect/Redactable | ready | not run | not run | — | 0/0 | — | — |

## Resource

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-resource / effect/Resource | ready | not run | not run | — | 0/0 | — | — |

## Scheduler

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-scheduler / effect/Scheduler | ready | not run | not run | — | 0/0 | — | — |

## SchemaParser

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-schemaparser / effect/SchemaParser | ready | not run | not run | — | 0/0 | — | — |

## ScopedCache

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-scopedcache / effect/ScopedCache | ready | not run | not run | — | 0/0 | — | — |

## ScopedRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-scopedref / effect/ScopedRef | ready | not run | not run | — | 0/0 | — | — |

## String

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-string / effect/String | ready | not run | not run | — | 0/0 | — | — |

## SynchronizedRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-synchronizedref / effect/SynchronizedRef | ready | not run | not run | — | 0/0 | — | — |

## Take

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-take / effect/Take | ready | not run | not run | — | 0/0 | — | — |

## UndefinedOr

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-undefinedor / effect/UndefinedOr | ready | not run | not run | — | 0/0 | — | — |

## ai

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai / effect/ai | ready | not run | not run | — | 0/0 | — | — |

## ai/AnthropicStructuredOutput

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-anthropicstructuredoutput / effect/ai/AnthropicStructuredOutput | ready | not run | not run | — | 0/0 | — | — |

## ai/Decision

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-decision / effect/ai/Decision | ready | not run | not run | — | 0/0 | — | — |

## ai/DecisionModel

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-decisionmodel / effect/ai/DecisionModel | ready | not run | not run | — | 0/0 | — | — |

## ai/EmbeddingModel

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-embeddingmodel / effect/ai/EmbeddingModel | ready | not run | not run | — | 0/0 | — | — |

## ai/McpProtocol

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-mcpprotocol / effect/ai/McpProtocol | ready | not run | not run | — | 0/0 | — | — |

## ai/McpSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-mcpschema / effect/ai/McpSchema | ready | not run | not run | — | 0/0 | — | — |

## ai/McpServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-mcpserver / effect/ai/McpServer | ready | not run | not run | — | 0/0 | — | — |

## ai/OpenAiStructuredOutput

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-openaistructuredoutput / effect/ai/OpenAiStructuredOutput | ready | not run | not run | — | 0/0 | — | — |

## ai/Prompt

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-prompt / effect/ai/Prompt | ready | not run | not run | — | 0/0 | — | — |

## ai/ResponseIdTracker

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-responseidtracker / effect/ai/ResponseIdTracker | ready | not run | not run | — | 0/0 | — | — |

## cli

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli / effect/cli | ready | not run | not run | — | 0/0 | — | — |

## cli/Argument

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli-argument / effect/cli/Argument | ready | not run | not run | — | 0/0 | — | — |

## cli/CliConfig

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli-cliconfig / effect/cli/CliConfig | ready | not run | not run | — | 0/0 | — | — |

## cli/Command

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli-command / effect/cli/Command | ready | not run | not run | — | 0/0 | — | — |

## cli/Completions

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli-completions / effect/cli/Completions | ready | not run | not run | — | 0/0 | — | — |

## cli/Flag

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli-flag / effect/cli/Flag | ready | not run | not run | — | 0/0 | — | — |

## cli/GlobalFlag

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli-globalflag / effect/cli/GlobalFlag | ready | not run | not run | — | 0/0 | — | — |

## cluster

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster / effect/cluster | ready | not run | not run | — | 0/0 | — | — |

## cluster/ClusterCron

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-clustercron / effect/cluster/ClusterCron | ready | not run | not run | — | 0/0 | — | — |

## cluster/ClusterError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-clustererror / effect/cluster/ClusterError | ready | not run | not run | — | 0/0 | — | — |

## cluster/ClusterMetrics

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-clustermetrics / effect/cluster/ClusterMetrics | ready | not run | not run | — | 0/0 | — | — |

## cluster/ClusterSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-clusterschema / effect/cluster/ClusterSchema | ready | not run | not run | — | 0/0 | — | — |

## cluster/ClusterWorkflowEngine

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-clusterworkflowengine / effect/cluster/ClusterWorkflowEngine | ready | not run | not run | — | 0/0 | — | — |

## cluster/DeliverAt

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-deliverat / effect/cluster/DeliverAt | ready | not run | not run | — | 0/0 | — | — |

## cluster/Entity

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entity / effect/cluster/Entity | ready | not run | not run | — | 0/0 | — | — |

## cluster/EntityAddress

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entityaddress / effect/cluster/EntityAddress | ready | not run | not run | — | 0/0 | — | — |

## cluster/EntityId

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entityid / effect/cluster/EntityId | ready | not run | not run | — | 0/0 | — | — |

## cluster/EntityProxy

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entityproxy / effect/cluster/EntityProxy | ready | not run | not run | — | 0/0 | — | — |

## cluster/EntityProxyServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entityproxyserver / effect/cluster/EntityProxyServer | ready | not run | not run | — | 0/0 | — | — |

## cluster/EntityResource

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entityresource / effect/cluster/EntityResource | ready | not run | not run | — | 0/0 | — | — |

## cluster/EntityType

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entitytype / effect/cluster/EntityType | ready | not run | not run | — | 0/0 | — | — |

## cluster/Envelope

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-envelope / effect/cluster/Envelope | ready | not run | not run | — | 0/0 | — | — |

## cluster/K8sHttpClient

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-k8shttpclient / effect/cluster/K8sHttpClient | ready | not run | not run | — | 0/0 | — | — |

## cluster/MachineId

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-machineid / effect/cluster/MachineId | ready | not run | not run | — | 0/0 | — | — |

## cluster/Message

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-message / effect/cluster/Message | ready | not run | not run | — | 0/0 | — | — |

## cluster/MessageStorage

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-messagestorage / effect/cluster/MessageStorage | ready | not run | not run | — | 0/0 | — | — |

## cluster/Reply

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-reply / effect/cluster/Reply | ready | not run | not run | — | 0/0 | — | — |

## cluster/Runner

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-runner / effect/cluster/Runner | ready | not run | not run | — | 0/0 | — | — |

## cluster/RunnerAddress

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-runneraddress / effect/cluster/RunnerAddress | ready | not run | not run | — | 0/0 | — | — |

## cluster/RunnerHealth

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-runnerhealth / effect/cluster/RunnerHealth | ready | not run | not run | — | 0/0 | — | — |

## cluster/Runners

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-runners / effect/cluster/Runners | ready | not run | not run | — | 0/0 | — | — |

## cluster/RunnerServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-runnerserver / effect/cluster/RunnerServer | ready | not run | not run | — | 0/0 | — | — |

## cluster/RunnerStorage

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-runnerstorage / effect/cluster/RunnerStorage | ready | not run | not run | — | 0/0 | — | — |

## cluster/ShardId

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-shardid / effect/cluster/ShardId | ready | not run | not run | — | 0/0 | — | — |

## cluster/Sharding

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-sharding / effect/cluster/Sharding | ready | not run | not run | — | 0/0 | — | — |

## cluster/ShardingConfig

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-shardingconfig / effect/cluster/ShardingConfig | ready | not run | not run | — | 0/0 | — | — |

## cluster/ShardingRegistrationEvent

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-shardingregistrationevent / effect/cluster/ShardingRegistrationEvent | ready | not run | not run | — | 0/0 | — | — |

## cluster/Singleton

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-singleton / effect/cluster/Singleton | ready | not run | not run | — | 0/0 | — | — |

## cluster/SingletonAddress

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-singletonaddress / effect/cluster/SingletonAddress | ready | not run | not run | — | 0/0 | — | — |

## cluster/Snowflake

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-snowflake / effect/cluster/Snowflake | ready | not run | not run | — | 0/0 | — | — |

## cluster/TestRunner

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-testrunner / effect/cluster/TestRunner | ready | not run | not run | — | 0/0 | — | — |

## devtools

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-devtools / effect/devtools | ready | not run | not run | — | 0/0 | — | — |

## devtools/DevToolsClient

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-devtools-devtoolsclient / effect/devtools/DevToolsClient | ready | not run | not run | — | 0/0 | — | — |

## devtools/DevToolsSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-devtools-devtoolsschema / effect/devtools/DevToolsSchema | ready | not run | not run | — | 0/0 | — | — |

## encoding

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding / effect/encoding | ready | not run | not run | — | 0/0 | — | — |

## encoding/Base64

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-base64 / effect/encoding/Base64 | ready | not run | not run | — | 0/0 | — | — |

## encoding/Base64Url

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-base64url / effect/encoding/Base64Url | ready | not run | not run | — | 0/0 | — | — |

## encoding/EncodingError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-encodingerror / effect/encoding/EncodingError | ready | not run | not run | — | 0/0 | — | — |

## encoding/Hex

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-hex / effect/encoding/Hex | ready | not run | not run | — | 0/0 | — | — |

## encoding/Ini

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-ini / effect/encoding/Ini | ready | not run | not run | — | 0/0 | — | — |

## encoding/Ndjson

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-ndjson / effect/encoding/Ndjson | ready | not run | not run | — | 0/0 | — | — |

## encoding/SchemaBinary

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-schemabinary / effect/encoding/SchemaBinary | ready | not run | not run | — | 0/0 | — | — |

## encoding/Sse

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-sse / effect/encoding/Sse | ready | not run | not run | — | 0/0 | — | — |

## encoding/Toml

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-toml / effect/encoding/Toml | ready | not run | not run | — | 0/0 | — | — |

## encoding/Yaml

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-yaml / effect/encoding/Yaml | ready | not run | not run | — | 0/0 | — | — |

## eventlog

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-eventlog / effect/eventlog | ready | not run | not run | — | 0/0 | — | — |

## eventlog/Event

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-eventlog-event / effect/eventlog/Event | ready | not run | not run | — | 0/0 | — | — |

## eventlog/EventGroup

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-eventlog-eventgroup / effect/eventlog/EventGroup | ready | not run | not run | — | 0/0 | — | — |

## eventlog/EventLogMessage

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-eventlog-eventlogmessage / effect/eventlog/EventLogMessage | ready | not run | not run | — | 0/0 | — | — |

## eventlog/EventLogSessionAuth

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-eventlog-eventlogsessionauth / effect/eventlog/EventLogSessionAuth | ready | not run | not run | — | 0/0 | — | — |

## http

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http / effect/http | ready | not run | not run | — | 0/0 | — | — |

## http-api

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api / effect/http-api | ready | not run | not run | — | 0/0 | — | — |

## http-api/HttpApi

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapi / effect/http-api/HttpApi | ready | not run | not run | — | 0/0 | — | — |

## http-api/HttpApiClient

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapiclient / effect/http-api/HttpApiClient | ready | not run | not run | — | 0/0 | — | — |

## http-api/HttpApiEndpoint

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapiendpoint / effect/http-api/HttpApiEndpoint | ready | not run | not run | — | 0/0 | — | — |

## http-api/HttpApiError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapierror / effect/http-api/HttpApiError | ready | not run | not run | — | 0/0 | — | — |

## http-api/HttpApiGroup

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapigroup / effect/http-api/HttpApiGroup | ready | not run | not run | — | 0/0 | — | — |

## http-api/HttpApiSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapischema / effect/http-api/HttpApiSchema | ready | not run | not run | — | 0/0 | — | — |

## http-api/HttpApiSecurity

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapisecurity / effect/http-api/HttpApiSecurity | ready | not run | not run | — | 0/0 | — | — |

## http-api/OpenApi

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-openapi / effect/http-api/OpenApi | ready | not run | not run | — | 0/0 | — | — |

## http/Cookies

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-cookies / effect/http/Cookies | ready | not run | not run | — | 0/0 | — | — |

## http/Etag

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-etag / effect/http/Etag | ready | not run | not run | — | 0/0 | — | — |

## http/FetchHttpClient

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-fetchhttpclient / effect/http/FetchHttpClient | ready | not run | not run | — | 0/0 | — | — |

## http/FindMyWay

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-findmyway / effect/http/FindMyWay | ready | not run | not run | — | 0/0 | — | — |

## http/Headers

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-headers / effect/http/Headers | ready | not run | not run | — | 0/0 | — | — |

## http/HttpBody

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpbody / effect/http/HttpBody | ready | not run | not run | — | 0/0 | — | — |

## http/HttpClient

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpclient / effect/http/HttpClient | ready | not run | not run | — | 0/0 | — | — |

## http/HttpClientError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpclienterror / effect/http/HttpClientError | ready | not run | not run | — | 0/0 | — | — |

## http/HttpClientRequest

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpclientrequest / effect/http/HttpClientRequest | ready | not run | not run | — | 0/0 | — | — |

## http/HttpClientResponse

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpclientresponse / effect/http/HttpClientResponse | ready | not run | not run | — | 0/0 | — | — |

## http/HttpMethod

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpmethod / effect/http/HttpMethod | ready | not run | not run | — | 0/0 | — | — |

## http/HttpServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpserver / effect/http/HttpServer | ready | not run | not run | — | 0/0 | — | — |

## http/HttpServerError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpservererror / effect/http/HttpServerError | ready | not run | not run | — | 0/0 | — | — |

## http/HttpServerRequest

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpserverrequest / effect/http/HttpServerRequest | ready | not run | not run | — | 0/0 | — | — |

## http/HttpServerResponse

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpserverresponse / effect/http/HttpServerResponse | ready | not run | not run | — | 0/0 | — | — |

## http/HttpStatus

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpstatus / effect/http/HttpStatus | ready | not run | not run | — | 0/0 | — | — |

## http/HttpTraceContext

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httptracecontext / effect/http/HttpTraceContext | ready | not run | not run | — | 0/0 | — | — |

## http/Mime

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-mime / effect/http/Mime | ready | not run | not run | — | 0/0 | — | — |

## http/Template

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-template / effect/http/Template | ready | not run | not run | — | 0/0 | — | — |

## http/Url

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-url / effect/http/Url | ready | not run | not run | — | 0/0 | — | — |

## http/UrlParams

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-urlparams / effect/http/UrlParams | ready | not run | not run | — | 0/0 | — | — |

## net

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-net / effect/net | ready | not run | not run | — | 0/0 | — | — |

## net/IpInterface

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-net-ipinterface / effect/net/IpInterface | ready | not run | not run | — | 0/0 | — | — |

## net/IpNetwork

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-net-ipnetwork / effect/net/IpNetwork | ready | not run | not run | — | 0/0 | — | — |

## net/NetAddress

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-net-netaddress / effect/net/NetAddress | ready | not run | not run | — | 0/0 | — | — |

## observability

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-observability / effect/observability | ready | not run | not run | — | 0/0 | — | — |

## observability/OtlpResource

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-observability-otlpresource / effect/observability/OtlpResource | ready | not run | not run | — | 0/0 | — | — |

## observability/OtlpSerialization

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-observability-otlpserialization / effect/observability/OtlpSerialization | ready | not run | not run | — | 0/0 | — | — |

## persistence

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-persistence / effect/persistence | ready | not run | not run | — | 0/0 | — | — |

## persistence/KeyValueStore

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-persistence-keyvaluestore / effect/persistence/KeyValueStore | ready | not run | not run | — | 0/0 | — | — |

## persistence/Persistable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-persistence-persistable / effect/persistence/Persistable | ready | not run | not run | — | 0/0 | — | — |
| remaining-core-persistence--persistable / effect/persistence/Persistable | ready | not run | not run | — | 0/0 | — | — |

## persistence/PersistedQueue

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-persistence-persistedqueue / effect/persistence/PersistedQueue | ready | not run | not run | — | 0/0 | — | — |
| remaining-core-persistence--persistedqueue / effect/persistence/PersistedQueue | ready | not run | not run | — | 0/0 | — | — |

remaining-core-persistence--persistedqueue: In-memory store, TestClock, and explicit queue IDs; no persistence IO, wall clock, UUID sampling, or waits on empty queue.


## persistence/Persistence

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-persistence-persistence / effect/persistence/Persistence | ready | not run | not run | — | 0/0 | — | — |
| remaining-core-persistence--persistence / effect/persistence/Persistence | ready | not run | not run | — | 0/0 | — | — |

## process

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-process / effect/process | ready | not run | not run | — | 0/0 | — | — |

## process/ChildProcess

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-process-childprocess / effect/process/ChildProcess | ready | not run | not run | — | 0/0 | — | — |

## reactivity

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-reactivity / effect/reactivity | ready | not run | not run | — | 0/0 | — | — |

## reactivity/AsyncResult

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-reactivity-asyncresult / effect/reactivity/AsyncResult | ready | not run | not run | — | 0/0 | — | — |

## reactivity/AtomRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-reactivity-atomref / effect/reactivity/AtomRef | ready | not run | not run | — | 0/0 | — | — |

## reactivity/AtomRegistry

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-reactivity-atomregistry / effect/reactivity/AtomRegistry | ready | not run | not run | — | 0/0 | — | — |

## rpc

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-rpc / effect/rpc | ready | not run | not run | — | 0/0 | — | — |

## rpc/Rpc

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-rpc-rpc / effect/rpc/Rpc | ready | not run | not run | — | 0/0 | — | — |

## rpc/RpcClientError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-rpc-rpcclienterror / effect/rpc/RpcClientError | ready | not run | not run | — | 0/0 | — | — |
| remaining-core-rpc--rpcclienterror / effect/rpc/RpcClientError | ready | not run | not run | — | 0/0 | — | — |

remaining-core-rpc--rpcclienterror: Pure protocol-error creation, schema validation and recovered typed failure; no client transport.


## rpc/RpcGroup

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-rpc-rpcgroup / effect/rpc/RpcGroup | ready | not run | not run | — | 0/0 | — | — |

## rpc/RpcMessage

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-rpc-rpcmessage / effect/rpc/RpcMessage | ready | not run | not run | — | 0/0 | — | — |

## rpc/RpcSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-rpc-rpcschema / effect/rpc/RpcSchema | ready | not run | not run | — | 0/0 | — | — |

## rpc/RpcSerialization

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-rpc-rpcserialization / effect/rpc/RpcSerialization | ready | not run | not run | — | 0/0 | — | — |

## rpc/RpcWorker

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-rpc-rpcworker / effect/rpc/RpcWorker | ready | not run | not run | — | 0/0 | — | — |
| remaining-core-rpc--rpcworker / effect/rpc/RpcWorker | ready | not run | not run | — | 0/0 | — | — |

remaining-core-rpc--rpcworker: Only schema encoding and transferable collection for a fixed initial worker message; no worker is spawned.


## schema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-schema / effect/schema | ready | not run | not run | — | 0/0 | — | — |

## schema/Model

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-schema-model / effect/schema/Model | ready | not run | not run | — | 0/0 | — | — |

## schema/SchemaAOTCompiler

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-schema-schemaaotcompiler / effect/schema/SchemaAOTCompiler | ready | not run | not run | — | 0/0 | — | — |

## schema/SchemaJITCompiler

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-schema-schemajitcompiler / effect/schema/SchemaJITCompiler | ready | not run | not run | — | 0/0 | — | — |

## schema/VariantSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-schema-variantschema / effect/schema/VariantSchema | ready | not run | not run | — | 0/0 | — | — |
| remaining-core-schema--variantschema / effect/schema/VariantSchema | ready | not run | not run | — | 0/0 | — | — |

## cluster/HttpRunner

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-cluster-httprunner / effect/cluster/HttpRunner | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-cluster-httprunner: Published layerHttp/layerWebsocket require an HttpServer and HttpClient or WebSocketConstructor plus runner storage. The live runner transport needs an HTTP/WebSocket backend and peer; no listeners or outbound network are allowed in this deterministic corpus.


## cluster/SingleRunner

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-cluster-singlerunner / effect/cluster/SingleRunner | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-cluster-singlerunner: The declaration explicitly says message storage remains SQL-backed even with runnerStorage="memory". layer requires SqlClient and Crypto; no SQL driver/database is installed, and the fixture must not create database IO.


## cluster/SocketRunner

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-cluster-socketrunner / effect/cluster/SocketRunner | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-cluster-socketrunner: Published layer requires SocketServer and Runners.RpcClientProtocol and runs the socket RPC listener. No socket-server platform adapter or peer is installed; opening sockets is outside this corpus.


## cluster/SqlMessageStorage

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-cluster-sqlmessagestorage / effect/cluster/SqlMessageStorage | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-cluster-sqlmessagestorage: makeEncoded/make run SQL migrations and require SqlClient plus Crypto; exercising this backend requires a concrete database driver and database IO, neither provided in the pinned Effect-only package.


## cluster/SqlRunnerStorage

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-cluster-sqlrunnerstorage / effect/cluster/SqlRunnerStorage | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-cluster-sqlrunnerstorage: make/layer implement runner registration and shard/advisory locks using SqlClient and ShardingConfig. There is no concrete SQL driver or database; in-memory runner storage is covered separately.


## devtools/DevTools

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-devtools-devtools / effect/devtools/DevTools | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-devtools-devtools: The high-level tracer streams spans and metric snapshots to an external devtools process. layerSocket requires Socket and WebSocket layers require a WebSocket backend; no devtools peer or network connection is permitted.


## devtools/DevToolsServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-devtools-devtoolsserver / effect/devtools/DevToolsServer | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-devtools-devtoolsserver: run is declared Effect<never,...,SocketServer> and accepts external devtools socket clients. There is no SocketServer platform adapter; this unbounded listener requires network IO and cannot be a terminating standalone fixture.


## eventlog/SqlEventJournal

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-eventlog-sqleventjournal / effect/eventlog/SqlEventJournal | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-eventlog-sqleventjournal: make/layer construct a SQL-backed EventJournal and require SqlClient. No concrete SQL driver or database is installed; journal database migrations and persistence IO are excluded.


## eventlog/SqlEventLogServerEncrypted

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-eventlog-sqleventlogserverencrypted / effect/eventlog/SqlEventLogServerEncrypted | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-eventlog-sqleventlogserverencrypted: makeStorage/layerStorage persist encrypted entries, remote identity and sequence state in SQL and require SqlClient. No SQL database/driver is installed; live persistence IO is excluded.


## eventlog/SqlEventLogServerUnencrypted

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-eventlog-sqleventlogserverunencrypted / effect/eventlog/SqlEventLogServerUnencrypted | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-eventlog-sqleventlogserverunencrypted: makeStorage/layerStorage construct SQL-backed unencrypted server storage and require SqlClient. No concrete database/driver is installed; this persistence backend cannot run without SQL IO.


## process/ChildProcessSpawner

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-process-childprocessspawner / effect/process/ChildProcessSpawner | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-process-childprocessspawner: The primary service method starts and controls operating-system child processes through a platform backend. No process adapter is installed and spawning is forbidden by the corpus constraints; command construction is covered separately.

| remaining-core-process--childprocessspawner / effect/process/ChildProcessSpawner | ready | not run | not run | — | 0/0 | — | — |

remaining-core-process--childprocessspawner: Documented handle/spawner constructors derive exit and line collection from fixed in-memory streams; the supplied spawn callback never creates an OS process.


## sql/SqlConnection

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-sql-sqlconnection / effect/sql/SqlConnection | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-sql-sqlconnection: This module exposes the driver-facing Connection service and contracts, without a concrete connection implementation. Executing compiled SQL requires a database driver/backend not installed in the Effect-only package.


## sql/SqlModel

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-sql-sqlmodel / effect/sql/SqlModel | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-sql-sqlmodel: Repository/resolver helpers derive insert/update/find/delete SQL and require SqlClient. End-to-end model persistence needs a concrete SQL driver/database absent from this package; model schema variants and standalone SQL compilation are covered separately.

| remaining-core-sql--sqlmodel / effect/sql/SqlModel | ready | not run | not run | — | 0/0 | — | — |

remaining-core-sql--sqlmodel: Expected-failure path validates repository input against the genuine Model id schema before any connection acquisition. The acquirer dies if called; no database is used. Successful database CRUD remains explicitly skipped in the backend case.


## workers/WorkerRunner

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-skipped-workers-workerrunner / effect/workers/WorkerRunner | skipped-needs-io | not run | not run | — | 0/0 | — | — |

namespace-skipped-workers-workerrunner: The only runtime service starts a platform-specific WorkerRunner. No browser/Node/Bun worker-runner platform is installed; exercising the actual message-port runtime requires a worker execution environment.


## socket

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-socket / effect/socket | ready | not run | not run | — | 0/0 | — | — |

## socket/Socket

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-socket-socket / effect/socket/Socket | ready | not run | not run | — | 0/0 | — | — |

## socket/SocketServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-socket-socketserver / effect/socket/SocketServer | ready | not run | not run | — | 0/0 | — | — |

## sql

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-sql / effect/sql | ready | not run | not run | — | 0/0 | — | — |

## sql/Migrator

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-sql-migrator / effect/sql/Migrator | ready | not run | not run | — | 0/0 | — | — |

## sql/SqlError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-sql-sqlerror / effect/sql/SqlError | ready | not run | not run | — | 0/0 | — | — |

## sql/SqlSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-sql-sqlschema / effect/sql/SqlSchema | ready | not run | not run | — | 0/0 | — | — |

## sql/Statement

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-sql-statement / effect/sql/Statement | ready | not run | not run | — | 0/0 | — | — |

## testing

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-testing / effect/testing | ready | not run | not run | — | 0/0 | — | — |

## testing/TestClock

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-testing-testclock / effect/testing/TestClock | ready | not run | not run | — | 0/0 | — | — |

## testing/TestConsole

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-testing-testconsole / effect/testing/TestConsole | ready | not run | not run | — | 0/0 | — | — |

## workers

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-workers / effect/workers | ready | not run | not run | — | 0/0 | — | — |

## workers/Transferable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-workers-transferable / effect/workers/Transferable | ready | not run | not run | — | 0/0 | — | — |

## workers/Worker

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-workers-worker / effect/workers/Worker | ready | not run | not run | — | 0/0 | — | — |

## workers/WorkerError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-workers-workererror / effect/workers/WorkerError | ready | not run | not run | — | 0/0 | — | — |

## workflow

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-workflow / effect/workflow | ready | not run | not run | — | 0/0 | — | — |

## workflow/Activity

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-workflow-activity / effect/workflow/Activity | ready | not run | not run | — | 0/0 | — | — |

## workflow/DurableClock

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-workflow-durableclock / effect/workflow/DurableClock | ready | not run | not run | — | 0/0 | — | — |

## workflow/DurableDeferred

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-workflow-durabledeferred / effect/workflow/DurableDeferred | ready | not run | not run | — | 0/0 | — | — |

## workflow/Workflow

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-workflow-workflow / effect/workflow/Workflow | ready | not run | not run | — | 0/0 | — | — |

## workflow/WorkflowEngine

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-workflow-workflowengine / effect/workflow/WorkflowEngine | ready | not run | not run | — | 0/0 | — | — |

## workflow/WorkflowProxy

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-workflow-workflowproxy / effect/workflow/WorkflowProxy | ready | not run | not run | — | 0/0 | — | — |

## workflow/WorkflowProxyServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-workflow-workflowproxyserver / effect/workflow/WorkflowProxyServer | ready | not run | not run | — | 0/0 | — | — |

## Differ

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-differ / effect/Differ | uncovered | not run | not run | — | 0/0 | — | — |

remaining-core-differ: Type-only contract: dist/Differ.d.ts exports only interface Differ<T, Patch>; dist/Differ.js contains export {}. No runtime primary API exists.


## eventlog/EventJournal

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-eventlog--eventjournal / effect/eventlog/EventJournal | ready | not run | not run | — | 0/0 | — | — |

remaining-core-eventlog--eventjournal: Imports fixed remote entries into the real memory journal, verifies de-duplication and sequence tracking. Never calls random makeEntryIdUnsafe/makeRemoteIdUnsafe or local write.


## eventlog/EventLog

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-eventlog--eventlog / effect/eventlog/EventLog | ready | not run | not run | — | 0/0 | — | — |

remaining-core-eventlog--eventlog: Pure event schema construction and fixed synthetic identity codec roundtrip; no identity generation, event ID sampling, or remote replication.


## eventlog/EventLogEncryption

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-eventlog--eventlogencryption / effect/eventlog/EventLogEncryption | ready | not run | not run | — | 0/0 | — | — |

remaining-core-eventlog--eventlogencryption: Deterministic SHA-256 hashing only. The declared public Web Crypto constructor is used; encrypt/generateIdentity paths that sample randomness are never called.


## eventlog/EventLogRemote

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-eventlog--eventlogremote / effect/eventlog/EventLogRemote | ready | not run | not run | — | 0/0 | — | — |

remaining-core-eventlog--eventlogremote: Constructs and scopes a real unencrypted remote, completes Hello over RpcTest, and registers it. Synthetic fixed Hello payload; authenticated write/change and cryptographic challenge generation are not exercised.


## eventlog/EventLogServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-eventlog--eventlogserver / effect/eventlog/EventLogServer | ready | not run | not run | — | 0/0 | — | — |

remaining-core-eventlog--eventlogserver: Executes the real auth middleware through an in-memory RPC; missing identity is recovered as Forbidden. No challenge creation, randomness, or network.


## eventlog/EventLogServerEncrypted

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-eventlog--eventlogserverencrypted / effect/eventlog/EventLogServerEncrypted | ready | not run | not run | — | 0/0 | — | — |

remaining-core-eventlog--eventlogserverencrypted: Public encrypted-entry constructor/schema codec and stable UUID rendering only. makeStorageMemory samples a remote UUID at construction (dist/EventLogServerEncrypted.js:168), so storage/replication paths are intentionally not run.


## eventlog/EventLogServerUnencrypted

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-eventlog--eventlogserverunencrypted / effect/eventlog/EventLogServerUnencrypted | ready | not run | not run | — | 0/0 | — | — |

remaining-core-eventlog--eventlogserverunencrypted: Actual store mapping layer resolves the configured store and returns a typed NotFound for another; no UUID creation, database or remote service.


## HKT

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-hkt / effect/HKT | uncovered | not run | not run | — | 0/0 | — | — |

remaining-core-hkt: Type-level HKT machinery: dist/HKT.d.ts declares URI as a unique symbol plus TypeClass, TypeLambda and Kind, but dist/HKT.js contains only export {}. URI is not a real runtime export; importing it would not be a valid compatibility probe.


## persistence/PersistedCache

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-persistence--persistedcache / effect/persistence/PersistedCache | ready | not run | not run | — | 0/0 | — | — |

## persistence/Redis

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-persistence--redis / effect/persistence/Redis | ready | not run | not run | — | 0/0 | — | — |

remaining-core-persistence--redis: Pure typed Lua-script descriptor only; no Redis connection or commands.


## Random

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-random / effect/Random | ready | not run | not run | — | 0/0 | — | — |

remaining-core-random: Empty input takes the NoSuchElementError branch before consulting Random or sampling: dist/Random.js choice lines212-214. No random numbers are generated.


## reactivity/AtomHttpApi

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-reactivity--atomhttpapi / effect/reactivity/AtomHttpApi | ready | not run | not run | — | 0/0 | — | — |

remaining-core-reactivity--atomhttpapi: A real typed API atom query completes over HttpClient.make with an in-memory request runner and fixed Web Response; records the encoded route, performs no fetch, and disables tracing.


## reactivity/AtomRpc

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-reactivity--atomrpc / effect/reactivity/AtomRpc | ready | not run | not run | — | 0/0 | — | — |

remaining-core-reactivity--atomrpc: A real AtomRpc query completes over the documented in-memory RpcTest client/server transport with schema-backed RPC handlers; tracing disabled, no sockets or network.


## reactivity/Hydration

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-reactivity--hydration / effect/reactivity/Hydration | ready | not run | not run | — | 0/0 | — | — |

remaining-core-reactivity--hydration: Hydrates fixed serialized state; intentionally avoids dehydrate, which reads Date.now internally.


## reactivity/Reactivity

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-reactivity--reactivity / effect/reactivity/Reactivity | ready | not run | not run | — | 0/0 | — | — |

## rpc/RpcClient

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-rpc--rpcclient / effect/rpc/RpcClient | ready | not run | not run | — | 0/0 | — | — |

remaining-core-rpc--rpcclient: Direct decoded client/server APIs exchange real requests and typed success/failure responses in memory; no transport IO and tracing disabled.


## rpc/RpcMiddleware

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-rpc--rpcmiddleware / effect/rpc/RpcMiddleware | ready | not run | not run | — | 0/0 | — | — |

remaining-core-rpc--rpcmiddleware: User-defined server middleware wraps an actual in-memory RPC and observes the completed handler; no remote IO.


## rpc/RpcServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-rpc--rpcserver / effect/rpc/RpcServer | ready | not run | not run | — | 0/0 | — | — |

remaining-core-rpc--rpcserver: Direct decoded client/server APIs exchange real requests and typed success/failure responses in memory; no transport IO and tracing disabled.


## rpc/RpcTest

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-rpc--rpctest / effect/rpc/RpcTest | ready | not run | not run | — | 0/0 | — | — |

remaining-core-rpc--rpctest: The documented in-memory transport executes a real streaming RPC and collects its three terminal values; no network or worker.


## rpc/Utils

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-rpc--utils / effect/rpc/Utils | ready | not run | not run | — | 0/0 | — | — |

remaining-core-rpc--utils: Exercises pre-run buffering, replay, live delivery and restoration after interruption using Deferred and documented forkScoped({startImmediately: true}) synchronization; no timer sleeps or transport.


## schema/SchemaAOTCompiler/Build

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-schema--schemaaotcompiler--build / effect/schema/SchemaAOTCompiler/Build | ready | not run | not run | — | 0/0 | — | — |

remaining-core-schema--schemaaotcompiler--build: Invalid loader result exercises deterministic BuildError validation before filesystem operations; provided no-op filesystem performs no IO.


## schema/SchemaCompiler

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-schema--schemacompiler / effect/schema/SchemaCompiler | ready | not run | not run | — | 0/0 | — | — |

remaining-core-schema--schemacompiler: Public registry installation using a genuine SchemaParser interpreter, resolved by a prior parse before replacement. SchemaCompiler.d.ts:188-195 explicitly specifies that already resolved parsers retain their entry; SchemaParser.js:827-830 resolves lazily on first invocation. No source patch, custom parser semantics, or compiler-error workaround.


## schema/SchemaCompiler/runtime

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-schema--schemacompiler--runtime / effect/schema/SchemaCompiler/runtime | uncovered | not run | not run | — | 0/0 | — | — |

remaining-core-schema--schemacompiler--runtime: Declaration-stripped internal support module: dist/schema/SchemaCompiler/runtime.d.ts is export {}. The JavaScript runtime object is annotated @internal and absent from the public type declaration, so no public typed primary API is available; not an import-only compatibility pass.


## schema/SchemaJITCompiler/enable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-schema--schemajitcompiler--enable / effect/schema/SchemaJITCompiler/enable | ready | not run | not run | — | 0/0 | — | — |

remaining-core-schema--schemajitcompiler--enable: Documented side-effect compiler installation is followed by real success/failure parsing, not import-only smoke; fallback is allowed by the public API.


## sql/SqlClient

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-sql--sqlclient / effect/sql/SqlClient | ready | not run | not run | — | 0/0 | — | — |

remaining-core-sql--sqlclient: Real SqlClient builds and compiles parameterized SQL without executing it. The acquirer fails if called, so this fixture cannot access a database.


## sql/SqlResolver

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-sql--sqlresolver / effect/sql/SqlResolver | ready | not run | not run | — | 0/0 | — | — |

remaining-core-sql--sqlresolver: Schema-aware ordered request batching with a deterministic in-memory execute callback; actual batching and row decoding are performed by Effect, no SQL driver.


## sql/SqlStream

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-sql--sqlstream / effect/sql/SqlStream | ready | not run | not run | — | 0/0 | — | — |

remaining-core-sql--sqlstream: Finite in-memory callback producer exercises stream emission and normal completion; no database, timer, or nondeterministic scheduling output.


## StandardSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-standardschema / effect/StandardSchema | uncovered | not run | not run | — | 0/0 | — | — |

remaining-core-standardschema: Type-only Standard Schema v1 contracts: dist/StandardSchema.d.ts exposes interfaces and type namespaces; dist/StandardSchema.js contains export {}. No runtime primary API exists.


## Stdio

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-stdio / effect/Stdio | ready | not run | not run | — | 0/0 | — | — |

remaining-core-stdio: Uses the documented process-local layerTest with draining sinks and empty input; no OS handles are opened.


## Terminal

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-terminal / effect/Terminal | ready | not run | not run | — | 0/0 | — | — |

remaining-core-terminal: Pure typed cancellation/error API only; interactive terminal service operations are not exercised.


## Types

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| remaining-core-types / effect/Types | uncovered | not run | not run | — | 0/0 | — | — |

remaining-core-types: Type-only utilities: dist/Types.d.ts exports type aliases, interfaces and type namespaces; dist/Types.js contains export {}. No runtime primary API exists.


## ai/internal/codec-transformer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--codec-transformer / effect/ai/internal/codec-transformer | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--codec-transformer: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpCore

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpcore / effect/ai/internal/mcpCore | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpcore: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpProtocol

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpprotocol / effect/ai/internal/mcpProtocol | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpprotocol: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpProtocol/v2024_11_05

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpprotocol--v2024_11_05 / effect/ai/internal/mcpProtocol/v2024_11_05 | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpprotocol--v2024_11_05: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpProtocol/v2025_03_26

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpprotocol--v2025_03_26 / effect/ai/internal/mcpProtocol/v2025_03_26 | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpprotocol--v2025_03_26: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpProtocol/v2025_06_18

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpprotocol--v2025_06_18 / effect/ai/internal/mcpProtocol/v2025_06_18 | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpprotocol--v2025_06_18: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpProtocol/v2025_11_25

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpprotocol--v2025_11_25 / effect/ai/internal/mcpProtocol/v2025_11_25 | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpprotocol--v2025_11_25: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpProtocol/v2026_07_28

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpprotocol--v2026_07_28 / effect/ai/internal/mcpProtocol/v2026_07_28 | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpprotocol--v2026_07_28: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpProtocolRegistry

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpprotocolregistry / effect/ai/internal/mcpProtocolRegistry | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpprotocolregistry: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpRuntime

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpruntime / effect/ai/internal/mcpRuntime | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpruntime: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpSchema/v2024_11_05

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpschema--v2024_11_05 / effect/ai/internal/mcpSchema/v2024_11_05 | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpschema--v2024_11_05: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpSchema/v2025_03_26

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpschema--v2025_03_26 / effect/ai/internal/mcpSchema/v2025_03_26 | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpschema--v2025_03_26: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpSchema/v2025_06_18

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpschema--v2025_06_18 / effect/ai/internal/mcpSchema/v2025_06_18 | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpschema--v2025_06_18: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpSchema/v2025_11_25

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpschema--v2025_11_25 / effect/ai/internal/mcpSchema/v2025_11_25 | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpschema--v2025_11_25: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpSchema/v2026_07_28

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpschema--v2026_07_28 / effect/ai/internal/mcpSchema/v2026_07_28 | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpschema--v2026_07_28: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/mcpStatefulRuntime

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--mcpstatefulruntime / effect/ai/internal/mcpStatefulRuntime | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--mcpstatefulruntime: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## ai/internal/structured-output

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-ai--internal--structured-output / effect/ai/internal/structured-output | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-ai--internal--structured-output: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## cli/HelpDoc

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-cli--helpdoc / effect/cli/HelpDoc | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-cli--helpdoc: Type-only public declaration has no runtime primary API to execute; recorded, not a compatibility pass.


## cluster/K8sTypes

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-cluster--k8stypes / effect/cluster/K8sTypes | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-cluster--k8stypes: Type-only public declaration has no runtime primary API to execute; recorded, not a compatibility pass.


## eventlog/internal/identityRootSecretDerivation

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-eventlog--internal--identityrootsecretderivation / effect/eventlog/internal/identityRootSecretDerivation | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-eventlog--internal--identityrootsecretderivation: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## http/FindMyWay/internal/router

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-http--findmyway--internal--router / effect/http/FindMyWay/internal/router | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-http--findmyway--internal--router: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## http/internal/compression

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-http--internal--compression / effect/http/internal/compression | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-http--internal--compression: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## http/internal/headers

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-http--internal--headers / effect/http/internal/headers | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-http--internal--headers: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## http/internal/httpBody

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-http--internal--httpbody / effect/http/internal/httpBody | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-http--internal--httpbody: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## http/internal/preResponseHandler

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-http--internal--preresponsehandler / effect/http/internal/preResponseHandler | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-http--internal--preresponsehandler: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## http-api/internal/html

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-http-api--internal--html / effect/http-api/internal/html | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-http-api--internal--html: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## http-api/internal/httpApiScalar

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-http-api--internal--httpapiscalar / effect/http-api/internal/httpApiScalar | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-http-api--internal--httpapiscalar: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## http-api/internal/httpApiSwagger

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-http-api--internal--httpapiswagger / effect/http-api/internal/httpApiSwagger | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-http-api--internal--httpapiswagger: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## http-api/internal/mediaType

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-http-api--internal--mediatype / effect/http-api/internal/mediaType | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-http-api--internal--mediatype: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## http-api/internal/path

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-http-api--internal--path / effect/http-api/internal/path | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-http-api--internal--path: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## observability/internal/otlpProtobuf

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-observability--internal--otlpprotobuf / effect/observability/internal/otlpProtobuf | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-observability--internal--otlpprotobuf: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## observability/internal/protobuf

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-observability--internal--protobuf / effect/observability/internal/protobuf | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-observability--internal--protobuf: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## workflow/internal/crypto

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| uncovered-workflow--internal--crypto / effect/workflow/internal/crypto | uncovered | not run | not run | — | 0/0 | — | — |

uncovered-workflow--internal--crypto: Published .d.ts exposes no callable/value API, although the wildcard permits this internal JS module; hidden JS exports cannot be tested against published types. Recorded as no-public-value-declaration, not a compatibility pass.


## Evidence and scope

- Complete raw stdout, stderr, command, status and timing: `reports/raw/`
- Exact toolchain, executable and lockfile hashes: `reports/provenance.json`
- Statement counts include the compiler program graph and unreached remainder, not just reachable Effect code.
- Empty source locations/hints mean unavailable, not absence of defects.
- Uncoded compiler crashes/timeouts are retained without invented SC codes.
