// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import { Rpc, RpcGroup } from "effect/rpc";
const rpc = Rpc.make("GetItem", { payload: { id: Schema.String }, success: Schema.Number }).prefix("fixture.");
const group = RpcGroup.make(rpc);
console.log(JSON.stringify([Rpc.isRpc(rpc), rpc._tag, Schema.decodeUnknownSync(rpc.payloadSchema)({ id: "a" }), group.requests.size]));
