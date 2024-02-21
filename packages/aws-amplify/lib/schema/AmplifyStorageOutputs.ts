import { array, object, optional, record, string } from "superstruct"

export const AmplifyStorageOutputs = object({
  buckets: record(
    string(),
    object({
      name: string(),
      prefixes: array(string()),
    }),
  ),
})
