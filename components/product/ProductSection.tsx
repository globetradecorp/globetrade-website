import type { ReactNode } from "react";

type ProductSectionProps = {
  id?: string;
  badge?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  background?: "white" | "subtle";
};

export default function ProductSection({
  id,
  badge,
  title,
  description,
  children,
  className = "",
  background = "white",
}: ProductSectionProps) {
  const bgClass = background === "subtle" ? "bg-background-subtle" : "bg-white";

  return (
    <section
      id={id}
      className={`scroll-mt-24 rounded-[2rem] border border-border-soft ${bgClass} p-6 shadow-sm sm:p-8 md:p-10 ${className}`}
    >
      <div className="space-y-6">
        <div className="max-w-3xl space-y-3">
          {badge ? (
            <span className="inline-flex rounded-full border border-accent/20 bg-accent/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {badge}
            </span>
          ) : null}
          <h2 className="font-heading text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7">
              {description}
            </p>
          ) : null}
        </div>

        <div className="pt-2">{children}</div>
      </div>
    </section>
  );
}
