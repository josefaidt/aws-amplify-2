import { a } from "@aws-amplify/backend"

export const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization([a.allow.owner(), a.allow.public().to(["read"])]),
})
