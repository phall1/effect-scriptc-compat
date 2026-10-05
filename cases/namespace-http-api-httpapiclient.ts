// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/http-api/HttpApiClient";
import { HttpApi, HttpApiGroup, HttpApiEndpoint } from "effect/http-api";
const api = HttpApi.make("Fixture").add(HttpApiGroup.make("items").add(HttpApiEndpoint.get("read", "/items/:id", { params: { id: Schema.String }, query: { q: Schema.String } })));
const builder = M.urlBuilder(api, { baseUrl: "https://example.invalid" });
console.log(JSON.stringify(builder.items.read({ params: { id: "a b" }, query: { q: "x y" } })));
