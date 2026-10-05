// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/workers/WorkerError";
const error = new M.WorkerError({ reason: new M.WorkerSendError({ message: "send failed", cause: "fixture" }) });
const result = Effect.runSync(Effect.fail(error).pipe(Effect.catch(e => Effect.succeed([M.isWorkerError(e), e._tag, e.reason._tag]))));
console.log(JSON.stringify(result));
