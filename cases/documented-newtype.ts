// Generated from node_modules/effect/dist/Newtype.d.ts, example 1.
// SHA-256: e645d1ba3857f895477b1be0777f3f1d1b78d0877a3fec4ed13b17a2b04eaf1d
const __compatObserved: unknown[] = []
import * as Newtype from "effect/Newtype"

interface Label extends Newtype.Newtype<"Label", string> {}

const iso = Newtype.makeIso<Label>()
const label = iso.set("hello")

const raw: string = Newtype.value(label)
__compatObserved.push(raw)
console.log(JSON.stringify(__compatObserved))
