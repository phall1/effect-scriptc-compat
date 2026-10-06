// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/http/HttpServer";
import { NetAddress } from "effect/net";
console.log(JSON.stringify(M.formatAddress(NetAddress.inetAddressFromStringUnsafe("127.0.0.1:3000"))));
