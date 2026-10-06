// Generated from node_modules/effect/dist/cli/Primitive.d.ts, example 15.
// SHA-256: 1e43a85d45d07cd360374c6ea2c51e0cd51668ae1689395289f7338a2517b872
const __compatObserved: unknown[] = []
import * as Primitive from "effect/cli/Primitive"

__compatObserved.push(Primitive.getTypeName(Primitive.String))
__compatObserved.push(Primitive.getTypeName(Primitive.Int))
__compatObserved.push(Primitive.getTypeName(Primitive.Boolean))
__compatObserved.push(Primitive.getTypeName(Primitive.Date))
__compatObserved.push(Primitive.getTypeName(Primitive.KeyValuePair))

const logLevelChoice = Primitive.Choice([
  ["debug", "debug"],
  ["info", "info"]
])
__compatObserved.push(Primitive.getTypeName(logLevelChoice))
console.log(JSON.stringify(__compatObserved))
