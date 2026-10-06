// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as HttpIncomingMessage from "effect/http/HttpIncomingMessage"
import { Effect, Schema } from "effect"
import { HttpServerRequest } from "effect/http"
const request = HttpServerRequest.fromWeb(new Request("https://example.test/", { method: "POST", body: '{"value":42}', headers: { "content-type": "application/json" } }))
console.log(JSON.stringify(await Effect.runPromise(HttpIncomingMessage.schemaBodyJson(Schema.Struct({ value: Schema.Number }))(request))))
