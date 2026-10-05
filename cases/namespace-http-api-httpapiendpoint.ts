// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as HttpApi from "effect/http-api/HttpApi";
import * as HttpApiGroup from "effect/http-api/HttpApiGroup";
import * as HttpApiEndpoint from "effect/http-api/HttpApiEndpoint";
import * as OpenApi from "effect/http-api/OpenApi";
const endpoint = HttpApiEndpoint.get("read", "/items/:id", { params: { id: Schema.String }, success: Schema.Struct({ name: Schema.String }) });
const api = HttpApi.make("FixtureApi").add(HttpApiGroup.make("items").add(endpoint)).prefix("/v1");
const spec = OpenApi.fromApi(api);
console.log(JSON.stringify([HttpApi.isHttpApi(api), api.groups.items.endpoints.read.method, Object.keys(spec.paths)]));
