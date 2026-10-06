// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as PrimaryKey from "effect/PrimaryKey"
const product = { [PrimaryKey.symbol]: () => "product-42" }
console.log(PrimaryKey.value(product))
