// Generated from node_modules/effect/dist/Inspectable.d.ts, example 3.
// SHA-256: 68825518d7e42fc8a9fa5f931cb050f15a88bdfa5b5140f8d583c90d74bb760f
const __compatObserved: unknown[] = []
import * as Inspectable from "effect/Inspectable"

// Use as prototype
const myObject = Object.create(Inspectable.BaseProto)
myObject.name = "example"
myObject.value = 42

__compatObserved.push(myObject.toString())

// Or extend in a constructor
function MyClass(this: any, name: string) {
  this.name = name
}
MyClass.prototype = Object.create(Inspectable.BaseProto)
MyClass.prototype.constructor = MyClass
console.log(JSON.stringify(__compatObserved))
