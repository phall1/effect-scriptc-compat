// Generated from node_modules/effect/dist/Graph.d.ts, example 0.
// SHA-256: 303cb8d22a0ab7b56e5673f8126d73fa71b6c46ec593a46e81ea1a16efbce0cd
const __compatObserved: unknown[] = []
import * as Graph from "effect/Graph"

const graph = Graph.fromSnapshot({
  type: "directed",
  nodes: [{ index: 2, data: "A" }, { index: 5, data: "B" }],
  edges: [{ index: 3, source: 2, target: 5, data: 1 }]
})

__compatObserved.push(Graph.toSnapshot(graph).edges[0].index)
console.log(JSON.stringify(__compatObserved))
