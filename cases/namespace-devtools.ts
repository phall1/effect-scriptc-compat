// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import { DevToolsSchema } from "effect/devtools";
const request = Schema.decodeUnknownSync(DevToolsSchema.Request)({ _tag: "Ping" });
const response = Schema.decodeUnknownSync(DevToolsSchema.Response)({ _tag: "Pong" });
console.log(JSON.stringify([request._tag, response._tag]));
