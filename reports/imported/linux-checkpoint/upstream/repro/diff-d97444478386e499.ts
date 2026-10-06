const __compatObserved: unknown[] = []
import * as MutableList from "effect/MutableList"
const list: MutableList.MutableList<number> = MutableList.make()
MutableList.append(list, 1)
MutableList.append(list, 2)
MutableList.prepend(list, 0)
__compatObserved.push(MutableList.takeAll(list))
__compatObserved.push(list.length)
console.log(JSON.stringify(__compatObserved))
