// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/eventlog/EventLogMessage";
const error = new M.EventLogProtocolError({ requestTag: "Read", code: "NotFound", message: "fixture" });
const handled = Effect.runSync(Effect.fail(error).pipe(Effect.catch(e => Effect.succeed([M.EventLogProtocolError.is(e), e.code, e.requestTag]))));
console.log(JSON.stringify([handled, M.HelloRpc._tag, M.EventLogRemoteRpcs.requests.size]));
