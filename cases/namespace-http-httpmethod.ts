// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/http/HttpMethod";
console.log(JSON.stringify([M.hasBody("POST"), M.hasBody("GET"), M.isHttpMethod("QUERY"), M.isHttpMethod("INVALID")]));
