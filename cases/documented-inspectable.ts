// Generated from node_modules/effect/dist/Inspectable.d.ts, example 3.
// SHA-256: 91232559e0c9c3dcf8e7dafd3ad500118fed81900bc8a6e11dfbfa7e4b37b67b
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
