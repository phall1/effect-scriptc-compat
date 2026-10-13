// Published Equivalence examples. Each call is a documented one-liner with a fixed result.
import * as Equivalence from "effect/Equivalence"

const observed = [
  Equivalence.String("hello", "hello"),
  Equivalence.String("hello", "world"),
  Equivalence.Number(1, 1),
  Equivalence.Number(1, 2),
  Equivalence.Number(NaN, NaN),
  Equivalence.Boolean(true, true),
  Equivalence.Boolean(true, false),
  Equivalence.BigInt(1n, 1n),
  Equivalence.BigInt(1n, 2n),
]
console.log(JSON.stringify(observed))
