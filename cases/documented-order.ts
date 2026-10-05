// Generated from node_modules/effect/dist/Order.d.ts, example 1.
// SHA-256: 29ddd287af75b90ef536471496ec7089016f447d91bfd8844481c599098ba61c
const __compatObserved: unknown[] = []
import * as Order from "effect/Order"

const byAge = Order.make<{ name: string; age: number }>((self, that) => {
  if (self.age < that.age) return -1
  if (self.age > that.age) return 1
  return 0
})

__compatObserved.push(byAge({ name: "Alice", age: 30 }, { name: "Bob", age: 25 }))
__compatObserved.push(byAge({ name: "Alice", age: 25 }, { name: "Bob", age: 30 }))
console.log(JSON.stringify(__compatObserved))
