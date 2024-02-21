// amplify-outputs.ts

/**
 * Outputs from `defineAuth`
 */
export const AUTH = {
  /**
   * Region for Cognito. This may be different if you referenced a
   * Cognito resource in a different region
   * @todo is this needed?
   */
  AWS_REGION: "us-east-1",
  USER_POOL_ID: "us-east-1_PUK3WcYns",
  USER_POOL_CLIENT_ID: "4oljabt18fjrcr5pr7jt8rosi5",
  IDENTITY_POOL_ID: "us-east-1:584d93c1-a66f-4cec-87df-4b762b8a4488",
  PASSWORD_POLICY_MINIMUM_LENGTH: 32,
  PASSWORD_POLICY_CHARACTERS: [
    "REQUIRES_NUMBERS",
    "REQUIRES_LOWERCASE",
    "REQUIRES_UPPERCASE",
    "REQUIRES_SYMBOLS",
  ],
  SOCIAL_PROVIDERS: [
    // custom OIDC provider by name
    "Midway",
  ],
  OAUTH_DOMAIN: "myamplifygen2app.auth.us-east-1.amazoncognito.com",
  OAUTH_SCOPE: [
    "phone",
    "email",
    "openid",
    "profile",
    "aws.cognito.signin.user.admin",
  ],
  OAUTH_REDIRECT_SIGN_IN: "http://localhost:5173",
  OAUTH_REDIRECT_SIGN_OUT: "http://localhost:5173",
  OAUTH_RESPONSE_TYPE: "code",

  /**
   * Cognito username attributes
   * @todo replace?
   */
  USERNAME_ATTRIBUTES: ["email"],
  /**
   * User pool attributes for user profiles
   * This is a combination of standard and custom attributes
   * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html
   */
  USER_POOL_ATTRIBUTES: ["email", "custom:favorite_color"],
  /**
   * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html
   */
  VERIFICATION_MECHANISMS: ["email"],
} as const

/**
 * Outputs from `defineData`
 */
export const DATA = {
  /* things */
} as const

/**
 * Outputs from `defineStorage`
 */
export const STORAGE = {
  BUCKETS: [
    {
      // @TODO do we also need region (like auth?)
      name: "mygen2appwithphotos",
      prefixes: ["/photos", "/photos/_admin", "/photos/public"],
    },
    {
      name: "monthlyreports",
      prefixes: ["/reports", "/raw"],
    },
  ],
} as const

/**
 * Outputs from `backend.setCustomOutput()`
 * @example
 * import { defineBackend } from "@aws-amplify/backend"
 * const backend = defineBackend({})
 * backend.setCustomOutput("hello", "world")
 */
export const CUSTOM = {
  API_ENDPOINT: "https://...",
} as const

/**
 * This is an auto-generated constant for use with aws-amplify
 * @example
 * import { Amplify } from "aws-amplify"
 * import { AMPLIFY_OUTPUTS } from "./amplify-outputs"
 * Amplify.configure(AMPLIFY_OUTPUTS)
 */
export const AMPLIFY_OUTPUTS = {
  /** @internal */
  _VERSION: 1,
  AWS_REGION: "us-east-1",
  AUTH,
  DATA,
  STORAGE,
  CUSTOM,
} as const
