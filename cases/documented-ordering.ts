// Generated from node_modules/effect/dist/Ordering.d.ts, example 1.
// SHA-256: 9dcdd9800b8b05ad5729b34d9225ec353460ee5763f995b5c439b4bdcc9d81c2
const __compatObserved: unknown[] = []
import * as Ordering from "effect/Ordering"

// Basic reversal
__compatObserved.push(Ordering.reverse(1))
__compatObserved.push(Ordering.reverse(-1))
__compatObserved.push(Ordering.reverse(0))

// Creating descending sort from ascending comparison
const compareNumbers = (a: number, b: number): Ordering.Ordering =>
  a < b ? -1 : a > b ? 1 : 0

const compareDescending = (a: number, b: number): Ordering.Ordering =>
  Ordering.reverse(compareNumbers(a, b))

const numbers = [3, 1, 4, 1, 5]
numbers.sort(compareNumbers) // [1, 1, 3, 4, 5] (ascending)
numbers.sort(compareDescending) // [5, 4, 3, 1, 1] (descending)

// Useful for toggling sort direction
const createSorter = (ascending: boolean) => (a: number, b: number) => {
  const ordering = compareNumbers(a, b)
  return ascending ? ordering : Ordering.reverse(ordering)
}
console.log(JSON.stringify(__compatObserved))
