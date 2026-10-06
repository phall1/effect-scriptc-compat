// Generated from node_modules/effect/dist/encoding/Base64Url.d.ts, example 0.
// SHA-256: 7aa36f0fcb5bcc04ec41a58ce256c62745870df5b9cfa4ee4da1723fcb951a9a
const __compatObserved: unknown[] = []
import * as Base64Url from "effect/encoding/Base64Url"

__compatObserved.push(Base64Url.encode("hello?"))

const bytes = new Uint8Array([72, 101, 108, 108, 111, 63])
__compatObserved.push(Base64Url.encode(bytes))
console.log(JSON.stringify(__compatObserved))
