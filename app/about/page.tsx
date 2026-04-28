import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import { siteContent } from "@/lib/constants";
import { client } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "About",
};

export const revalidate = 60;

type Certification = {
  title: string;
  imageUrl: string;
};

export default async function AboutPage() {
  const certifications: Certification[] = await client.fetch(`
    *[_type == "certification"] | order(order asc) {
      title,
      "imageUrl": logo.asset->url
    }
  `);

  return (
    <>
      <Section className="pb-20 pt-16 sm:pb-24 sm:pt-24">
        <div className="max-w-4xl space-y-6">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            About Us
          </h1>
          <p className="text-base leading-relaxed text-slate-600">
            {siteContent.about.description}
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            {siteContent.about.extra}
          </p>
        </div>
      </Section>

      <Section className="pb-24" containerClassName="max-w-4xl space-y-6">
        {siteContent.about.points.map((point) => (
          <div
            key={point}
            className="flex items-start gap-3 rounded-[1.5rem] border border-border-soft bg-white px-6 py-5 shadow-sm"
          >
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-base leading-8 text-slate-600">{point}</p>
          </div>
        ))}
      </Section>

      {certifications.length > 0 && (
        <Section className="pb-24">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              Licenses & Certifications
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-12 lg:gap-16">
              {certifications.map((certification) => (
                <Image
                  key={certification.title}
                  src={certification.imageUrl}
                  alt={certification.title}
                  width={240}
                  height={160}
                  className="h-32 w-auto object-contain mx-auto"
                />
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
