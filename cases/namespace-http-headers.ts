// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Option } from "effect";
import * as M from "effect/http/Headers";
const headers = M.set(M.fromInput({ "X-Fixture": "first", "content-type": "text/plain" }), "x-fixture", "second");
console.log(JSON.stringify([M.isHeaders(headers), Option.getOrNull(M.get(headers, "X-Fixture")), M.has(M.remove(headers, "x-fixture"), "x-fixture")]));
