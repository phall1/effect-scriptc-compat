// Generated from node_modules/effect/dist/MutableList.d.ts, example 0.
// SHA-256: 17158507f29ec11120bc1cada5c79b9471d2debd18e1ee755898bd2317fdd040
const __compatObserved: unknown[] = []
import * as MutableList from "effect/MutableList"

const list: MutableList.MutableList<number> = MutableList.make()
MutableList.append(list, 1)
MutableList.append(list, 2)
MutableList.prepend(list, 0)

__compatObserved.push(MutableList.takeAll(list))
__compatObserved.push(list.length)
console.log(JSON.stringify(__compatObserved))
