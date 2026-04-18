import Image from "next/image";
import { siteContent } from "@/lib/constants";

type Product = (typeof siteContent.products)[number];

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const imageSrc = `/images/${encodeURIComponent(product.name)}.jpg`;

  return (
    <article className="group h-full rounded-[1.75rem] border border-nature/12 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md sm:p-7">
      <div className="flex h-full flex-col">
        <div className="space-y-5">
          <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-nature/10 bg-[linear-gradient(180deg,rgba(93,138,58,0.06),rgba(45,167,199,0.04))]">
            <div className="absolute inset-0 p-3">
              <div className="relative h-full w-full overflow-hidden rounded-[1.1rem] bg-white">
                <Image
                  src={imageSrc}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1280px) 22rem, (min-width: 768px) 40vw, 100vw"
                  className={`object-cover ${
                    product.name === "Fresh Cavendish Banana"
                      ? "object-[65%_center]"
                      : "object-center"
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-nature">
                Product
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-slate-950">
                {product.name}
              </h3>
            </div>
            <span className="rounded-full bg-nature/8 px-3 py-1 text-xs font-semibold text-nature">
              HSN {product.hsn}
            </span>
          </div>
          <div className="h-px w-full bg-nature/10" />
        </div>

        <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
          {product.details.map((detail) => (
            <li key={detail} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
