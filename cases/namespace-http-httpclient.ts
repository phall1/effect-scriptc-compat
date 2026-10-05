// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/http/HttpClient";
import { HttpClientResponse } from "effect/http";
const client = M.make(request => Effect.succeed(HttpClientResponse.fromWeb(request, new Response('{"ok":true}', { status: 200, headers: { "content-type": "application/json" } }))));
const result = await Effect.runPromise(client.get("https://example.invalid/fixture").pipe(Effect.flatMap(response => response.json)));
console.log(JSON.stringify(result));
