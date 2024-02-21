import type { Infer } from "superstruct"
import { AmplifyAuthOutputs } from "./lib/schema/AmplifyAuthOutputs"
import { AmplifyDataOutputs } from "./lib/schema/AmplifyDataOutputs"
import { AmplifyStorageOutputs } from "./lib/schema/AmplifyStorageOutputs"

export type { AmplifyOutputs } from "./lib/schema/AmplifyOutputs"
export { parseAmplifyOutputs } from "./lib/parse-amplify-outputs"
export { Amplify } from "./lib/Amplify"
export { getBucket } from "./lib/storage/get-bucket"

export interface Storage extends Infer<typeof AmplifyStorageOutputs> {}
export interface Auth extends Infer<typeof AmplifyAuthOutputs> {}
export interface Data extends Infer<typeof AmplifyDataOutputs> {}
