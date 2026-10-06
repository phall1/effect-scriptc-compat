// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/http/Cookies";
const cookie = M.makeCookieUnsafe("fixture", "hello", { httpOnly: true, sameSite: "lax", path: "/" });
const cookies = M.fromIterable([cookie]);
console.log(JSON.stringify([M.serializeCookie(cookie), M.toCookieHeader(cookies), M.parseHeader("a=1; b=two")]));
