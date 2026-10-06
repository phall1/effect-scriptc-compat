// Generated from node_modules/effect/dist/Request.d.ts, example 1.
// SHA-256: 5160656dfe09d5b2169170b0b2f6030ef7c55f62d623301b466caa025fcb1bee
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
