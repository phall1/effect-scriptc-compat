# Effect × scriptc coverage map

Generated: 2026-10-06T01:49:24.890Z · Partial: **true**

Effect **4.0.1** · scriptc **0.2.3** (v0.2.3, 52169979ee3fac98ad6651eb2a717fbbf4ac1f89) · Node **v24.19.0** · TypeScript **7.0.2** · aarch64-apple-darwin

> A successful build or green coverage footer is not compatibility when deferred sites remain. Static is a compiler classification; differentials determine observed equality. Pending and untested APIs are never implicitly compatible.

## Summary

```json
{
  "cases": 456,
  "modules": 414,
  "ready": 404,
  "completed": 323,
  "pending": 81,
  "caseTiers": {
    "static": 26,
    "deferred": 36,
    "dynamic-fallback": 0,
    "rejected": 261
  },
  "skippedNeedsIo": 14,
  "uncovered": 38,
  "moduleTiers": {
    "static": 26,
    "deferred": 34,
    "dynamic-fallback": 0,
    "rejected": 240,
    "pending": 64,
    "uncovered": 38,
    "skipped-needs-io": 12
  },
  "scCodesByCaseFrequency": {
    "SC3004": 254,
    "SC1090": 39,
    "SC2020": 37,
    "SC1043": 30,
    "SC2004": 4,
    "SC1101": 3,
    "SC1100": 3,
    "SC2011": 2,
    "SC1013": 2,
    "SC2012": 2,
    "SC2002": 1,
    "SC1080": 1,
    "SC2001": 1
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
| effect-fail / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| effect-fn / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| effect-fn-untraced / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| effect-gen / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| effect-log / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| effect-provide / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| effect-run-promise / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| effect-run-sync / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| effect-succeed / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| entrypoint-effect / effect/Effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| error-catch / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| error-or-else / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| resource-acquire-release / effect | ready | not run | not run | — | 0/0 | — | — |
| resource-scoped-use / effect | ready | not run | not run | — | 0/0 | — | — |

## Chunk

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| chunk-round-trip / effect | deferred | built | not run | 1496/0/1 | 7/0 | 1136800 | SC1043, SC1090, SC2020 |
| entrypoint-chunk / effect/Chunk | deferred | built | not run | 1496/0/1 | 7/0 | 1136752 | SC1043, SC1090, SC2020 |

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
| documented-http--httprouter / effect/http/HttpRouter | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpStaticServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-http--httpstaticserver / effect/http/HttpStaticServer | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

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
| documented-latch / effect/Latch | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## LayerMap

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-layermap / effect/LayerMap | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## LayerRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-layerref / effect/LayerRef | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Logger

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-logger / effect/Logger | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## LogLevel

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-loglevel / effect/LogLevel | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ManagedRuntime

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-managedruntime / effect/ManagedRuntime | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Match

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-match / effect/Match | deferred | built | not run | 1204/0/1 | 7/0 | 1170992 | SC1043, SC1090, SC2020 |

## Metric

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-metric / effect/Metric | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## MutableHashMap

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-mutablehashmap / effect/MutableHashMap | deferred | built | not run | 1013/0/1 | 7/0 | 1024136 | SC1043, SC1090, SC2020 |

## MutableHashSet

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-mutablehashset / effect/MutableHashSet | deferred | built | not run | 1071/0/1 | 7/0 | 1042472 | SC1043, SC1090, SC2020 |

## MutableList

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-mutablelist / effect/MutableList | deferred | built | not run | 1367/0/1 | 7/0 | 1100104 | SC1043, SC1090, SC2020 |

## MutableRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-mutableref / effect/MutableRef | deferred | built | not run | 837/0/1 | 1/0 | 967480 | SC2020 |

## Newtype

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-newtype / effect/Newtype | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## NonEmptyIterable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-nonemptyiterable / effect/NonEmptyIterable | rejected | refused | refused | 1503/0/2 | 7/0 | — | SC1043, SC1090, SC2020, SC3004 |

## observability/OtlpExporter

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-observability--otlpexporter / effect/observability/OtlpExporter | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## observability/PrometheusMetrics

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-observability--prometheusmetrics / effect/observability/PrometheusMetrics | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Optic

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-optic / effect/Optic | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Option

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-option / effect/Option | deferred | built | not run | 971/0/1 | 7/0 | 1006912 | SC1043, SC1090, SC2020 |

## Order

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-order / effect/Order | static | built | not run | 131/0/0 | 0/0 | 333904 | — |

## Ordering

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ordering / effect/Ordering | rejected | refused | refused | 73/0/2 | 0/0 | — | SC2011, SC2001 |

## Path

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-path / effect/Path | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## persistence/RateLimiter

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-persistence--ratelimiter / effect/persistence/RateLimiter | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Pool

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-pool / effect/Pool | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Predicate

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-predicate / effect/Predicate | static | built | not run | 82/0/0 | 0/0 | 333032 | — |

## PubSub

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-pubsub / effect/PubSub | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Pull

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-pull / effect/Pull | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Queue

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-queue / effect/Queue | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## RcMap

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-rcmap / effect/RcMap | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## RcRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-rcref / effect/RcRef | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## reactivity/Atom

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-reactivity--atom / effect/reactivity/Atom | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Record

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-record / effect/Record | deferred | built | not run | 1042/0/1 | 7/0 | 1044128 | SC1043, SC1090, SC2020 |

## Redacted

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-redacted / effect/Redacted | deferred | built | not run | 838/0/1 | 1/0 | 967568 | SC2020 |

## Reducer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-reducer / effect/Reducer | static | built | not run | 9/0/0 | 0/0 | 296240 | — |

## Ref

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-ref / effect/Ref | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## References

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-references / effect/References | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## RegExp

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-regexp / effect/RegExp | rejected | refused | refused | 64/0/1 | 0/1 | — | SC1090, SC2020 |

## Request

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-request / effect/Request | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## RequestResolver

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-requestresolver / effect/RequestResolver | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Result

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-result / effect/Result | deferred | built | not run | 916/0/1 | 7/0 | 1006048 | SC1043, SC1090, SC2020 |

## Runtime

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-runtime / effect/Runtime | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## SchemaAST

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-schemaast / effect/SchemaAST | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## SchemaGetter

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-schemagetter / effect/SchemaGetter | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## SchemaIssue

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-schemaissue / effect/SchemaIssue | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## SchemaRepresentation

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-schemarepresentation / effect/SchemaRepresentation | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## SchemaTransformation

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-schematransformation / effect/SchemaTransformation | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Scope

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-scope / effect/Scope | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Semaphore

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-semaphore / effect/Semaphore | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Sink

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-sink / effect/Sink | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Struct

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-struct / effect/Struct | static | built | not run | 170/0/0 | 0/0 | 368736 | — |

## SubscriptionRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-subscriptionref / effect/SubscriptionRef | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Symbol

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-symbol / effect/Symbol | static | built | not run | 61/0/0 | 0/0 | 315264 | — |

## testing/TestSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-testing--testschema / effect/testing/TestSchema | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Tracer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-tracer / effect/Tracer | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Trie

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-trie / effect/Trie | deferred | built | not run | 1332/0/1 | 7/0 | 1135072 | SC1043, SC1090, SC2020 |

## Tuple

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-tuple / effect/Tuple | static | built | not run | 171/0/0 | 0/0 | 334208 | — |

## TxChunk

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txchunk / effect/TxChunk | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## TxDeferred

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txdeferred / effect/TxDeferred | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## TxHashMap

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txhashmap / effect/TxHashMap | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## TxHashSet

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txhashset / effect/TxHashSet | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## TxPriorityQueue

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txpriorityqueue / effect/TxPriorityQueue | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## TxPubSub

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txpubsub / effect/TxPubSub | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## TxQueue

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txqueue / effect/TxQueue | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## TxReentrantLock

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txreentrantlock / effect/TxReentrantLock | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## TxRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txref / effect/TxRef | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## TxSemaphore

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txsemaphore / effect/TxSemaphore | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## TxSubscriptionRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-txsubscriptionref / effect/TxSubscriptionRef | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Unify

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-unify / effect/Unify | static | built | not run | 65/0/0 | 0/0 | 315776 | — |

## Utils

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-utils / effect/Utils | static | built | not run | 13/0/0 | 0/0 | 297056 | — |

## workflow/DurableQueue

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| documented-workflow--durablequeue / effect/workflow/DurableQueue | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Cause

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-cause / effect/Cause | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| error-cause / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Fiber

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-fiber / effect/Fiber | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| fiber-interrupt / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## HashMap

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-hashmap / effect/HashMap | rejected | refused | refused | 1852/0/3 | 7/59 | — | SC1043, SC1090, SC2020, SC1013, SC1100, SC1101, SC2004 |
| hashmap-round-trip / effect | rejected | refused | refused | 1852/0/3 | 7/59 | — | SC1043, SC1090, SC2020, SC1013, SC1100, SC1101, SC2004 |

## HashSet

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-hashset / effect/HashSet | deferred | built | not run | 1795/0/2 | 7/0 | 1533920 | SC1043, SC1090, SC2020 |
| hashset-round-trip / effect | deferred | built | not run | 1795/0/2 | 7/0 | 1533968 | SC1043, SC1090, SC2020 |

## Layer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-layer / effect/Layer | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| layer-effect / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| layer-succeed / effect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Schedule

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-schedule / effect/Schedule | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| retry-exhausted / effect | ready | not run | not run | — | 0/0 | — | — |
| retry-success / effect | ready | not run | not run | — | 0/0 | — | — |

## Schema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-schema / effect/Schema | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| schema-class / effect | ready | not run | not run | — | 0/0 | — | — |
| schema-decode / effect | ready | not run | not run | — | 0/0 | — | — |
| schema-encode / effect | ready | not run | not run | — | 0/0 | — | — |
| schema-failure / effect | ready | not run | not run | — | 0/0 | — | — |

## Stream

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| entrypoint-stream / effect/Stream | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| stream-failing-element / effect | ready | not run | not run | — | 0/0 | — | — |
| stream-from-iterable / effect | ready | not run | not run | — | 0/0 | — | — |
| stream-map / effect | ready | not run | not run | — | 0/0 | — | — |

## Arbitrary

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-arbitrary / effect/Arbitrary | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

module-arbitrary: Only constant arbitrary construction and its documented guard are exercised; random generation is intentionally excluded.


## Array

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-array / effect/Array | deferred | built | not run | 1299/0/1 | 7/0 | 1081856 | SC1043, SC1090, SC2020 |

## BigInt

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-bigint / effect/BigInt | deferred | built | not run | 1020/0/1 | 7/0 | 1008960 | SC1043, SC1090, SC2020 |

## Brand

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-brand / effect/Brand | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ByteSize

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-bytesize / effect/ByteSize | deferred | built | not run | 1099/0/2 | 8/0 | 1139728 | SC1043, SC1090, SC2020 |

## ChannelSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-channelschema / effect/ChannelSchema | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Effectable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-effectable / effect/Effectable | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## FileSystem

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-filesystem / effect/FileSystem | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## HashRing

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-hashring / effect/HashRing | deferred | built | not run | 1188/0/1 | 7/0 | 1045872 | SC1043, SC1090, SC2020 |

## http/FindMyWay/internal/queryString

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--findmyway--internal--querystring / effect/http/FindMyWay/internal/queryString | deferred | built | not run | 135/0/1 | 1/0 | 426432 | SC1090 |

## http/HttpEffect

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--httpeffect / effect/http/HttpEffect | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpIncomingMessage

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--httpincomingmessage / effect/http/HttpIncomingMessage | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpMiddleware

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--httpmiddleware / effect/http/HttpMiddleware | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpPlatform

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--httpplatform / effect/http/HttpPlatform | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpServerRespondable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--httpserverrespondable / effect/http/HttpServerRespondable | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/internal/mimeTypes

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--internal--mimetypes / effect/http/internal/mimeTypes | static | built | not run | 4/0/0 | 0/0 | 1627200 | — |

## http/Multipart

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipart / effect/http/Multipart | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/MultipartParser

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser / effect/http/MultipartParser | deferred | built | not run | 1545/0/4 | 10/0 | 1447936 | SC1043, SC1090, SC2020 |

## http/MultipartParser/HeadersParser

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser--headersparser / effect/http/MultipartParser/HeadersParser | static | built | not run | 144/0/0 | 0/0 | 533080 | — |

## http/MultipartParser/internal/contentType

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser--internal--contenttype / effect/http/MultipartParser/internal/contentType | static | built | not run | 34/0/0 | 0/0 | 314704 | — |

## http/MultipartParser/internal/headers

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser--internal--headers / effect/http/MultipartParser/internal/headers | static | built | not run | 143/0/0 | 0/0 | 532208 | — |

## http/MultipartParser/internal/multipart

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser--internal--multipart / effect/http/MultipartParser/internal/multipart | deferred | built | not run | 1537/0/3 | 9/0 | 1447472 | SC1043, SC1090, SC2020 |

## http/MultipartParser/internal/search

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser--internal--search / effect/http/MultipartParser/internal/search | deferred | built | not run | 84/0/1 | 1/0 | 338064 | SC2020 |

## http/MultipartParser/Search

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http--multipartparser--search / effect/http/MultipartParser/Search | deferred | built | not run | 85/0/1 | 1/0 | 356088 | SC2020 |

## http-api/HttpApiBuilder

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http-api--httpapibuilder / effect/http-api/HttpApiBuilder | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http-api/HttpApiMiddleware

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http-api--httpapimiddleware / effect/http-api/HttpApiMiddleware | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http-api/HttpApiScalar

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http-api--httpapiscalar / effect/http-api/HttpApiScalar | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http-api/HttpApiSwagger

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http-api--httpapiswagger / effect/http-api/HttpApiSwagger | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http-api/HttpApiTest

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-http-api--httpapitest / effect/http-api/HttpApiTest | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Number

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-number / effect/Number | deferred | built | not run | 1009/0/1 | 7/0 | 1008528 | SC1043, SC1090, SC2020 |

## observability/internal/otlpEnv

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-observability--internal--otlpenv / effect/observability/internal/otlpEnv | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## observability/Otlp

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-observability--otlp / effect/observability/Otlp | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## observability/OtlpLogger

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-observability--otlplogger / effect/observability/OtlpLogger | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## observability/OtlpMetrics

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-observability--otlpmetrics / effect/observability/OtlpMetrics | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## observability/OtlpTracer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-observability--otlptracer / effect/observability/OtlpTracer | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

module-observability--otlptracer: Exercises unsampled span lifecycle and attributes with explicit fixed nanoseconds; no random trace/span IDs are read or generated, and no transport export is expected.


## PartitionedSemaphore

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-partitionedsemaphore / effect/PartitionedSemaphore | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Pipeable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-pipeable / effect/Pipeable | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## PlatformError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-platformerror / effect/PlatformError | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## PrimaryKey

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-primarykey / effect/PrimaryKey | static | built | not run | 59/0/0 | 0/0 | 221904 | — |

## Redactable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-redactable / effect/Redactable | static | built | not run | 92/0/0 | 0/0 | 357152 | — |

## Resource

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-resource / effect/Resource | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Scheduler

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-scheduler / effect/Scheduler | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## SchemaParser

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-schemaparser / effect/SchemaParser | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ScopedCache

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-scopedcache / effect/ScopedCache | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ScopedRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-scopedref / effect/ScopedRef | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## String

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-string / effect/String | deferred | built | not run | 1115/0/2 | 8/0 | 1120688 | SC1043, SC2011, SC1090, SC2020 |

## SynchronizedRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-synchronizedref / effect/SynchronizedRef | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## Take

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-take / effect/Take | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## UndefinedOr

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| module-undefinedor / effect/UndefinedOr | static | built | not run | 88/0/0 | 0/0 | 316416 | — |

## ai

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai / effect/ai | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/AnthropicStructuredOutput

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-anthropicstructuredoutput / effect/ai/AnthropicStructuredOutput | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/Decision

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-decision / effect/ai/Decision | static | built | not run | 16/0/0 | 0/0 | 221832 | — |

## ai/DecisionModel

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-decisionmodel / effect/ai/DecisionModel | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/EmbeddingModel

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-embeddingmodel / effect/ai/EmbeddingModel | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/McpProtocol

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-mcpprotocol / effect/ai/McpProtocol | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/McpSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-mcpschema / effect/ai/McpSchema | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/McpServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-mcpserver / effect/ai/McpServer | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/OpenAiStructuredOutput

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-openaistructuredoutput / effect/ai/OpenAiStructuredOutput | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/Prompt

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-prompt / effect/ai/Prompt | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## ai/ResponseIdTracker

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-ai-responseidtracker / effect/ai/ResponseIdTracker | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cli

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli / effect/cli | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cli/Argument

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli-argument / effect/cli/Argument | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cli/CliConfig

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli-cliconfig / effect/cli/CliConfig | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cli/Command

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli-command / effect/cli/Command | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cli/Completions

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli-completions / effect/cli/Completions | static | built | not run | 509/0/0 | 0/0 | 501736 | — |

## cli/Flag

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli-flag / effect/cli/Flag | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cli/GlobalFlag

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cli-globalflag / effect/cli/GlobalFlag | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster / effect/cluster | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/ClusterCron

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-clustercron / effect/cluster/ClusterCron | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/ClusterError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-clustererror / effect/cluster/ClusterError | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/ClusterMetrics

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-clustermetrics / effect/cluster/ClusterMetrics | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/ClusterSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-clusterschema / effect/cluster/ClusterSchema | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/ClusterWorkflowEngine

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-clusterworkflowengine / effect/cluster/ClusterWorkflowEngine | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/DeliverAt

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-deliverat / effect/cluster/DeliverAt | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/Entity

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entity / effect/cluster/Entity | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/EntityAddress

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entityaddress / effect/cluster/EntityAddress | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/EntityId

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entityid / effect/cluster/EntityId | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/EntityProxy

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entityproxy / effect/cluster/EntityProxy | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/EntityProxyServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entityproxyserver / effect/cluster/EntityProxyServer | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/EntityResource

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entityresource / effect/cluster/EntityResource | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/EntityType

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-entitytype / effect/cluster/EntityType | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/Envelope

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-envelope / effect/cluster/Envelope | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/K8sHttpClient

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-k8shttpclient / effect/cluster/K8sHttpClient | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/MachineId

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-machineid / effect/cluster/MachineId | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/Message

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-message / effect/cluster/Message | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/MessageStorage

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-messagestorage / effect/cluster/MessageStorage | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/Reply

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-reply / effect/cluster/Reply | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/Runner

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-runner / effect/cluster/Runner | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/RunnerAddress

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-runneraddress / effect/cluster/RunnerAddress | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/RunnerHealth

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-runnerhealth / effect/cluster/RunnerHealth | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/Runners

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-runners / effect/cluster/Runners | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/RunnerServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-runnerserver / effect/cluster/RunnerServer | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/RunnerStorage

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-runnerstorage / effect/cluster/RunnerStorage | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/ShardId

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-shardid / effect/cluster/ShardId | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/Sharding

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-sharding / effect/cluster/Sharding | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/ShardingConfig

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-shardingconfig / effect/cluster/ShardingConfig | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/ShardingRegistrationEvent

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-shardingregistrationevent / effect/cluster/ShardingRegistrationEvent | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/Singleton

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-singleton / effect/cluster/Singleton | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/SingletonAddress

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-singletonaddress / effect/cluster/SingletonAddress | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/Snowflake

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-snowflake / effect/cluster/Snowflake | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## cluster/TestRunner

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-cluster-testrunner / effect/cluster/TestRunner | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## devtools

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-devtools / effect/devtools | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## devtools/DevToolsClient

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-devtools-devtoolsclient / effect/devtools/DevToolsClient | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## devtools/DevToolsSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-devtools-devtoolsschema / effect/devtools/DevToolsSchema | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## encoding

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding / effect/encoding | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## encoding/Base64

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-base64 / effect/encoding/Base64 | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## encoding/Base64Url

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-base64url / effect/encoding/Base64Url | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## encoding/EncodingError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-encodingerror / effect/encoding/EncodingError | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## encoding/Hex

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-hex / effect/encoding/Hex | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## encoding/Ini

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-ini / effect/encoding/Ini | deferred | built | not run | 87/0/1 | 1/0 | 408680 | SC1090 |

## encoding/Ndjson

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-ndjson / effect/encoding/Ndjson | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## encoding/SchemaBinary

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-schemabinary / effect/encoding/SchemaBinary | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## encoding/Sse

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-sse / effect/encoding/Sse | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## encoding/Toml

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-toml / effect/encoding/Toml | deferred | built | not run | 554/0/10 | 11/0 | 606504 | SC2012, SC1090 |

## encoding/Yaml

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-encoding-yaml / effect/encoding/Yaml | deferred | built | not run | 677/0/8 | 13/0 | 628072 | SC2012, SC1090, SC2004 |

## eventlog

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-eventlog / effect/eventlog | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## eventlog/Event

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-eventlog-event / effect/eventlog/Event | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## eventlog/EventGroup

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-eventlog-eventgroup / effect/eventlog/EventGroup | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## eventlog/EventLogMessage

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-eventlog-eventlogmessage / effect/eventlog/EventLogMessage | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## eventlog/EventLogSessionAuth

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-eventlog-eventlogsessionauth / effect/eventlog/EventLogSessionAuth | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http / effect/http | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http-api

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api / effect/http-api | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http-api/HttpApi

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapi / effect/http-api/HttpApi | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http-api/HttpApiClient

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapiclient / effect/http-api/HttpApiClient | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http-api/HttpApiEndpoint

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapiendpoint / effect/http-api/HttpApiEndpoint | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http-api/HttpApiError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapierror / effect/http-api/HttpApiError | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http-api/HttpApiGroup

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapigroup / effect/http-api/HttpApiGroup | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http-api/HttpApiSchema

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapischema / effect/http-api/HttpApiSchema | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http-api/HttpApiSecurity

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-httpapisecurity / effect/http-api/HttpApiSecurity | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http-api/OpenApi

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-api-openapi / effect/http-api/OpenApi | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/Cookies

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-cookies / effect/http/Cookies | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/Etag

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-etag / effect/http/Etag | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/FetchHttpClient

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-fetchhttpclient / effect/http/FetchHttpClient | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/FindMyWay

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-findmyway / effect/http/FindMyWay | deferred | built | not run | 635/0/1 | 1/0 | 697192 | SC1090 |

## http/Headers

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-headers / effect/http/Headers | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpBody

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpbody / effect/http/HttpBody | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpClient

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpclient / effect/http/HttpClient | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpClientError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpclienterror / effect/http/HttpClientError | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpClientRequest

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpclientrequest / effect/http/HttpClientRequest | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpClientResponse

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpclientresponse / effect/http/HttpClientResponse | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpMethod

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpmethod / effect/http/HttpMethod | static | built | not run | 4/0/0 | 0/0 | 92200 | — |

## http/HttpServer

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpserver / effect/http/HttpServer | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpServerError

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpservererror / effect/http/HttpServerError | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpServerRequest

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpserverrequest / effect/http/HttpServerRequest | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpServerResponse

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpserverresponse / effect/http/HttpServerResponse | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/HttpStatus

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httpstatus / effect/http/HttpStatus | static | built | not run | 3/0/0 | 0/0 | 238088 | — |

## http/HttpTraceContext

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-httptracecontext / effect/http/HttpTraceContext | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/Mime

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-mime / effect/http/Mime | deferred | built | not run | 1007/0/1 | 7/0 | 2558704 | SC1043, SC1090, SC2020 |

## http/Template

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-template / effect/http/Template | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/Url

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-url / effect/http/Url | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## http/UrlParams

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-http-urlparams / effect/http/UrlParams | deferred | built | not run | 1338/0/3 | 9/0 | 1168456 | SC1043, SC1090, SC2004, SC2020 |

## net

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-net / effect/net | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## net/IpInterface

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-net-ipinterface / effect/net/IpInterface | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## net/IpNetwork

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-net-ipnetwork / effect/net/IpNetwork | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## net/NetAddress

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-net-netaddress / effect/net/NetAddress | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## observability

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-observability / effect/observability | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## observability/OtlpResource

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-observability-otlpresource / effect/observability/OtlpResource | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## observability/OtlpSerialization

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-observability-otlpserialization / effect/observability/OtlpSerialization | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## persistence

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-persistence / effect/persistence | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## persistence/KeyValueStore

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-persistence-keyvaluestore / effect/persistence/KeyValueStore | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## persistence/Persistable

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-persistence-persistable / effect/persistence/Persistable | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| remaining-core-persistence--persistable / effect/persistence/Persistable | ready | not run | not run | — | 0/0 | — | — |

## persistence/PersistedQueue

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-persistence-persistedqueue / effect/persistence/PersistedQueue | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| remaining-core-persistence--persistedqueue / effect/persistence/PersistedQueue | ready | not run | not run | — | 0/0 | — | — |

remaining-core-persistence--persistedqueue: In-memory store, TestClock, and explicit queue IDs; no persistence IO, wall clock, UUID sampling, or waits on empty queue.


## persistence/Persistence

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-persistence-persistence / effect/persistence/Persistence | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
| remaining-core-persistence--persistence / effect/persistence/Persistence | ready | not run | not run | — | 0/0 | — | — |

## process

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-process / effect/process | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## process/ChildProcess

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-process-childprocess / effect/process/ChildProcess | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## reactivity

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-reactivity / effect/reactivity | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## reactivity/AsyncResult

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-reactivity-asyncresult / effect/reactivity/AsyncResult | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## reactivity/AtomRef

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-reactivity-atomref / effect/reactivity/AtomRef | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

## reactivity/AtomRegistry

| Case / public entrypoint | Status / tier | Static build | Dynamic retry | Counts S/D/U | Deferred sites S/D | Binary bytes | SC codes |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| namespace-reactivity-atomregistry / effect/reactivity/AtomRegistry | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |

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
| namespace-rpc-rpcclienterror / effect/rpc/RpcClientError | rejected | refused | refused | ?/?/? | 0/0 | — | SC3004 |
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
