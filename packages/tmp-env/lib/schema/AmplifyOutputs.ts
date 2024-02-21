import type { Infer } from "superstruct"
import { enums, number, object, optional } from "superstruct"
import { AWS_REGIONS } from "../constants"
import { AmplifyAuthOutputs } from "./AmplifyAuthOutputs"
import { AmplifyDataOutputs } from "./AmplifyDataOutputs"
import { AmplifyStorageOutputs } from "./AmplifyStorageOutputs"

export const AmplifyOutputs = object({
  _VERSION: number(),
  AWS_REGION: enums(AWS_REGIONS),
  AUTH: AmplifyAuthOutputs,
  DATA: AmplifyDataOutputs,
  STORAGE: AmplifyStorageOutputs,
  CUSTOM: optional(object()),
})

export type AmplifyOutputs = Infer<typeof AmplifyOutputs>
