import { generateClient, getUserAttributes, upload, signIn } from "aws-amplify"

const client = generateClient()

client.models.Todo.create({})
// @ts-expect-error "Property 'DoesNotExist' does not exist on type ..."
client.models.DoesNotExist.create({})

upload("monthlyreports", {
  path: "/raw",
  file: new File([], "my-file"),
})

signIn("Discord")
// @ts-expect-error Argument of type '"LinkedIn"' is not assignable to parameter of type '"GitHub" | "Discord"'.
signIn("LinkedIn")

const attributes = getUserAttributes()

console.log(attributes["custom:username"])
console.log(attributes.email)
// @ts-expect-error Property 'birthdate' does not exist on type 'Record<"email" | "custom:username", string>'
console.log(attributes.birthdate)
