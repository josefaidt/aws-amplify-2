import type { Infer } from "superstruct"
import { AmplifyStorageOutputs } from "./lib/schema/AmplifyStorageOutputs"

export type _Storage<T = Record<string, unknown>> = T extends Infer<
  typeof AmplifyStorageOutputs
>
  ? T
  : never
