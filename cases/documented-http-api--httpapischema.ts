// Generated from node_modules/effect/dist/http-api/HttpApiSchema.d.ts, example 0.
// SHA-256: 5ad43e5074201af5ec142c3f96e4c5680c92316e4439bd1e7ba9795b23b434cc
const __compatObserved: unknown[] = []
import { Schema } from "effect"
import * as HttpApiSchema from "effect/http-api/HttpApiSchema"

const schema = HttpApiSchema.WithHeaders(Schema.String, {
  "x-total-count": Schema.FiniteFromString
})
const response: typeof schema.Type = HttpApiSchema.withHeaders({
  body: "created",
  headers: { "x-total-count": 1 }
})

__compatObserved.push(HttpApiSchema.isWithHeaders(schema))
__compatObserved.push(response.body)
__compatObserved.push(response.headers)
console.log(JSON.stringify(__compatObserved))
