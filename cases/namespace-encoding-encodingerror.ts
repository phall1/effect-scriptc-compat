// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/encoding/EncodingError";
const error = new M.EncodingError({ kind: "Decode", module: "fixture", input: "!", message: "invalid" });
console.log(JSON.stringify(Effect.runSync(Effect.fail(error).pipe(Effect.catch(e => Effect.succeed([M.isEncodingError(e), e.kind, e.module, e.message]))))));
