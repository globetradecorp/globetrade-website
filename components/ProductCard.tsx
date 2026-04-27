type ProductCardProps = {
  product: {
    _id?: string;
    productName: string;
    hsn: string;
    details?: string[];
    image: string;
    showOnHomepage?: boolean;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group h-full rounded-[1.75rem] border border-nature/12 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md sm:p-7">
      <div className="flex h-full flex-col">
        <div className="space-y-5">
          <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-nature/10 bg-[linear-gradient(180deg,rgba(93,138,58,0.06),rgba(45,167,199,0.04))]">
            <div className="absolute inset-0 p-3">
              <div className="relative h-full w-full overflow-hidden rounded-[1.1rem] bg-white">
                <img
                  src={product.image}
                  alt={product.productName}
                  className={`h-full w-full object-cover ${
                    product.productName === "Fresh Cavendish Banana"
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
                {product.productName}
              </h3>
            </div>
            <span className="whitespace-nowrap rounded-full bg-nature/8 px-3 py-1 text-xs font-semibold text-nature">
              HSN {product.hsn}
            </span>
          </div>
          <div className="h-px w-full bg-nature/10" />
        </div>

        <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
          {product.details?.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
