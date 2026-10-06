// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Socket } from "effect/socket";
const close = new Socket.CloseEvent(1000, "fixture");
console.log(JSON.stringify([Socket.isCloseEvent(close), close.code, close.reason, close.toString()]));
