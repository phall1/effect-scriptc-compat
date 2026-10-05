// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/cluster/ClusterError";
const handled = Effect.runSync(M.MalformedMessage.refail(Effect.fail("fixture")).pipe(Effect.catch(error => Effect.succeed([M.MalformedMessage.is(error), error._tag, error.cause]))));
console.log(JSON.stringify(handled));
