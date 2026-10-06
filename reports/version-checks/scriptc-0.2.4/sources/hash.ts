const __compatObserved: unknown[] = []
import * as Hash from "effect/Hash"
__compatObserved.push(Hash.hash(42) === Hash.hash(42))
__compatObserved.push(Hash.hash("hello") === Hash.hash("hello"))
__compatObserved.push(Hash.hash([1, 2, 3]) === Hash.hash([1, 2, 3]))
console.log(JSON.stringify(__compatObserved))
