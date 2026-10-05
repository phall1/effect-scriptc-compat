// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as ContentType from "effect/http/MultipartParser/internal/contentType"
console.log(JSON.stringify(ContentType.parse('text/plain; charset="utf-8"')))
