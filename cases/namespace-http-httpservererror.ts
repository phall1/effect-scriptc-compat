// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Exit } from "effect";
import * as M from "effect/http/HttpServerError";
import { HttpServerResponse } from "effect/http";
const ok = M.exitResponse(Exit.succeed(HttpServerResponse.text("ok", { status: 202 })));
const failed = M.exitResponse(Exit.fail("fixture"));
console.log(JSON.stringify([ok.status, failed.status]));
