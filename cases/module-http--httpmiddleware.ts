// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as HttpMiddleware from "effect/http/HttpMiddleware"
import { Effect } from "effect"
import { HttpEffect, HttpServerResponse } from "effect/http"
const handler = HttpEffect.toWebHandler(Effect.succeed(HttpServerResponse.text("cors")).pipe(HttpMiddleware.cors({ allowedOrigins: ["https://client.test"] })))
const response = await handler(new Request("https://example.test/", { headers: { origin: "https://client.test" } }))
console.log(JSON.stringify([response.headers.get("access-control-allow-origin"), await response.text()]))
