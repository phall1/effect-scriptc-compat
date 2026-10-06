// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as HttpApiBuilder from "effect/http-api/HttpApiBuilder"
import { HttpApi, HttpApiGroup, HttpApiEndpoint, HttpApiTest } from "effect/http-api"
import { Effect, Schema } from "effect"
import { HttpServer } from "effect/http"
const api = HttpApi.make("TestApi").add(HttpApiGroup.make("hello").add(HttpApiEndpoint.get("read", "/hello", { success: Schema.String })))
const handlers = HttpApiBuilder.group(api, "hello", group => group.handle("read", () => Effect.succeed("hello-api")))
const program = Effect.scoped(Effect.gen(function*() {
  const client = yield* HttpApiTest.groups(api, ["hello"])
  return yield* client.hello.read()
})).pipe(Effect.provide(handlers), Effect.provide(HttpServer.layerServices))
console.log(await Effect.runPromise(program))
