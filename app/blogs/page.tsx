import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogsPage() {
  return (
    <Section className="pb-24 pt-16 sm:pb-28 sm:pt-24">
      <div className="max-w-4xl space-y-6">
        <span className="inline-flex rounded-full border border-accent/18 bg-accent/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          Blogs
        </span>
        <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Industry updates and export insights will be shared here soon.
        </h1>
        <p className="text-lg leading-8 text-slate-600">
          We are preparing articles focused on herbs, fruits, vegetables, and practical trade guidance for global buyers.
        </p>
      </div>
    </Section>
  );
}
