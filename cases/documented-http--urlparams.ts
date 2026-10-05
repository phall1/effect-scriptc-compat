// Generated from node_modules/effect/dist/http/UrlParams.d.ts, example 0.
// SHA-256: 4f3e54ac7900448f953462c183222ae4ac42e2a62a361a003c0007ba916ae16f
const __compatObserved: unknown[] = []
import * as UrlParams from "effect/http/UrlParams"

const urlParams = UrlParams.fromInput({
  a: 1,
  b: true,
  c: "string",
  e: [1, 2, 3]
})
__compatObserved.push(UrlParams.toRecord(urlParams))
console.log(JSON.stringify(__compatObserved))
