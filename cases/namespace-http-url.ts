// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Result } from "effect";
import * as M from "effect/http/Url";
const url = Result.getOrThrow(M.fromString("https://example.invalid/a?x=1"));
const changed = M.setPathname(url, "/b");
console.log(JSON.stringify([url.href, changed.href, Result.isFailure(M.fromString("%%%"))]));
