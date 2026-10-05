// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/http/UrlParams";
const params = M.fromInput({ q: "a b", page: "1" }).pipe(M.append("q", "second"));
console.log(JSON.stringify([M.toString(params), M.getAll(params, "q"), M.toRecord(M.remove(params, "page"))]));
