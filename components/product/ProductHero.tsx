import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Send } from "lucide-react";
import type { Product } from "@/lib/products";

type ProductHeroProps = {
  product: Product;
};

export default function ProductHero({ product }: ProductHeroProps) {
  const displayName = product.name || product.productName;
  const category = product.category || product.productCategory || "Agricultural Export";
  const heroImage = product.heroImage || product.image || "/images/hero/moringa-hero.png";

  return (
    <div className="space-y-6 pt-2 sm:pt-4">
      {/* Simple, Clean Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm">
        <Link href="/" className="transition hover:text-accent">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
        <Link href="/products" className="transition hover:text-accent">
          Products
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
        <span className="truncate font-semibold text-primary" aria-current="page">
          {displayName}
        </span>
      </nav>

      {/* Hero Showcase Grid */}
      <div className="grid gap-8 rounded-[2rem] border border-border-soft bg-white p-6 shadow-xs sm:p-8 md:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:items-center">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full border border-nature/20 bg-nature/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-nature">
              {category}
            </span>
            {product.hsn ? (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                HSN {product.hsn}
              </span>
            ) : null}
          </div>

          <div className="space-y-2">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
              {displayName}
            </h1>
            {product.subtitle ? (
              <p className="text-base font-medium italic text-nature sm:text-lg">
                {product.subtitle}
              </p>
            ) : null}
          </div>

          {product.overview ? (
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7">
              {product.overview}
            </p>
          ) : null}

          {product.processingMethod ? (
            <div className="rounded-2xl border border-nature/12 bg-nature/5 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nature">
                Harvesting & Processing
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                {product.processingMethod}
              </p>
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-xs transition hover:bg-accent/90"
            >
              <span>Inquire for Export</span>
              <Send className="h-4 w-4" />
            </Link>
            <a
              href="#sourcing"
              className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-background-subtle px-6 py-3.5 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-white"
            >
              Explore Sourcing
            </a>
          </div>
        </div>

        {/* Product Image Frame */}
        <div className="relative aspect-square w-full overflow-hidden rounded-[1.75rem] border border-border-soft bg-[linear-gradient(180deg,rgba(93,138,58,0.06),rgba(45,167,199,0.04))] p-3 sm:p-4">
          <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-white">
            <Image
              src={heroImage}
              alt={displayName}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
