import type { Storage } from "../../aws-amplify"

// helper type to extract the prefixes type based on the bucket name
type BucketPrefixes<B extends keyof Storage["buckets"]> =
  Storage["buckets"][B]["prefixes"][number]

export function getBucket<B extends keyof Storage["buckets"]>(name: B) {
  const upload = async (
    prefix: BucketPrefixes<B>, // correctly typed based on the bucket name
    file: File,
  ): Promise<void> => {
    // implementation...
  }

  return {
    upload,
  }
}
