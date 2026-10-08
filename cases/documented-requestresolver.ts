// Generated from node_modules/effect/dist/RequestResolver.d.ts, example 0.
// SHA-256: 787a06edd33f1c17d58ee65e1630159db215f9cba73c14fbe8046f294001edb5
const __compatObserved: unknown[] = []
import * as RequestResolver from "effect/RequestResolver"
import { Effect, Exit, Request } from "effect"

interface GetUserRequest extends Request.Request<string, Error> {
  readonly _tag: "GetUserRequest"
  readonly id: number
}
const GetUserRequest = Request.tagged<GetUserRequest>("GetUserRequest")

// In practice, you would typically use RequestResolver.make() instead
const resolver = RequestResolver.make<GetUserRequest>((entries) =>
  Effect.sync(() => {
    for (const entry of entries) {
      entry.completeUnsafe(Exit.succeed(`User ${entry.request.id}`))
    }
  })
)

const program = Effect.request(GetUserRequest({ id: 1 }), resolver)
__compatObserved.push(await Effect.runPromise(program))
console.log(JSON.stringify(__compatObserved))
