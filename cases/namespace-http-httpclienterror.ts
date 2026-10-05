// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/http/HttpClientError";
import { HttpClientRequest } from "effect/http";
const error = new M.HttpClientError({ reason: new M.TransportError({ request: HttpClientRequest.get("https://example.invalid/fixture"), description: "offline fixture" }) });
console.log(JSON.stringify(Effect.runSync(Effect.fail(error).pipe(Effect.catch(e => Effect.succeed([M.isHttpClientError(e), e.reason._tag, e.request.method, e.message]))))));
