import type { StandardAttributes } from "aws-cdk-lib/aws-cognito"
import {
  array,
  enums,
  number,
  object,
  optional,
  record,
  string,
} from "superstruct"
import { AWS_REGIONS } from "../constants"

// export const AmplifyAuthOutputs = object({
//   AWS_REGION: enums(AWS_REGIONS),
//   USER_POOL_ID: string(),
//   USER_POOL_CLIENT_ID: string(),
//   IDENTITY_POOL_ID: string(),
//   PASSWORD_POLICY_MINIMUM_LENGTH: number(),
//   PASSWORD_POLICY_CHARACTERS: array(
//     enums([
//       "REQUIRES_NUMBERS",
//       "REQUIRES_LOWERCASE",
//       "REQUIRES_UPPERCASE",
//       "REQUIRES_SYMBOLS",
//     ]),
//   ),
//   SOCIAL_PROVIDERS: array(string()),
//   OAUTH_DOMAIN: optional(string()),
//   OAUTH_SCOPE: optional(array(string())),
//   OAUTH_REDIRECT_SIGN_IN: optional(string()),
//   OAUTH_REDIRECT_SIGN_OUT: optional(string()),
//   OAUTH_RESPONSE_TYPE: optional(enums(["code", "token"])),
// })

export const AmplifyAuthOutputs = object({
  aws_region: string(),
  providers: array(string()),
  user_attributes: record<keyof StandardAttributes, string>(string(), string()),
})
