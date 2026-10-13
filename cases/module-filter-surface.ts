// Published Filter examples. Each call is a documented one-liner with a fixed result.
import * as Filter from "effect/Filter"

const observed = [
  Filter.string("hello"),
  Filter.string(42),
  Filter.number(42),
  Filter.number("42"),
]
console.log(JSON.stringify(observed))
