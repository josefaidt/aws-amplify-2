import type { Storage } from "aws-amplify/env"

// helper type to extract the prefixes type based on the bucket name
type BucketPrefixes<B extends keyof Storage["buckets"]> =
  Storage["buckets"][B]["prefixes"][number]

export function upload<B extends keyof Storage["buckets"]>(
  name: B,
  options: {
    path: BucketPrefixes<B>
    file: File
  },
) {}
