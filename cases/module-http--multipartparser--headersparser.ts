// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as HeadersParser from "effect/http/MultipartParser/HeadersParser"
const result = HeadersParser.make()(new TextEncoder().encode("Content-Type: text/plain\r\nX-Fixed: yes\r\n\r\n"), 0)
console.log(JSON.stringify(result))
