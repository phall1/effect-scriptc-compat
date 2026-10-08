// Generated from node_modules/effect/dist/Order.d.ts, example 1.
// SHA-256: bb4b09943b169fe2e4eeeed43056382ddd85f6385f42e02437eefdf00521bcfc
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
