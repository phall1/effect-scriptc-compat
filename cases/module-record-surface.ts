// Published Record examples. Each call is a documented one-liner with a fixed result.
import * as Record from "effect/Record"

const observed = [
  Record.isEmptyRecord({}),
  Record.isEmptyReadonlyRecord({}),
  Record.fromIterableWith([1, 2, 3, 4], (a) => [String(a), a * 2]),
  Record.fromEntries([["a", 1], ["b", 2]]),
  Record.singleton("a", 1),
]
console.log(JSON.stringify(observed))
