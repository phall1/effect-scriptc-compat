// Generated from node_modules/effect/dist/Filter.d.ts, example 2.
// SHA-256: a17ab1ad0d39e10821373458cfc617e450efef5e624fdcdcf4ff16f93beb0410
const __compatObserved: unknown[] = []
import * as Filter from "effect/Filter"
import { Result } from "effect"

// Create a filter for positive numbers
const positiveFilter = Filter.make((n: number) => n > 0 ? Result.succeed(n) : Result.fail(n))

// Create a filter that transforms strings to uppercase
const uppercaseFilter = Filter.make((s: string) =>
  s.length > 0 ? Result.succeed(s.toUpperCase()) : Result.fail(s)
)
__compatObserved.push(positiveFilter(1))
__compatObserved.push(uppercaseFilter("ok"))
console.log(JSON.stringify(__compatObserved))
