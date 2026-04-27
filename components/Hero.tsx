import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";

type HeroProps = {
  title: string;
  tagline: string;
  description: string;
};

export default function Hero({ title, tagline, description }: HeroProps) {
  return (
    <Section className="pb-10 pt-10 sm:pb-12 sm:pt-12 lg:pb-14 lg:pt-6">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-accent/18 bg-accent/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {tagline}
          </span>
          <div className="space-y-6">
            <h1 className="text-balance font-heading text-5xl font-bold tracking-tight text-primary sm:text-6xl lg:text-[4.45rem]">
              {title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600 sm:text-[1.15rem]">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-accent/92"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-primary bg-transparent px-7 py-3.5 text-sm font-semibold text-primary hover:border-secondary hover:bg-secondary/8"
            >
              Explore Products
            </Link>
          </div>
          <div className="lg:hidden">
            <Image
              src="/images/logo.svg"
              alt=""
              width={320}
              height={320}
              className="max-w-[280px] sm:max-w-[320px] mx-auto object-contain opacity-90"
            />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <Image
            src="/images/logo.svg"
            alt="Globetrade logo"
            width={120}
            height={120}
            className="mb-3 hidden object-contain lg:block"
          />
          <div className="rounded-[2rem] border border-border-soft bg-white p-8 shadow-sm sm:p-10">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Premium Agricultural Exports
                </p>
                <p className="font-heading text-3xl font-bold leading-tight text-primary">
                  Reliable sourcing and export support for global buyers.
                </p>
              </div>
              <div className="space-y-4 rounded-[1.5rem] border border-accent/10 bg-background-subtle p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#2DA7C7]" />
                  <p className="text-sm leading-7 text-slate-600">
                    Direct access to fresh farm produce with a focus on consistent quality.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#2DA7C7]" />
                  <p className="text-sm leading-7 text-slate-600">
                    Practical logistics planning for dependable international shipments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
