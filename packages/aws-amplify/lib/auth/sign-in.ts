import type { Auth } from "aws-amplify/env"
import type { Infer } from "superstruct"
import { create, is, object, string } from "superstruct"

const SignInOptions = object({
  // ...
})

export function signIn<T extends Auth["providers"][number]>(
  provider: T,
  options?: Infer<typeof SignInOptions>,
) {
  const _options = create(options, SignInOptions)
  // ...
}
