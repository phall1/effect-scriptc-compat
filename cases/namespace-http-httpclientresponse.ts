// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/http/HttpClientResponse";
import { HttpClientRequest } from "effect/http";
const request = HttpClientRequest.get("https://example.invalid/fixture");
const response = M.fromWeb(request, new Response('{"value":7}', { status: 201, headers: { "content-type": "application/json" } }));
console.log(JSON.stringify([response.status, await Effect.runPromise(response.json)]));
