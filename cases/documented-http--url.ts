// Generated from node_modules/effect/dist/http/Url.d.ts, example 0.
// SHA-256: b4ccd85e519e124cd634eabdd0fbdf54fcbcc43969b5f6b91331e042507e6bfd
const __compatObserved: unknown[] = []
import { Result } from "effect"
import * as Url from "effect/http/Url"

// Parse an absolute URL
//
//      ┌─── Result<URL, IllegalArgumentError>
//      ▼
const parsed = Url.fromString("https://example.com/path")

__compatObserved.push(Result.map(parsed, (url) => url.toString()))

// Parse a relative URL with a base
const relativeParsed = Url.fromString("/relative-path", "https://example.com")

__compatObserved.push(Result.map(relativeParsed, (url) => url.toString()))
console.log(JSON.stringify(__compatObserved))
