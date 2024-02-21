import "aws-amplify"

declare module "aws-amplify" {
  // interface Auth {

  // }
  interface Storage {
    buckets: {
      mygen2appwithphotos: {
        name: "mygen2appwithphotos"
        prefixes: ["/photos", "/photos/_admin", "/photos/public"]
      }
      monthlyreports: {
        name: "monthlyreports"
        prefixes: ["/reports", "/raw"]
      }
    }
  }
}
