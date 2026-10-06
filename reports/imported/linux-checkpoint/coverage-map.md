# Partial Effect × scriptc checkpoint

Saved progress from completed host observations. Pending cases are unmeasured, not compatible or rejected. See the differential report for executed binaries and the upstream index for verified packets.

```json
{
  "inventoryCases": 456,
  "ready": 404,
  "completed": 122,
  "pending": 282,
  "uncovered": 38,
  "skippedNeedsIo": 14,
  "caseTiers": {
    "static": 16,
    "deferred": 23,
    "dynamic-fallback": 0,
    "rejected": 83
  }
}
```

| Case | Tier | SC codes |
| --- | --- | --- |
| callback-microtask | rejected | SC3004 |
| chunk-round-trip | deferred | SC1043, SC1090, SC2020 |
| concurrency-all | rejected | SC3004 |
| concurrency-for-each | rejected | SC3004 |
| concurrency-race | rejected | SC3004 |
| concurrency-timeout | rejected | SC3004 |
| documented-ai--aierror | rejected | SC3004 |
| documented-ai--chat | rejected | SC3004 |
| documented-ai--idgenerator | rejected | SC3004 |
| documented-ai--languagemodel | rejected | SC3004 |
| documented-ai--model | rejected | SC3004 |
| documented-ai--response | rejected | SC3004 |
| documented-ai--telemetry | rejected | SC3004 |
| documented-ai--tokenizer | rejected | SC3004 |
| documented-ai--tool | rejected | SC3004 |
| documented-ai--toolkit | rejected | SC3004 |
| documented-bigdecimal | deferred | SC1043, SC1090, SC2020 |
| documented-boolean | rejected | SC1090 |
| documented-cache | rejected | SC3004 |
| documented-channel | rejected | SC3004 |
| documented-cli--clierror | rejected | SC3004 |
| documented-cli--clioutput | rejected | SC3004 |
| documented-cli--param | rejected | SC3004 |
| documented-cli--primitive | rejected | SC3004 |
| documented-cli--prompt | rejected | SC3004 |
| documented-clock | rejected | SC3004 |
| documented-combiner | static |  |
| documented-config | rejected | SC3004 |
| documented-configprovider | rejected | SC3004 |
| documented-console | rejected | SC3004 |
| documented-context | rejected | SC3004 |
| documented-cron | rejected | SC3004 |
| documented-crypto | rejected | SC3004 |
| documented-data | rejected | SC3004 |
| documented-datetime | rejected | SC3004 |
| documented-deferred | rejected | SC3004 |
| documented-duration | deferred | SC1043, SC1090, SC2002, SC2020 |
| documented-equal | rejected | SC1101, SC1090, SC2020, SC1100 |
| documented-equivalence | static |  |
| documented-errorreporter | rejected | SC3004 |
| documented-executionplan | rejected | SC3004 |
| documented-exit | rejected | SC3004 |
| documented-fiberhandle | rejected | SC3004 |
| documented-fibermap | rejected | SC3004 |
| documented-fiberset | rejected | SC3004 |
| documented-filter | deferred | SC1043, SC1090, SC2020 |
| documented-formatter | static |  |
| documented-function | static |  |
| documented-graph | rejected | SC3004 |
| documented-hash | deferred | SC1043, SC2020, SC1090 |
| documented-http--httprouter | rejected | SC3004 |
| documented-http--httpstaticserver | rejected | SC3004 |
| documented-inspectable | rejected | SC1090, SC1080, SC2020 |
| documented-iterable | deferred | SC1043, SC1090, SC2020 |
| documented-jsonpatch | static |  |
| documented-jsonpointer | static |  |
| documented-jsonschema | static |  |
| documented-latch | rejected | SC3004 |
| documented-layermap | rejected | SC3004 |
| documented-layerref | rejected | SC3004 |
| documented-logger | rejected | SC3004 |
| documented-loglevel | rejected | SC3004 |
| documented-managedruntime | rejected | SC3004 |
| documented-match | deferred | SC1043, SC1090, SC2020 |
| documented-metric | rejected | SC3004 |
| documented-mutablehashmap | deferred | SC1043, SC1090, SC2020 |
| documented-mutablehashset | deferred | SC1043, SC1090, SC2020 |
| documented-mutablelist | deferred | SC1043, SC1090, SC2020 |
| documented-mutableref | deferred | SC2020 |
| documented-newtype | rejected | SC3004 |
| documented-nonemptyiterable | rejected | SC1043, SC1090, SC2020, SC3004 |
| documented-observability--otlpexporter | rejected | SC3004 |
| documented-observability--prometheusmetrics | rejected | SC3004 |
| documented-optic | rejected | SC3004 |
| documented-option | deferred | SC1043, SC1090, SC2020 |
| documented-order | static |  |
| documented-ordering | rejected | SC2011, SC2001 |
| documented-predicate | static |  |
| module-arbitrary | rejected | SC3004 |
| module-array | deferred | SC1043, SC1090, SC2020 |
| module-bigint | deferred | SC1043, SC1090, SC2020 |
| module-brand | rejected | SC3004 |
| module-bytesize | deferred | SC1043, SC1090, SC2020 |
| module-channelschema | rejected | SC3004 |
| module-effectable | rejected | SC3004 |
| module-filesystem | rejected | SC3004 |
| module-hashring | deferred | SC1043, SC1090, SC2020 |
| module-http--findmyway--internal--querystring | deferred | SC1090 |
| module-http--httpeffect | rejected | SC3004 |
| module-http--httpincomingmessage | rejected | SC3004 |
| module-http--httpmiddleware | rejected | SC3004 |
| module-http--httpplatform | rejected | SC3004 |
| module-http--httpserverrespondable | rejected | SC3004 |
| module-http--internal--mimetypes | static |  |
| module-http--multipart | rejected | SC3004 |
| module-http--multipartparser | deferred | SC1043, SC1090, SC2020 |
| module-http--multipartparser--headersparser | static |  |
| module-http--multipartparser--internal--contenttype | static |  |
| module-http--multipartparser--internal--headers | static |  |
| module-http--multipartparser--internal--multipart | deferred | SC1043, SC1090, SC2020 |
| module-http--multipartparser--internal--search | deferred | SC2020 |
| module-http--multipartparser--search | deferred | SC2020 |
| module-number | deferred | SC1043, SC1090, SC2020 |
| module-partitionedsemaphore | rejected | SC3004 |
| module-pipeable | rejected | SC3004 |
| module-platformerror | rejected | SC3004 |
| module-primarykey | static |  |
| module-redactable | static |  |
| module-resource | rejected | SC3004 |
| module-scheduler | rejected | SC3004 |
| module-schemaparser | rejected | SC3004 |
| module-scopedcache | rejected | SC3004 |
| module-scopedref | rejected | SC3004 |
| module-string | deferred | SC1043, SC2011, SC1090, SC2020 |
| module-synchronizedref | rejected | SC3004 |
| module-take | rejected | SC3004 |
| module-undefinedor | static |  |
| namespace-ai-decisionmodel | rejected | SC3004 |
| namespace-ai-embeddingmodel | rejected | SC3004 |
| namespace-ai-mcpprotocol | rejected | SC3004 |
| namespace-ai-mcpserver | rejected | SC3004 |
| namespace-cli-globalflag | rejected | SC3004 |

A green build with deferred sites is not compatibility. Full raw evidence is under reports/raw.
