// Generated from node_modules/effect/dist/Unify.d.ts, example 1.
// SHA-256: cdf31eee912503a4746f83f542d46f4b74e6c277bd842ef726eba9db7bca9abe
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
