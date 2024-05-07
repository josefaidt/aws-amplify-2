import { generateClient as _generateClient } from "@aws-amplify/api"
import type { Data } from "aws-amplify/env"

export function generateClient() {
  return _generateClient<Data["schema"]>()
}
