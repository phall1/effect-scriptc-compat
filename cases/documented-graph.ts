// Generated from node_modules/effect/dist/Graph.d.ts, example 0.
// SHA-256: b14e462d6ff04a23ba310ae9d68264b15e76d948b23958513da3c55f2ea0c8f5
const __compatObserved: unknown[] = []
import * as Graph from "effect/Graph"

const graph = Graph.fromSnapshot({
  type: "directed",
  nodes: [{ index: 2, data: "A" }, { index: 5, data: "B" }],
  edges: [{ index: 3, source: 2, target: 5, data: 1 }]
})

__compatObserved.push(Graph.toSnapshot(graph).edges[0].index)
console.log(JSON.stringify(__compatObserved))
