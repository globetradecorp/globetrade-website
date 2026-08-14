import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getProductSlug, type Product } from "@/lib/products";

type ProductCardProps = {
  product: Partial<Product> & {
    _id?: string;
    productName?: string;
    name?: string;
    hsn?: string;
    details?: string[];
    image?: string;
    slug?: string;
    showOnHomepage?: boolean;
  };
  variant?: "compact" | "detailed";
};

export default function ProductCard({
  product,
  variant = "detailed",
}: ProductCardProps) {
  const name = product.productName || product.name || "Product";
  const slug = getProductSlug(product);
  const href = `/products/${slug}`;
  const image = product.image || "/images/hero/produce-hero.jpg";

  if (variant === "compact") {
    return (
      <article className="group h-full rounded-[1.35rem] border border-border-soft bg-white p-3.5 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md sm:p-4">
        <Link href={href} className="flex h-full flex-col">
          {/* Image Container - Compact & Crisp */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1rem] border border-nature/10 bg-[linear-gradient(180deg,rgba(93,138,58,0.05),rgba(45,167,199,0.03))] p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[0.75rem] bg-white">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 85vw"
                className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                  name.toLowerCase().includes("banana")
                    ? "object-[65%_center]"
                    : "object-center"
                }`}
              />
            </div>
          </div>

          {/* Bottom Area: Name Left, Arrow Right with subtle slide */}
          <div className="mt-3 flex flex-1 items-center justify-between gap-3 px-1">
            <h3 className="font-heading text-sm font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-accent sm:text-base">
              {name}
            </h3>
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 ease-out group-hover:bg-accent group-hover:text-white group-hover:translate-x-0.5"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group h-full rounded-[1.75rem] border border-nature/12 bg-white p-6 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md sm:p-7 flex flex-col justify-between">
      <div className="space-y-5">
        <Link href={href} className="block">
          <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-nature/10 bg-[linear-gradient(180deg,rgba(93,138,58,0.06),rgba(45,167,199,0.04))]">
            <div className="absolute inset-0 p-3">
              <div className="relative h-full w-full overflow-hidden rounded-[1.1rem] bg-white">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                  className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                    name.toLowerCase().includes("banana")
                      ? "object-[65%_center]"
                      : "object-center"
                  }`}
                />
              </div>
            </div>
          </div>
        </Link>

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nature">
              Product
            </p>
            <h3 className="mt-1 font-heading text-2xl font-bold text-slate-950">
              <Link
                href={href}
                className="transition-colors hover:text-accent"
              >
                {name}
              </Link>
            </h3>
          </div>
          {product.hsn ? (
            <span className="whitespace-nowrap rounded-full bg-nature/8 px-3 py-1 text-xs font-semibold text-nature">
              HSN {product.hsn}
            </span>
          ) : null}
        </div>

        <div className="h-px w-full bg-nature/10" />

        {product.details && product.details.length > 0 ? (
          <ul className="space-y-3 text-sm leading-6 text-slate-600">
            {product.details.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* Professional Call-to-Action for Dedicated Page */}
      <div className="mt-6 pt-5 border-t border-border-soft flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-nature">
          Export Grade
        </span>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-200 group-hover:text-accent"
        >
          <span>Explore Product</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
