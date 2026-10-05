// Primary API probe derived from the installed effect@4.0.1 declarations.
import * as Search from "effect/http/MultipartParser/internal/search"
const found: [number, string][] = []
const parser = Search.make("--", (index, chunk) => found.push([index, new TextDecoder().decode(chunk)]))
parser.write(new TextEncoder().encode("a--b--c"))
parser.end()
console.log(JSON.stringify(found))
