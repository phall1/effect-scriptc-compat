// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/ai/McpProtocol";
import { McpSchema } from "effect/ai";
const adapter = M.v2025_11_25;
const ping = Effect.runSync(adapter.payloadCodecs(McpSchema.Ping).decode(null));
console.log(JSON.stringify([adapter.protocolVersion, adapter.runtime._tag, adapter.clientRpcs.requests.has("ping"), ping ?? null, M.v2026_07_28.runtime._tag]));
