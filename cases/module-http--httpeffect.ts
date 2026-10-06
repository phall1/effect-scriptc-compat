// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as HttpEffect from "effect/http/HttpEffect"
import { Effect } from "effect"
import { HttpServerResponse } from "effect/http"
const handler = HttpEffect.toWebHandler(Effect.succeed(HttpServerResponse.text("handled")))
const response = await handler(new Request("https://example.test/"))
console.log(JSON.stringify([response.status, await response.text()]))
