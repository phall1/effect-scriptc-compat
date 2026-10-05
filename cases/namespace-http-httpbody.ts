// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/http/HttpBody";
const body = M.jsonUnsafe({ name: "fixture" });
console.log(JSON.stringify([M.isHttpBody(body), body.contentType, body.contentLength, new TextDecoder().decode(body.body)]));
