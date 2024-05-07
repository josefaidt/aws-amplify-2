declare module "aws-amplify/env" {
  interface Auth {
    providers: ["GitHub", "Discord"]
  }

  interface Data {
    // schema: import("./amplify/data/resource").Schema
    schema: import("@aws-amplify/backend").ClientSchema<
      typeof import("./amplify/data/schema").schema
    >
  }

  interface Storage {
    buckets: {
      // keyed by the "friendly name" (i.e. no env info)
      mygen2appwithphotos: {
        // actual bucket name
        name: "mygen2appwithphotos-dev"
        // predefined prefixes from defineStorage
        prefixes: ["/photos", "/photos/_admin", "/photos/public"]
      }
      monthlyreports: {
        name: "monthlyreports-dev"
        prefixes: ["/reports", "/raw"]
      }
    }
  }
}
