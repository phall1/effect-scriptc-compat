// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as Multipart from "effect/http/Multipart"
import { Effect, Stream } from "effect"
const bytes = new TextEncoder().encode('--fixed\r\nContent-Disposition: form-data; name="answer"\r\n\r\n42\r\n--fixed--\r\n')
const parts = await Effect.runPromise(Stream.make(bytes).pipe(Stream.pipeThroughChannel(Multipart.makeChannel({ "content-type": "multipart/form-data; boundary=fixed" })), Stream.runCollect))
console.log(JSON.stringify(parts.map(part => part._tag === "Field" ? [part.key, part.value] : [part.key, part._tag])))
