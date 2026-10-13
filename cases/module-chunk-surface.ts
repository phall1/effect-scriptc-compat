// Published Chunk examples. Each call is a documented one-liner with a fixed result.
import * as Chunk from "effect/Chunk"

const observed = [
  Chunk.isChunk("string"),
  Chunk.size(Chunk.empty()),
  Chunk.toArray(Chunk.make(1, 2, 3, 4)),
  Chunk.toArray(Chunk.of("hello")),
  Chunk.toArray(Chunk.fromIterable([1, 2, 3])),
  Chunk.isEmpty(Chunk.empty()),
  Chunk.isEmpty(Chunk.make(1, 2, 3)),
  Chunk.isNonEmpty(Chunk.empty()),
  Chunk.isNonEmpty(Chunk.make(1, 2, 3)),
  Chunk.head(Chunk.empty()),
  Chunk.head(Chunk.make(1, 2, 3)),
  Chunk.last(Chunk.empty()),
  Chunk.last(Chunk.make(1, 2, 3)),
  Chunk.toArray(Chunk.map(Chunk.make(1, 2), (n) => n + 1)),
  Chunk.size(Chunk.make(1, 2, 3)),
  Chunk.toArray(Chunk.makeBy(5, (i) => i * 2)),
  Chunk.toArray(Chunk.range(1, 5)),
  Chunk.join(Chunk.make("hello"), ", "),
]
console.log(JSON.stringify(observed))
