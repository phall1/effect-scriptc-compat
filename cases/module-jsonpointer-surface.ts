// Published JsonPointer examples. Each call is a documented one-liner with a fixed result.
import * as JsonPointer from "effect/JsonPointer"

const observed = [
  JsonPointer.escapeToken("a/b"),
  JsonPointer.escapeToken("c~d"),
  JsonPointer.escapeToken("path/to~key"),
  JsonPointer.unescapeToken("a~1b"),
  JsonPointer.unescapeToken("c~0d"),
  JsonPointer.unescapeToken("path~1to~0key"),
  JsonPointer.parseUriFragment("#/users/a~1b"),
  JsonPointer.parseUriFragment("#/caf%C3%A9"),
  JsonPointer.parseUriFragment("#/%"),
  JsonPointer.parseUriFragment("#/a#b"),
  JsonPointer.formatUriFragment(["users", "a/b", "Rate%"]),
]
console.log(JSON.stringify(observed))
