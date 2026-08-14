import Link from "next/link";
import { Leaf, Truck } from "lucide-react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";
import WhyChoose from "@/components/WhyChoose";
import { siteContent } from "@/lib/constants";
import { getHeroContent } from "@/lib/hero";
import { getProducts, type Product } from "@/lib/products";

export const revalidate = 60;

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

function chunkProductsIntoZigZagRows<T>(products: T[]): T[][] {
  const rows: T[][] = [];
  let index = 0;
  let rowCapacity = 3;

  while (index < products.length) {
    const row = products.slice(index, index + rowCapacity);
    rows.push(row);
    index += rowCapacity;
    rowCapacity = rowCapacity === 3 ? 2 : 3;
  }

  return rows;
}

export default async function Home() {
  // Display ALL products directly on the homepage
  const products: Product[] = await getProducts();
  const heroContent = await getHeroContent();
  const zigZagRows = chunkProductsIntoZigZagRows(products);

  return (
    <>
      <Hero
        tagline={heroContent.tagline}
        heading={heroContent.heading}
        slides={heroContent.slides}
      />

      <Section className="py-20 sm:py-28">
        <div className="max-w-3xl space-y-6">
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            About Us
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            {siteContent.about.description.replace(
              "Pune, Maharashtra",
              "Pune, Maharashtra, India",
            )}
          </p>
          <p className="text-base leading-relaxed text-slate-600">
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
        className="py-20 sm:py-28"
        containerClassName="space-y-12"
        background="subtle"
      >
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <span className="inline-flex rounded-full border border-accent/18 bg-accent/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Products
          </span>
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Sourced for quality, packed for global trade
          </h2>
        </div>

        {/* Dynamic Zig-Zag centered layout: 3 on row 1, 2 centered on row 2, 3 on row 3, etc. */}
        <div className="space-y-7 lg:space-y-9">
          {zigZagRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-7 lg:gap-9"
            >
              {row.map((product) => (
                <div
                  key={product._id}
                  className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.55rem)] max-w-[340px] sm:max-w-none"
                >
                  <ProductCard product={product} variant="compact" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 sm:py-28">
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

      <Section className="pb-20 pt-4 sm:pb-28">
        <div className="rounded-[2rem] border border-primary/10 bg-white px-8 py-10 shadow-xs sm:px-12 sm:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Contact
              </span>
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                Start a conversation for your next export requirement
              </h2>
              <p className="text-base leading-8 text-slate-600">
                Connect with us for sourcing discussions, shipment planning,
                and trade inquiries.
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
