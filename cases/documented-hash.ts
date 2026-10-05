// Generated from node_modules/effect/dist/Hash.d.ts, example 1.
// SHA-256: 187c6da3cf1e02c4585108043e31f7b300f6858c860448aa7399c4d6d4d23b94
const __compatObserved: unknown[] = []
import * as Hash from "effect/Hash"

__compatObserved.push(Hash.hash(42) === Hash.hash(42))
__compatObserved.push(Hash.hash("hello") === Hash.hash("hello"))
__compatObserved.push(Hash.hash([1, 2, 3]) === Hash.hash([1, 2, 3]))
console.log(JSON.stringify(__compatObserved))
