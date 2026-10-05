// Generated from node_modules/effect/dist/Logger.d.ts, example 2.
// SHA-256: 5dfe53a49833cd40e3e82db69f6be685e0d0b8b307c0d54b792080aabae7a45b
const __compatObserved: unknown[] = []
import * as Logger from "effect/Logger"

const myLogger = Logger.make(() => undefined)

__compatObserved.push(Logger.isLogger(myLogger))
__compatObserved.push(Logger.isLogger("not a logger"))
__compatObserved.push(Logger.isLogger({ log: () => {} }))
console.log(JSON.stringify(__compatObserved))
