// Generated from node_modules/effect/dist/Newtype.d.ts, example 1.
// SHA-256: 7a689e0c65f3467c279a22517826427252dd4e11042e436b9f84636c6de51a1d
const __compatObserved: unknown[] = []
import * as Newtype from "effect/Newtype"

interface Label extends Newtype.Newtype<"Label", string> {}

const iso = Newtype.makeIso<Label>()
const label = iso.set("hello")

const raw: string = Newtype.value(label)
__compatObserved.push(raw)
console.log(JSON.stringify(__compatObserved))
