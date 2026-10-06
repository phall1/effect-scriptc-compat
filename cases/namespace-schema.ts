// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { Schema } from "effect";
import { Model } from "effect/schema";
class Item extends Model.Class<Item>("Item")({ id: Model.GeneratedByDb(Schema.Number), name: Schema.String, secret: Model.Sensitive(Schema.String) }) {}
const item = new Item({ id: 1, name: "fixture", secret: "internal" });
const insert = Schema.decodeUnknownSync(Item.insert)({ name: "new", secret: "value" });
const json = Schema.encodeSync(Item.json)(item);
console.log(JSON.stringify([insert, json]));
