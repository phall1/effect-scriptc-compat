// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Effect } from "effect";
import * as M from "effect/eventlog/EventLogSessionAuth";
const encoded = Effect.runSync(M.encodeSessionAuthPayload({ remoteId: "fixture", challenge: new Uint8Array(32), publicKey: "public-fixture", signingPublicKey: new Uint8Array(32) }));
const decoded = Effect.runSync(M.decodeSessionAuthPayload(encoded));
console.log(JSON.stringify([encoded.length, decoded.remoteId, decoded.publicKey, decoded.challenge.length, decoded.signingPublicKey.length]));
