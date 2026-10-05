// Generated from node_modules/effect/dist/schema/Model.d.ts, example 0.
// SHA-256: 0f3f7f1b3fce881c7a1e76cff2edc7371b5c92d4881f84840cf5381a1e23941f
const __compatObserved: unknown[] = []
import { Schema } from "effect"
import * as Model from "effect/schema/Model"

export const GroupId = Schema.Number.pipe(Schema.brand("GroupId"))

export class Group extends Model.Class<Group>("Group")({
  id: Model.GeneratedByDb(GroupId),
  name: Schema.String,
  createdAt: Model.DateTimeInsertFromDate,
  updatedAt: Model.DateTimeUpdateFromDate
}) {}

// schema used for selects
Group

// schema used for inserts
Group.insert

// schema used for updates
Group.update

// schema used for json api
Group.json
Group.jsonCreate
Group.jsonUpdate

// you can also turn them into classes
class GroupJson extends Schema.Class<GroupJson>("GroupJson")(Group.json) {
  get upperName() {
    return this.name.toUpperCase()
  }
}

__compatObserved.push([Schema.isSchema(Group), Schema.isSchema(Group.insert), Schema.isSchema(Group.json)])
console.log(JSON.stringify(__compatObserved))
