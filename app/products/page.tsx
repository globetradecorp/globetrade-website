import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";
import { siteContent } from "@/lib/constants";
import { getProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
};

export const revalidate = 60;

export default async function ProductsPage() {
  const products: Array<{
    _id: string;
    productName: string;
    hsn: string;
    details?: string[];
    image: string;
    showOnHomepage?: boolean;
  }> = await getProducts();

  return (
    <>
      <Section className="pb-12 pt-16 sm:pb-16 sm:pt-24">
        <div className="max-w-4xl space-y-6">
          <span className="inline-flex rounded-full border border-accent/18 bg-accent/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Products
          </span>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Premium agricultural exports prepared for consistent global supply
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            {siteContent.home.description}
          </p>
        </div>
      </Section>

      <Section className="pb-24" containerClassName="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Section>
    </>
  );
}
