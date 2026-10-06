// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/ai/McpSchema";
const implementation = Schema.decodeUnknownSync(M.Implementation)({ name: "fixture", version: "1.0" });
const pingResult = Schema.decodeUnknownSync(M.Ping.successSchema)({});
console.log(JSON.stringify([implementation.name, implementation.version, M.Ping._tag, pingResult]));
