// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as Docs from "effect/http-api/HttpApiSwagger"
import { HttpApi, HttpApiGroup, HttpApiEndpoint } from "effect/http-api"
import { HttpRouter } from "effect/http"
const api = HttpApi.make("DocsApi").add(HttpApiGroup.make("hello").add(HttpApiEndpoint.get("read", "/hello")))
const app = HttpRouter.toWebHandler(Docs.layer(api, { path: "/docs" }), { disableLogger: true })
const response = await app.handler(new Request("https://example.test/docs"))
const html = await response.text()
await app.dispose()
console.log(JSON.stringify([response.status, response.headers.get("content-type"), html.length, html.includes("/hello")]))
