// Published HashSet examples. Each call is a documented one-liner with a fixed result.
import * as HashSet from "effect/HashSet"

const observed = [
  HashSet.make("apple", "banana", "cherry"),
  HashSet.make(1, 2, 3, 2, 1),
  HashSet.make("hello", 42, true),
  HashSet.fromIterable(["a", "b", "c", "b", "a"]),
  HashSet.fromIterable(new Set([1, 2, 3])),
  HashSet.fromIterable("hello"),
  HashSet.isHashSet(null),
  HashSet.size(HashSet.make("a", "b")),
  HashSet.size(HashSet.fromIterable(["x", "y", "z", "x", "y"])),
  HashSet.isEmpty(HashSet.make("a")),
  HashSet.union(HashSet.make("a", "b"), HashSet.make("b", "c")),
  HashSet.intersection(HashSet.make("a", "b", "c"), HashSet.make("b", "c", "d")),
  HashSet.difference(HashSet.make("a", "b", "c"), HashSet.make("b", "d")),
  HashSet.filter(HashSet.make(1, 2, 3, 4, 5, 6), (n) => n % 2 === 0),
]
console.log(JSON.stringify(observed))
