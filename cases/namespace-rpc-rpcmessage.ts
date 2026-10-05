// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/rpc/RpcMessage";
const request = Schema.decodeUnknownSync(M.EncodedSchema)({ _tag: "Request", id: "a", tag: "Get", payload: new Uint8Array([7]), headers: [] });
console.log(JSON.stringify([request, M.RequestId(2), M.constPing, M.constPong, M.isTerminalResponse(M.ResponseDefectEncoded("fixture"))]));
