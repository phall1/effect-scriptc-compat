// Generated from node_modules/effect/dist/reactivity/Atom.d.ts, example 0.
// SHA-256: d47b614a9749d48723fa70b9578f4d6da3eb9991fa8a588fff207242caf45d0c
const __compatObserved: unknown[] = []
import * as Atom from "effect/reactivity/Atom"

const point = Atom.make({ x: 0, y: 0 }).pipe(
  Atom.withEquality<{ x: number; y: number }>((a, b) => a.x === b.x && a.y === b.y)
)
__compatObserved.push(point.equals({ x: 1, y: 2 }, { x: 1, y: 2 }))
console.log(JSON.stringify(__compatObserved))
