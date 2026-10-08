// Generated from node_modules/effect/dist/Logger.d.ts, example 2.
// SHA-256: 2ea6ce978c691df7ae8dde5228aca474ae667d0a92eefb850a600e00c6b80ddf
const __compatObserved: unknown[] = []
import * as Logger from "effect/Logger"

const myLogger = Logger.make(() => undefined)

__compatObserved.push(Logger.isLogger(myLogger))
__compatObserved.push(Logger.isLogger("not a logger"))
__compatObserved.push(Logger.isLogger({ log: () => {} }))
console.log(JSON.stringify(__compatObserved))
