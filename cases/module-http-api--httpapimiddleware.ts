// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as HttpApiMiddleware from "effect/http-api/HttpApiMiddleware"
import { Effect, Layer, Schema } from "effect"
import { HttpServer } from "effect/http"
import { HttpApi, HttpApiGroup, HttpApiEndpoint, HttpApiBuilder, HttpApiTest } from "effect/http-api"
class Checked extends HttpApiMiddleware.Service<Checked>()("Checked") {}
const events: string[] = []
const api = HttpApi.make("MiddlewareApi").add(HttpApiGroup.make("hello").add(HttpApiEndpoint.get("read", "/hello", { success: Schema.String })).middleware(Checked))
const handlers = HttpApiBuilder.group(api, "hello", group => group.handle("read", () => Effect.succeed("hello-api")))
const middleware = Layer.succeed(Checked, http => Effect.andThen(Effect.sync(() => { events.push("checked") }), http))
const program = Effect.scoped(Effect.gen(function*() {
  const client = yield* HttpApiTest.groups(api, ["hello"])
  return yield* client.hello.read()
})).pipe(Effect.provide(handlers), Effect.provide(middleware), Effect.provide(HttpServer.layerServices))
console.log(JSON.stringify([await Effect.runPromise(program), events]))
