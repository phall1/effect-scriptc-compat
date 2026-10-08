// Generated from node_modules/effect/dist/BigDecimal.d.ts, example 1.
// SHA-256: 02e707c6957bb03ca3b853cd7f748c9917954b159c201bea2f034b302612eeaf
const __compatObserved: unknown[] = []
import * as BigDecimal from "effect/BigDecimal"

const decimal = BigDecimal.fromNumber(123.45)
__compatObserved.push(BigDecimal.isBigDecimal(decimal))
__compatObserved.push(BigDecimal.isBigDecimal(BigDecimal.fromStringUnsafe("123.45")))
__compatObserved.push(BigDecimal.isBigDecimal(123.45))
__compatObserved.push(BigDecimal.isBigDecimal("123.45"))
console.log(JSON.stringify(__compatObserved))
