// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Option } from "effect";
import * as M from "effect/http/Mime";
console.log(JSON.stringify([Option.getOrNull(M.getType("page.html")), Option.getOrNull(M.getExtension("application/json")), Option.isNone(M.getType("unknown.no-such-type"))]));
