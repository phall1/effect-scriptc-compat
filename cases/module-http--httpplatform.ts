// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as HttpPlatform from "effect/http/HttpPlatform"
import { Effect } from "effect"
import { HttpServerResponse } from "effect/http"
const compression = HttpPlatform.makeCompressionWeb({ algorithms: ["gzip"], transform: () => stream => stream })
const response = await Effect.runPromise(compression.compressResponse(HttpServerResponse.text("fixed"), "gzip"))
console.log(JSON.stringify([response.status, response.headers["content-encoding"]]))
