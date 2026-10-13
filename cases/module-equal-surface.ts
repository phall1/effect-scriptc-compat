// Published Equal examples. Each call is a documented one-liner with a fixed result.
import * as Equal from "effect/Equal"

const observed = [
  Equal.equals(1, 1),
  Equal.equals(NaN, NaN),
  Equal.equals("a", "b"),
  Equal.equals([1, [2, 3]], [1, [2, 3]]),
  Equal.equals(new Date("2024-01-01"), new Date("2024-01-01")),
  Equal.isEqual(42),
]
console.log(JSON.stringify(observed))
