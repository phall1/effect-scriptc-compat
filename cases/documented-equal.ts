// Generated from node_modules/effect/dist/Equal.d.ts, example 2.
// SHA-256: 8c0127a9fd09d3ec5e91d47501a1228ba7940ad8aa7c8344c7bbe206b0ba32ce
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
