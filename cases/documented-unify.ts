// Generated from node_modules/effect/dist/Unify.d.ts, example 1.
// SHA-256: aee87669fc378a6ebd9b91dcce9d2991545df840e43005749b4c5a7b7cfb9e04
const __compatObserved: unknown[] = []
import * as Unify from "effect/Unify"

// Unify a simple value
const unifiedValue = Unify.unify("hello") // => "hello"
// Type: string

// Unify a function result
const createValue = () => ({ value: "test" })

const unifiedFunction = Unify.unify(createValue)
__compatObserved.push(unifiedFunction().value)

// Unify with curried functions
const curriedFunction = (a: string) => (b: number) => ({ result: a + b })
const unifiedCurried = Unify.unify(curriedFunction)
// Type: (a: string) => (b: number) => Unify<{ result: string }>
__compatObserved.push(unifiedCurried("value-")(1).result)
console.log(JSON.stringify(__compatObserved))
