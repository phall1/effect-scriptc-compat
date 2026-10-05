// Generated from node_modules/effect/dist/Optic.d.ts, example 0.
// SHA-256: 3ac516f343a10214e32af71a0a74497cf73304cdb786efc6569597fc42367fc9
const __compatObserved: unknown[] = []
import * as Optic from "effect/Optic"

const fahrenheit = Optic.makeIso<number, number>(
  (c) => c * 9 / 5 + 32,
  (f) => (f - 32) * 5 / 9
)

__compatObserved.push(fahrenheit.get(100))

__compatObserved.push(fahrenheit.set(32))
console.log(JSON.stringify(__compatObserved))
