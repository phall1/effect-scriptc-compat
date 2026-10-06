// Generated from node_modules/effect/dist/Match.d.ts, example 0.
// SHA-256: ba8bde7d56f06d794deba0ed46799ba7afab392f3ab7657960fbb477e47c37cb
const __compatObserved: unknown[] = []
import * as Match from "effect/Match"

// Simulated dynamic input that can be a string or a number
const input: string | number = "some input"

//      ┌─── string
//      ▼
const result = Match.value(input).pipe(
  // Match if the value is a number
  Match.when(Match.number, (n) => `number: ${n}`),
  // Match if the value is a string
  Match.when(Match.string, (s) => `string: ${s}`),
  // Ensure all possible cases are covered
  Match.exhaustive
)

__compatObserved.push(result)
console.log(JSON.stringify(__compatObserved))
