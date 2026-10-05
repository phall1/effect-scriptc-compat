// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import { Event, EventGroup } from "effect/eventlog";
const options = { tag: "Changed", payload: Schema.Struct({ id: Schema.String }), primaryKey: (payload: { readonly id: string }) => payload.id };
const event = Event.make(options);
const group = EventGroup.empty.add(options);
console.log(JSON.stringify([Event.isEvent(event), EventGroup.isEventGroup(group), Object.keys(group.events), event.primaryKey({id: "a"})]));
