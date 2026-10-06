// Real typed HTTP client + atom query with an in-memory request runner, never a network fetch.
import * as AtomHttpApi from "effect/reactivity/AtomHttpApi"
import { AtomRegistry } from "effect/reactivity"
import { Effect, Layer, Schema } from "effect"
import { HttpApi, HttpApiEndpoint, HttpApiGroup } from "effect/http-api"
import { HttpClient, HttpClientResponse } from "effect/http"
const api = HttpApi.make("FixtureAtomHttpApi").add(HttpApiGroup.make("items").add(HttpApiEndpoint.get("read", "/items/:id", {params: {id: Schema.String}, success: Schema.Struct({value: Schema.Number})})))
const requests: string[] = []
const client = HttpClient.make(request => Effect.sync(() => {
  requests.push(request.url)
  return HttpClientResponse.fromWeb(request, new Response('{"value":42}', {status: 200, headers: {"content-type": "application/json"}}))
}))
class Client extends AtomHttpApi.Service<Client>()("FixtureAtomHttpClient", {
  api,
  httpClient: Layer.succeed(HttpClient.HttpClient, client),
  baseUrl: "https://fixture.invalid",
  transformResponse: effect => effect.pipe(Effect.withTracerEnabled(false))
}) {}
const registry = AtomRegistry.make()
const query = Client.query("items", "read", {params: {id: "one"}})
try {
  const value = await Effect.runPromise(AtomRegistry.getResult(registry, query))
  console.log(JSON.stringify([value, requests]))
} finally {
  registry.dispose()
}
