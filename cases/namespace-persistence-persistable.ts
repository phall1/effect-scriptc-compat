// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Exit, Schema } from "effect";
import * as M from "effect/persistence/Persistable";
class Read extends M.Class<{ payload: { id: string } }>()("Read", { primaryKey: payload => payload.id, success: Schema.Number }) {}
const request = new Read({ id: "a" });
const encoded = Effect.runSync(M.serializeExit(request, Exit.succeed(7)));
const decoded = Effect.runSync(M.deserializeExit(request, encoded));
console.log(JSON.stringify([request._tag, encoded, Exit.isSuccess(decoded)]));
