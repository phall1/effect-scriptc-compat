// Generated from node_modules/effect/dist/BigDecimal.d.ts, example 1.
// SHA-256: 427d366852176e5ea24c0139daeb73ade47c1cd17093ebb8791e0a1df3bff707
const __compatObserved: unknown[] = []
import * as BigDecimal from "effect/BigDecimal"

const decimal = BigDecimal.fromNumber(123.45)
__compatObserved.push(BigDecimal.isBigDecimal(decimal))
__compatObserved.push(BigDecimal.isBigDecimal(BigDecimal.fromStringUnsafe("123.45")))
__compatObserved.push(BigDecimal.isBigDecimal(123.45))
__compatObserved.push(BigDecimal.isBigDecimal("123.45"))
console.log(JSON.stringify(__compatObserved))
