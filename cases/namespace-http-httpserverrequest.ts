// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/http/HttpServerRequest";
import { HttpClientRequest } from "effect/http";
const incoming = M.fromClientRequest(HttpClientRequest.get("https://example.invalid/items?a=1&a=2"));
const outgoing = M.toClientRequest(incoming);
console.log(JSON.stringify([incoming.method, outgoing.method, M.searchParamsFromURL(new URL("https://example.invalid/items?a=1&a=2"))]));
