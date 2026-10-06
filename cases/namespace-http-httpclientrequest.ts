// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as HttpClientRequest from "effect/http/HttpClientRequest";
import * as HttpServerResponse from "effect/http/HttpServerResponse";
const request = HttpClientRequest.get("https://example.invalid/items").pipe(HttpClientRequest.setHeader("x-case", "fixture"), HttpClientRequest.appendUrlParam("page", "2"));
const response = HttpServerResponse.text("ok", { status: 201 });
console.log(JSON.stringify([request.method, request.url, request.headers["x-case"], request.urlParams, response.status, response.body._tag]));
