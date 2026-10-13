// Published Order examples. Each call is a documented one-liner with a fixed result.
import * as Order from "effect/Order"

const observed = [
  Order.String("apple", "banana"),
  Order.String("banana", "apple"),
  Order.String("apple", "apple"),
  Order.Number(1, 1),
  Order.Number(1, 2),
  Order.Number(2, 1),
  Order.Number(0, -0),
  Order.Number(NaN, 1),
  Order.Boolean(false, true),
  Order.Boolean(true, false),
  Order.Boolean(true, true),
  Order.BigInt(1n, 2n),
  Order.BigInt(2n, 1n),
  Order.BigInt(1n, 1n),
]
console.log(JSON.stringify(observed))
