// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { OtlpResource } from "effect/observability";
const resource = OtlpResource.make({ serviceName: "fixture", serviceVersion: "1.0", attributes: { region: "test", ready: true } });
console.log(JSON.stringify([OtlpResource.serviceNameUnsafe(resource), resource.attributes, resource.droppedAttributesCount]));
