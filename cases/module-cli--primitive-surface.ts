// Published cli/Primitive examples. Each call is a documented one-liner with a fixed result.
import * as Primitive from "effect/cli/Primitive"

const observed = [
  Primitive.getTypeName(Primitive.String),
  Primitive.getTypeName(Primitive.Int),
  Primitive.getTypeName(Primitive.Boolean),
  Primitive.getTypeName(Primitive.Date),
  Primitive.getTypeName(Primitive.KeyValuePair),
]
console.log(JSON.stringify(observed))
