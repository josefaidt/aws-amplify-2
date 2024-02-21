import { createStore } from "./create-store"
import { parseAmplifyOutputs } from "./parse-amplify-outputs"
import { AmplifyOutputs } from "./schema/AmplifyOutputs"

export class Amplify {
  private readonly store: ReturnType<typeof createStore<AmplifyOutputs>>

  constructor(outputs: AmplifyOutputs) {
    const parsed = parseAmplifyOutputs(outputs)
    this.store = createStore<AmplifyOutputs>(parsed)
  }
}
