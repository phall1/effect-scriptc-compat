// Generated from node_modules/effect/dist/reactivity/Atom.d.ts, example 0.
// SHA-256: 71829942f6b286e95e631f0456ac2598d9dcc812134a3398211b2997110d6628
const __compatObserved: unknown[] = []
import * as Atom from "effect/reactivity/Atom"

const point = Atom.make({ x: 0, y: 0 }).pipe(
  Atom.withEquality<{ x: number; y: number }>((a, b) => a.x === b.x && a.y === b.y)
)
__compatObserved.push(point.equals({ x: 1, y: 2 }, { x: 1, y: 2 }))
console.log(JSON.stringify(__compatObserved))
