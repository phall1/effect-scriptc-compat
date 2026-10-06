// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import * as M from "effect/cluster/K8sHttpClient";
const pod = Schema.decodeUnknownSync(M.Pod)({ status: { phase: "Running", podIP: "10.0.0.1", hostIP: "10.0.0.2", conditions: [{ type: "Ready", status: "True", lastTransitionTime: "2020-01-01T00:00:00Z" }] } });
console.log(JSON.stringify([pod.status.podIP, pod.isReady, pod.isReadyOrInitializing]));
