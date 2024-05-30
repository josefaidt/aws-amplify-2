import { generateClient, getBucket, upload, signIn } from "aws-amplify"

const client = generateClient()

upload("monthlyreports", {
  path: "/raw",
  file: new File([], "my-file"),
})
