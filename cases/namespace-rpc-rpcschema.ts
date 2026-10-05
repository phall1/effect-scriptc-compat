// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema, Context } from "effect";
import * as M from "effect/rpc/RpcSchema";
const stream = M.Stream(Schema.Number, Schema.String);
console.log(JSON.stringify([M.isStreamSchema(stream), M.isStreamSchema(Schema.Number), Context.get(M.ClientAbort.annotation, M.ClientAbort)]));
