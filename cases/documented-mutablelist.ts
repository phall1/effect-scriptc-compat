// Generated from node_modules/effect/dist/MutableList.d.ts, example 0.
// SHA-256: 3d39f7afb1b77a51a8a3278cc9757f64325469ffe14ba812fb6bfc512bf53ce5
const __compatObserved: unknown[] = []
import * as MutableList from "effect/MutableList"

const list: MutableList.MutableList<number> = MutableList.make()
MutableList.append(list, 1)
MutableList.append(list, 2)
MutableList.prepend(list, 0)

__compatObserved.push(MutableList.takeAll(list))
__compatObserved.push(list.length)
console.log(JSON.stringify(__compatObserved))
