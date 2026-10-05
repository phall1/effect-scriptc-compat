// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/rpc/RpcSerialization";
const json = M.json.makeUnsafe();
const ndjson = M.makeNdjson({ maxBufferSize: 1024 }).makeUnsafe();
const partial = ndjson.decode('{"n":');
const complete = ndjson.decode('1}\n{"n":2}\n');
console.log(JSON.stringify([json.decode(json.encode({ _tag: "Ping" })!), partial, complete, M.json.contentType]));
