import { siteContent } from "@/lib/constants";
import { sanityFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { allProductsQuery, featuredProductsQuery } from "@/sanity/lib/queries";

export type ProductItem = {
  name: string;
  imageUrl?: string | null;
  hsn: string;
  details: string[];
  featured?: boolean;
};

type SanityProductRecord = {
  name: string;
  image?: unknown;
  hsn: string;
  details: string[];
  featured?: boolean;
};

const staticProducts: ProductItem[] = siteContent.products.map((product, index) => ({
  ...product,
  featured: index < 3,
}));

function mapSanityProduct(product: SanityProductRecord): ProductItem {
  return {
    name: product.name,
    imageUrl: product.image ? urlForImage(product.image).width(1000).height(1000).url() : null,
    hsn: product.hsn,
    details: product.details,
    featured: product.featured,
  };
}

export async function getAllProducts(): Promise<ProductItem[]> {
  const products = await sanityFetch<SanityProductRecord[]>(allProductsQuery);

  if (!products) {
    return staticProducts;
  }

  return products.map(mapSanityProduct);
}

export async function getFeaturedProducts(): Promise<ProductItem[]> {
  const products = await sanityFetch<SanityProductRecord[]>(featuredProductsQuery);

  if (!products) {
    return staticProducts.slice(0, 3);
  }

  return products.map(mapSanityProduct).slice(0, 3);
}
