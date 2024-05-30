import {
  array,
  boolean,
  enums,
  intersection,
  number,
  object,
  optional,
  pattern,
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
  aws_region: enums(AWS_REGIONS),
  providers: array(string()),
  attributes: record(
    intersection([
      enums([
        "address",
        "birthdate",
        "email",
        "familyName",
        "gender",
        "givenName",
        "locale",
        "middleName",
        "fullname",
        "nickname",
        "phoneNumber",
        "profilePicture",
        "preferredUsername",
        "profilePage",
        "timezone",
        "lastUpdatedTime",
        "website",
      ]),
      pattern(string(), /^custom\:[A-z]+/),
    ]),
    object({
      // dummy "config" objects, we just need a reason to key the object with the attribute name
      min: number(),
      max: number(),
      required: boolean(),
    }),
  ),
})
