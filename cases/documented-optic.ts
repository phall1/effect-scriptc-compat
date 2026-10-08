// Generated from node_modules/effect/dist/Optic.d.ts, example 0.
// SHA-256: f682406fcd0de4e8e55957df104f6ae86de04caf6fb21fc1b3c16af4ebac91e4
const __compatObserved: unknown[] = []
import * as Optic from "effect/Optic"

const fahrenheit = Optic.makeIso<number, number>(
  (c) => c * 9 / 5 + 32,
  (f) => (f - 32) * 5 / 9
)

__compatObserved.push(fahrenheit.get(100))

__compatObserved.push(fahrenheit.set(32))
console.log(JSON.stringify(__compatObserved))
