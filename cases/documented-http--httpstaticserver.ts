// Generated from node_modules/effect/dist/http/HttpStaticServer.d.ts, example 1.
// SHA-256: 5959531eb69a8007767d809f85d871d3319a30a19582678470898a1347373fee
const __compatObserved: unknown[] = []
import { Layer } from "effect"
import * as HttpStaticServer from "effect/http/HttpStaticServer"
import { HttpRouter, HttpServerResponse } from "effect/http"

const ApiLayer = HttpRouter.add("GET", "/health", HttpServerResponse.text("ok"))

const StaticFilesLayer = HttpStaticServer.layer({
  root: "./public",
  prefix: "/static"
})

const AppLayer = Layer.mergeAll(ApiLayer, StaticFilesLayer)
__compatObserved.push(Layer.isLayer(AppLayer))
console.log(JSON.stringify(__compatObserved))
