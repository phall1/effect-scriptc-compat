// Generated from node_modules/effect/dist/Request.d.ts, example 1.
// SHA-256: 743c39f277fede7e10316f38ae1dc74011b29efb630d2916956aa0fcbbf0975f
const __compatObserved: unknown[] = []
import * as Request from "effect/Request"

interface GetUser extends Request.Request<string, Error> {
  readonly _tag: "GetUser"
  readonly id: number
}

// Constructor type is used internally by Request.of() and Request.tagged()
const GetUser = Request.tagged<GetUser>("GetUser")
const request = GetUser({ id: 123 })

__compatObserved.push(request._tag)
__compatObserved.push(request.id)
console.log(JSON.stringify(__compatObserved))
