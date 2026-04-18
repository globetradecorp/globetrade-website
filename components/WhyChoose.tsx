import type { LucideIcon } from "lucide-react";

type WhyChooseItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type WhyChooseProps = {
  items: WhyChooseItem[];
};

export default function WhyChoose({ items }: WhyChooseProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-[1.75rem] border border-border-soft bg-white p-8 shadow-sm"
        >
          <div className="space-y-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <item.icon size={26} strokeWidth={2} />
            </span>
            <h3 className="font-heading text-2xl font-bold text-primary">
              {item.title}
            </h3>
            <p className="text-sm leading-7 text-slate-600">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
