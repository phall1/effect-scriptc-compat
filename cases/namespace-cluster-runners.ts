// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/cluster/Runners";
const ping = M.Rpcs.requests.get("Ping")!;
const payload = Schema.decodeUnknownSync(ping.payloadSchema)(undefined);
console.log(JSON.stringify([Array.from(M.Rpcs.requests.keys()), payload ?? null]));
