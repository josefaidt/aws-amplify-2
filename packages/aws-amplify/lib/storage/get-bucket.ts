import type { Storage } from "aws-amplify/env"

// helper type to extract the prefixes type based on the bucket name
type BucketPrefixes<B extends keyof Storage["buckets"]> =
  Storage["buckets"][B]["prefixes"][number]

export function getBucket<B extends keyof Storage["buckets"]>(name: B) {
  const download = async (
    prefix: BucketPrefixes<B>,
    key: string,
  ): Promise<File> => {
    // implementation...
    const file = new File(["..."], key)
    return new Promise((resolve) => resolve(file))
  }

  const upload = async (
    prefix: BucketPrefixes<B>, // correctly typed based on the bucket name
    file: File,
  ): Promise<void> => {
    // implementation...
  }

  return {
    download,
    upload,
  }
}
