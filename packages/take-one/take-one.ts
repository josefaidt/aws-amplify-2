import {
  generateClient,
  getUserAttributes,
  getBucket,
  upload,
  signIn,
} from "aws-amplify"

const client = generateClient()

upload("monthlyreports", {
  path: "/raw",
  file: new File([], "my-file"),
})

const attributes = getUserAttributes()

console.log(attributes["custom:username"])
console.log(attributes.email)
// @ts-expect-error Property 'birthdate' does not exist on type 'Record<"email" | "custom:username", string>'
console.log(attributes.birthdate)
