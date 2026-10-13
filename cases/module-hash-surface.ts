// Published Hash examples. Each call is a documented one-liner with a fixed result.
import * as Hash from "effect/Hash"

const observed = [
  Hash.hash(42) === Hash.hash(42),
  Hash.hash("hello") === Hash.hash("hello"),
  Hash.hash([1, 2, 3]) === Hash.hash([1, 2, 3]),
  Hash.optimize(1234567890),
  Hash.isHash({}),
  Hash.isHash("string"),
  Hash.number(NaN) === Hash.number(NaN),
  Hash.number(Infinity) === Hash.number(Infinity),
  Hash.number(100) === Hash.number(100),
  Hash.string("hello"),
  Hash.string("world"),
  Hash.string(""),
  Hash.string("test") === Hash.string("test"),
]
console.log(JSON.stringify(observed))
