// Adapted from the installed effect@4.0.1 published declarations.
import { Effect, Schema } from "effect"
class Person extends Schema.Class<Person>("Person")({ name: Schema.String, age: Schema.Number }) {}
const person = await Effect.runPromise(Schema.decodeUnknownEffect(Person)({ name: "Ada", age: 42 }))
console.log(`Person:${person.name}:${person.age}`)
