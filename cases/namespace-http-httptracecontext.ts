// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Option } from "effect";
import * as M from "effect/http/HttpTraceContext";
import { Headers } from "effect/http";
const parsed = M.fromHeaders(Headers.fromInput({ traceparent: "00-0123456789abcdef0123456789abcdef-0123456789abcdef-01" }));
console.log(JSON.stringify(Option.match(parsed, { onNone: () => ["none"], onSome: span => [span.traceId, span.spanId, span.sampled] })));
