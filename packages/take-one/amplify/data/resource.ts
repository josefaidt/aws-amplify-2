import { type ClientSchema, a } from "@aws-amplify/backend"

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization([a.allow.owner(), a.allow.public().to(["read"])]),
})

export type Schema = ClientSchema<typeof schema>
