// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/socket/SocketServer";
const error = new M.SocketServerError({ reason: new M.SocketServerOpenError({ cause: "fixture" }) });
console.log(JSON.stringify(Effect.runSync(Effect.fail(error).pipe(Effect.catch(error => Effect.succeed([error._tag, error.reason._tag]))))));
