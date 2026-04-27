import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/sanity/lib/client";

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlForImage(source: unknown) {
  if (!builder) {
    throw new Error("Sanity image builder is not configured.");
  }

  return builder.image(source as Parameters<typeof builder.image>[0]);
}
