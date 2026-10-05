// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as M from "effect/cluster/ShardingRegistrationEvent";
import { ShardId, SingletonAddress } from "effect/cluster";
const event = M.SingletonRegistered({ address: new SingletonAddress.SingletonAddress({ name: "fixture", shardId: ShardId.make("default", 1) }) });
console.log(JSON.stringify(M.match(event, { EntityRegistered: event => event.entity.type, SingletonRegistered: event => event.address.name })));
