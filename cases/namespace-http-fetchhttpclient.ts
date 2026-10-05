// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/http/FetchHttpClient";
import { HttpClient } from "effect/http";
const fakeFetch: typeof globalThis.fetch = async () => new Response('{"value":7}', { status: 200, headers: { "content-type": "application/json" } });
const program = Effect.gen(function* () {
 const client = yield* HttpClient.HttpClient;
 const response = yield* client.get("https://example.invalid/fixture");
 return yield* response.json;
}).pipe(Effect.provide(M.layer), Effect.provideService(M.Fetch, fakeFetch));
console.log(JSON.stringify(await Effect.runPromise(program)));
