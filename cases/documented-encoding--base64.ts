// Generated from node_modules/effect/dist/encoding/Base64.d.ts, example 0.
// SHA-256: 0dd66e88b9598bf9a62886c94bcb4226ab698e1ef7e28a7598f61c3fda472c72
const __compatObserved: unknown[] = []
import * as Base64 from "effect/encoding/Base64"

__compatObserved.push(Base64.encode("hello"))

const bytes = new Uint8Array([72, 101, 108, 108, 111])
__compatObserved.push(Base64.encode(bytes))
console.log(JSON.stringify(__compatObserved))
