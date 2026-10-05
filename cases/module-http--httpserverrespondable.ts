// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as HttpServerRespondable from "effect/http/HttpServerRespondable"
import { Effect } from "effect"
import { HttpServerResponse } from "effect/http"
const value = { [HttpServerRespondable.symbol]: () => Effect.succeed(HttpServerResponse.text("respondable", { status: 201 })) }
const response = await Effect.runPromise(HttpServerRespondable.toResponse(value))
console.log(JSON.stringify([response.status, response.body._tag]))
