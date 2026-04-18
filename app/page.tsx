import Link from "next/link";
import { Leaf, Truck } from "lucide-react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";
import WhyChoose from "@/components/WhyChoose";
import { siteContent } from "@/lib/constants";

const whyPartnerItems = [
  {
    title: "Freshness at the Source",
    description:
      "Located in the heart of Maharashtra's agricultural belt, we have direct access to the finest farms. This ensures our fruits and vegetables are sourced fresh and processed quickly to maintain peak quality.",
    icon: Leaf,
  },
  {
    title: "Strategic Logistics",
    description:
      "Our office is positioned perfectly for rapid transit to the Nhava Sheva (JNPT) Port. This ensures streamlined shipping workflows, reduced lead times, and reliable delivery for every international consignment.",
    icon: Truck,
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Globetrade Corp."
        tagline={siteContent.home.tagline}
        description={siteContent.home.description}
      />

      <Section className="py-24 sm:py-28">
        <div className="max-w-3xl space-y-6">
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            About Us
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            {siteContent.about.description}
          </p>
          <p className="text-base leading-8 text-slate-600">
            {siteContent.about.extra}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent hover:bg-accent/6"
          >
            Read More
          </Link>
        </div>
      </Section>

      <Section
        className="py-24 sm:py-28"
        containerClassName="space-y-10"
        background="subtle"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex rounded-full border border-accent/18 bg-accent/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Products
            </span>
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              Sourced for quality, packed for global trade
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent"
          >
            View All Products
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {siteContent.products.slice(0, 3).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Section>

      <Section className="py-24 sm:py-28">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              Why Partner With Us?
            </h2>
            <p className="text-base leading-8 text-slate-600">
              Our location in Pune offers a unique logistical and sourcing
              advantage that directly benefits our clients:
            </p>
          </div>
          <WhyChoose items={whyPartnerItems} />
        </div>
      </Section>

      <Section className="pb-24 pt-4 sm:pb-28">
        <div className="rounded-[2rem] border border-primary/10 bg-white px-8 py-10 shadow-sm sm:px-12 sm:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Contact
              </span>
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                Start a conversation for your next export requirement
              </h2>
              <p className="text-base leading-8 text-slate-600">
                Connect with {siteContent.contact.person} for sourcing
                discussions, shipment planning, and trade inquiries.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/92"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
