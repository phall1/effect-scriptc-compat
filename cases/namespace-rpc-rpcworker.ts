// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect, Schema } from "effect";
import * as M from "effect/rpc/RpcWorker";
const result = Effect.runSync(M.makeInitialMessage(Schema.Struct({ value: Schema.Number }), Effect.succeed({ value: 7 })));
console.log(JSON.stringify([result[0], result[1].length]));
