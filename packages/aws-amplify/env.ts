import type { Infer } from "superstruct"
import { AmplifyAuthOutputs } from "./lib/schema/AmplifyAuthOutputs"
import { AmplifyDataOutputs } from "./lib/schema/AmplifyDataOutputs"
import { AmplifyStorageOutputs } from "./lib/schema/AmplifyStorageOutputs"

export type AmplifyStorage = Infer<typeof AmplifyStorageOutputs>
export type AmplifyAuth = Infer<typeof AmplifyAuthOutputs>
export type AmplifyData = Infer<typeof AmplifyDataOutputs>

// extending the types allows us to index in generics based on the "base" shape
export interface Storage extends Infer<typeof AmplifyStorageOutputs> {}
export interface Auth extends Infer<typeof AmplifyAuthOutputs> {}
export interface Data extends Infer<typeof AmplifyDataOutputs> {}

/**
 * validate the interfaces defined in amplify-env.d.ts
 */
export type Expect<Actual, Expected> = [Expected] extends [Actual]
  ? [Actual] extends [Expected]
    ? true
    : false
  : false
