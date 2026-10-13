// Published Predicate examples. Each call is a documented one-liner with a fixed result.
import * as Predicate from "effect/Predicate"

const observed = [
  Predicate.isNever("anything"),
  Predicate.isUnknown(123),
  Predicate.isObjectOrArray([]),
  Predicate.isObject([1, 2]),
  Predicate.isObjectKeyword(() => 1),
  Predicate.isObjectKeyword(null),
]
console.log(JSON.stringify(observed))
