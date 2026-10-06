// Generated from node_modules/effect/dist/http/HttpRouter.d.ts, example 0.
// SHA-256: c0ee5d8bf74c68f8a77d9721ba0a37f87b2f9abf342de873c41bd23f9b717584
const __compatObserved: unknown[] = []
import { Effect } from "effect"
import * as HttpRouter from "effect/http/HttpRouter"
import { HttpServerResponse } from "effect/http"

const Routes = HttpRouter.use((router) =>
  router.add("GET", "/health", HttpServerResponse.text("ready"))
)

const program = Effect.acquireUseRelease(
  Effect.sync(() => HttpRouter.toWebHandler(Routes, { disableLogger: true })),
  ({ handler }) =>
    Effect.gen(function*() {
      const response = yield* Effect.promise(() => handler(new Request("http://localhost/health")))
      const body = yield* Effect.promise(() => response.text())
      return body
    }),
  ({ dispose }) => Effect.promise(dispose)
)

__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
