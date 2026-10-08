// Generated from node_modules/effect/dist/Hash.d.ts, example 1.
// SHA-256: 394d4f71147f8db18659eb74e322acda0f88d1060108e7d76330168c5ce40524
const __compatObserved: unknown[] = []
import * as Hash from "effect/Hash"

__compatObserved.push(Hash.hash(42) === Hash.hash(42))
__compatObserved.push(Hash.hash("hello") === Hash.hash("hello"))
__compatObserved.push(Hash.hash([1, 2, 3]) === Hash.hash([1, 2, 3]))
console.log(JSON.stringify(__compatObserved))
