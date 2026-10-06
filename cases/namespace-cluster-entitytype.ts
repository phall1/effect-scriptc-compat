// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as EntityAddress from "effect/cluster/EntityAddress";
import * as EntityId from "effect/cluster/EntityId";
import * as EntityType from "effect/cluster/EntityType";
import * as ShardId from "effect/cluster/ShardId";
const shardId = ShardId.make("users", 2);
const address = EntityAddress.make({ shardId, entityType: EntityType.EntityType.make("User"), entityId: EntityId.EntityId.make("u1") });
console.log(JSON.stringify([ShardId.toString(shardId), address.entityType, address.entityId]));
