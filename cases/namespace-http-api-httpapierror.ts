// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/http-api/HttpApiError";
const error = new M.NotFound();
console.log(JSON.stringify([error._tag, Schema.encodeSync(M.NotFound)(error)]));
