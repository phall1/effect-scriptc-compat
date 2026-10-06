// Generated from node_modules/effect/dist/ai/AiError.d.ts, example 3.
// SHA-256: e259d62f4c9acef8b750eec2a31eb250f12263eb6eb68e8326aac11259fb794e
const __compatObserved: unknown[] = []
import * as AiError from "effect/ai/AiError"
import { HttpClientError, HttpClientRequest } from "effect/http"

const platformError = new HttpClientError.TransportError({
  request: HttpClientRequest.get("https://example.com/models"),
  description: "Connection refused"
})

const aiError = AiError.NetworkError.fromRequestError(platformError)
__compatObserved.push(aiError.reason)
console.log(JSON.stringify(__compatObserved))
