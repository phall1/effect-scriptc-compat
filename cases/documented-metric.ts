// Generated from node_modules/effect/dist/Metric.d.ts, example 4.
// SHA-256: 39c97a9547948cdaaf2d60a91bb5aab74c2d0bbc9af4689dcdebbe8958598245
const __compatObserved: unknown[] = []
import * as Metric from "effect/Metric"
import { Effect } from "effect"

const program = Effect.gen(function*() {
  // Create frequency metrics for different categories
  const statusCodeFreq = Metric.frequency("http_status_codes", {
    description: "HTTP status code distribution"
  })

  const userActionFreq = Metric.frequency("user_actions", {
    description: "User action frequency"
  })

  // Record occurrences
  yield* Metric.update(statusCodeFreq, "200") // Success
  yield* Metric.update(statusCodeFreq, "200") // Another success
  yield* Metric.update(statusCodeFreq, "404") // Not found
  yield* Metric.update(statusCodeFreq, "500") // Server error
  yield* Metric.update(statusCodeFreq, "200") // Another success

  yield* Metric.update(userActionFreq, "login")
  yield* Metric.update(userActionFreq, "click")
  yield* Metric.update(userActionFreq, "login")
  yield* Metric.update(userActionFreq, "scroll")
  yield* Metric.update(userActionFreq, "click")
  yield* Metric.update(userActionFreq, "click")

  // Read frequency states
  const statusState: Metric.FrequencyState = yield* Metric.value(statusCodeFreq)
  const actionState: Metric.FrequencyState = yield* Metric.value(userActionFreq)

  // FrequencyState contains:
  // - occurrences: ReadonlyMap<string, number> with string values and their counts

  // Analyze frequency distributions
  const getMostFrequent = (occurrences: ReadonlyMap<string, number>) => {
    let maxKey = ""
    let maxCount = 0
    for (const [key, count] of occurrences) {
      if (count > maxCount) {
        maxKey = key
        maxCount = count
      }
    }
    return { key: maxKey, count: maxCount }
  }

  const topStatus = getMostFrequent(statusState.occurrences)
  const topAction = getMostFrequent(actionState.occurrences)
  return {
    statusCodes: {
      totalResponses: Array.from(statusState.occurrences.values()).reduce(
        (a, b) => a + b,
        0
      ), // 5
      mostCommon: topStatus, // { key: "200", count: 3 }
      uniqueCodes: statusState.occurrences.size // 3
    },
    userActions: {
      totalActions: Array.from(actionState.occurrences.values()).reduce(
        (a, b) => a + b,
        0
      ), // 6
      mostCommon: topAction, // { key: "click", count: 3 }
      uniqueActions: actionState.occurrences.size // 3
    }
  }
})

const result = await Effect.runPromise(Effect.provideService(program, Metric.MetricRegistry, new Map()))
const mostCommon = [result.statusCodes.mostCommon, result.userActions.mostCommon]
__compatObserved.push(mostCommon.map(({ key, count }) => [key, count]))
console.log(JSON.stringify(__compatObserved))
