// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/http-api/HttpApiSecurity";
const key = M.apiKey({ key: "x-api-key", in: "header" });
console.log(JSON.stringify([M.bearer._tag, M.basic._tag, key._tag, key.key, key.in]));
