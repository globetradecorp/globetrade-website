import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "default" | "subtle";
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  background = "default",
}: SectionProps) {
  const backgroundClass =
    background === "subtle" ? "bg-background-subtle/70" : "bg-transparent";

  return (
    <section id={id} className={`${backgroundClass} ${className}`}>
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
