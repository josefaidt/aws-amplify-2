import type { Auth } from "aws-amplify/env"

/**
 * get user attributes
 */
export function getUserAttributes(): Record<keyof Auth["attributes"], string> {
  // @ts-expect-error this one is goofy and we need to assert that we'll return whatever we're expecting
  return {}
}
