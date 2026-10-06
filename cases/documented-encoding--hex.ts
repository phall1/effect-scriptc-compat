// Generated from node_modules/effect/dist/encoding/Hex.d.ts, example 0.
// SHA-256: f292f78a6464df1470892b7b61053b184a231b4700f67514d3347f7f2dbf7995
const __compatObserved: unknown[] = []
import * as Hex from "effect/encoding/Hex"

// Encode a string to hex
__compatObserved.push(Hex.encode("hello"))

// Encode binary data to hex
const bytes = new Uint8Array([72, 101, 108, 108, 111])
__compatObserved.push(Hex.encode(bytes))
console.log(JSON.stringify(__compatObserved))
