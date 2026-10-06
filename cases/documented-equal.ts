// Generated from node_modules/effect/dist/Equal.d.ts, example 2.
// SHA-256: ed89a6ffa0487c3cf15575d0ea990610b9ca3720053b9bb575299e5b5f84378f
const __compatObserved: unknown[] = []
import * as Equal from "effect/Equal"

__compatObserved.push(Equal.equals(1, 1))
__compatObserved.push(Equal.equals(NaN, NaN))
__compatObserved.push(Equal.equals("a", "b"))

__compatObserved.push(Equal.equals({ a: 1, b: 2 }, { a: 1, b: 2 }))
__compatObserved.push(Equal.equals([1, [2, 3]], [1, [2, 3]]))

__compatObserved.push(Equal.equals(new Date("2024-01-01"), new Date("2024-01-01")))

const m1 = new Map([["a", 1], ["b", 2]])
const m2 = new Map([["b", 2], ["a", 1]])
__compatObserved.push(Equal.equals(m1, m2))

const is5 = Equal.equals(5)
__compatObserved.push(is5(5))
__compatObserved.push(is5(3))
console.log(JSON.stringify(__compatObserved))
