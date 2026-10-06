// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { HttpClientRequest, HttpServerResponse } from "effect/http";
const request = HttpClientRequest.get("https://example.invalid/items").pipe(HttpClientRequest.setHeader("x-case", "fixture"), HttpClientRequest.appendUrlParam("page", "2"));
const response = HttpServerResponse.text("ok", { status: 201 });
console.log(JSON.stringify([request.method, request.url, request.headers["x-case"], request.urlParams, response.status, response.body._tag]));
