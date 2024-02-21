import { is } from "superstruct"
import { AmplifyOutputs } from "./schema/AmplifyOutputs"

export function parseAmplifyOutputs(outputs: AmplifyOutputs) {
  if (!is(outputs, AmplifyOutputs)) {
    throw new Error("Invalid outputs")
  }
  return outputs
}
