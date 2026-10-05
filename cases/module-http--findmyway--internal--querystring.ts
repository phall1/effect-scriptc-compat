// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as QueryString from "effect/http/FindMyWay/internal/queryString"
console.log(JSON.stringify([QueryString.parse("a=1&b=two+words"), QueryString.stringify({ a: "1", b: "two words" })]))
