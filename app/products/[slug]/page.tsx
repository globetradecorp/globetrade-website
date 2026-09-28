import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Sparkles, ShieldCheck, HelpCircle, Send, Check } from "lucide-react";
import Section from "@/components/Section";
import ProductHero from "@/components/product/ProductHero";
import ProductToc, { type TocItem } from "@/components/product/ProductToc";
import ProductSection from "@/components/product/ProductSection";
import ComparisonTable from "@/components/product/ComparisonTable";
import {
  getAllProductSlugs,
  getProductBySlug,
  type PageSection,
  type Product,
} from "@/lib/products";

export const revalidate = 60;

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

function getEnrichedProduct(product: Product): Product {
  const name = product.name || product.productName || "";
  const isMoringa =
    name.toLowerCase().includes("moringa") ||
    (product.slug || "").includes("moringa");

  if (isMoringa) {
    return {
      ...product,
      subtitle:
        product.subtitle || 'Moringa oleifera ("Miracle Tree" or "Tree of Life")',
      hsn: product.hsn || "07129090",
      category: product.category || product.productCategory || "Herbs",
      overview:
        product.overview ||
        'Moringa oleifera, often called the "Miracle Tree" or "Tree of Life," is one of the world\'s most nutrient-rich plants. Native to the Indian subcontinent, Moringa has been valued for thousands of years for its nutritional, medicinal, and agricultural importance. Today, Moringa powder has become a globally recognized superfood, widely used in the health, wellness, food, pharmaceutical, and cosmetic industries.',
      processingMethod:
        product.processingMethod ||
        "Moringa powder is produced by carefully harvesting fresh Moringa leaves, washing them, drying them at controlled temperatures to preserve nutrients, and grinding them into a fine green powder.",
    };
  }

  const isSuran = name.toLowerCase().includes("suran");
  if (isSuran) {
    return {
      ...product,
      subtitle:
        product.subtitle || "Amorphophallus paeoniifolius (Elephant Foot Yam)",
      hsn: product.hsn || "0714",
      category: product.category || product.productCategory || "Vegetables",
      overview:
        product.overview ||
        "Suran (Elephant Foot Yam) is a nutrient-dense, fiber-rich tropical tuber widely cultivated in India. Known for its distinct texture, high starch and mineral content, and long shelf-life, it is popular in culinary and pharmaceutical preparations globally.",
    };
  }

  const isBanana = name.toLowerCase().includes("banana");
  if (isBanana) {
    return {
      ...product,
      subtitle: product.subtitle || "Musa acuminata (Cavendish Variety)",
      hsn: product.hsn || "0803",
      category: product.category || product.productCategory || "Fruits",
      overview:
        product.overview ||
        "Fresh Cavendish Bananas sourced from premier plantations in Maharashtra, known for uniform caliber, spotless yellow ripening, and superior sweetness.",
    };
  }

  const isPomegranate = name.toLowerCase().includes("pomegranate");
  if (isPomegranate) {
    return {
      ...product,
      subtitle: product.subtitle || "Punica granatum (Bhagwa Variety)",
      hsn: product.hsn || "08109010",
      category: product.category || product.productCategory || "Fruits",
      overview:
        product.overview ||
        "Fresh Indian Pomegranates (Bhagwa variety), globally renowned for their deep red arils, soft seeds, high juice content, and exceptional sweetness.",
    };
  }

  const isOnion = name.toLowerCase().includes("onion");
  if (isOnion) {
    return {
      ...product,
      subtitle: product.subtitle || "Allium cepa (Red / Pink Onions)",
      hsn: product.hsn || "07031010",
      category: product.category || product.productCategory || "Vegetables",
      overview:
        product.overview ||
        "Export-grade Indian Red Onions from Nashik and Pune regions, celebrated for their pungent aroma, crisp texture, and outstanding storability.",
    };
  }

  return product;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const rawProduct = await getProductBySlug(slug);

  if (!rawProduct) {
    return {
      title: "Product Not Found | Globetrade Corp.",
    };
  }

  const product = getEnrichedProduct(rawProduct);
  const displayName = product.name || product.productName || "Product";
  const title = product.seoTitle || displayName;
  const description =
    product.seoDescription ||
    product.overview ||
    `Export-quality ${displayName} sourced from India by Globetrade Corp.`;

  return {
    title: `${title} | Globetrade Corp.`,
    description,
    openGraph: {
      title: `${title} | Globetrade Corp.`,
      description,
      images: product.heroImage || product.image ? [product.heroImage || product.image!] : [],
    },
  };
}

function getDefaultMoringaSections(): PageSection[] {
  return [
    {
      _type: "nutrientsSection",
      badge: "Nutritional Profile",
      title: "Nutrient-Dense Natural Composition",
      description:
        "This nutrient-dense powder naturally contains essential vitamins, minerals, and active plant compounds:",
      nutrientsList: [
        "Plant-based protein",
        "Dietary fiber",
        "Essential amino acids",
        "Iron",
        "Calcium",
        "Potassium",
        "Magnesium",
        "Vitamin A",
        "Vitamin C",
        "Vitamin E",
        "Polyphenols",
        "Chlorophyll",
        "Natural antioxidants",
      ],
      applicationsText:
        "Because of its rich nutritional profile, Moringa is increasingly incorporated into functional foods, dietary supplements, beverages, and wellness products around the world.",
    },
    {
      _type: "originSection",
      badge: "Origin Sourcing",
      title: "Why Choose Indian Moringa?",
      intro: "Indian Moringa is preferred worldwide because of:",
      points: [
        "Rich nutritional profile",
        "Naturally vibrant green color",
        "High leaf quality",
        "Sustainable cultivation",
        "Competitive pricing",
        "Reliable year-round availability",
        "Experienced farming communities",
      ],
    },
    {
      _type: "comparisonSection",
      badge: "Product Comparison",
      title: "Organic vs Conventional Moringa",
      intro:
        "Organic moringa powder differs from conventional powder mainly in farming safety, chemical residue, and cost. Organic options avoid synthetic pesticides and show lower heavy metal accumulation, whereas conventional options are cheaper and more widely available.",
      col1Header: "Organic",
      col2Header: "Conventional",
      rows: [
        {
          feature: "Farming Methods",
          col1Value: "Organic uses natural fertilizers and zero synthetic chemicals",
          col2Value: "conventional uses standard synthetic pesticides and fertilizers",
        },
        {
          feature: "Chemical Residue",
          col1Value: "Organic is certified free of synthetic pesticides",
          col2Value: "conventional may carry low levels of farm chemical residues",
        },
        {
          feature: "Heavy Metals",
          col1Value:
            "Organic typically tests lower for contaminants like lead, cadmium, and arsenic due to strict soil standards",
          col2Value:
            "conventional can have higher trace accumulations based on regional soils",
        },
        {
          feature: "Basic Nutrients",
          col1Value: "High in iron, calcium, and vitamins",
          col2Value: "High in iron, calcium, and vitamins",
        },
        {
          feature: "Price",
          col1Value: "Lower cost per pack",
          col2Value: "Higher cost due to certification",
        },
        {
          feature: "Purity Assurance",
          col1Value: "Standard commercial testing",
          col2Value: "Certified by regulatory boards",
        },
      ],
    },
    {
      _type: "sourcingSection",
      badge: "Export Capabilities",
      title: "Why Choose Globetrade Corp?",
      intro:
        "At Globetrade Corp, we believe that superior products begin with superior sourcing. We work directly with carefully selected Indian farmers and processing units to deliver premium-quality Moringa products that meet international buyer expectations.",
      varietiesTitle: "We can source and export:",
      varieties: [
        "Conventional Moringa Powder",
        "Organic Moringa Powder",
        "Dried Moringa Leaves",
        "Moringa Tea Cut Leaves",
      ],
      specificationsTitle: "Customization & Packaging",
      specifications: [
        "Customized Mesh Sizes",
        "Customized Moisture Levels (subject to specification)",
        "Bulk Industrial Packing",
        "Retail Packing (Private Label options available on request)",
      ],
      note: "Whether you require food-grade, nutraceutical-grade, or customized specifications, our sourcing network enables us to provide solutions tailored to your business needs.",
    },
    {
      _type: "commitmentsSection",
      badge: "Quality & Reliability",
      title: "Our Commitment Includes:",
      commitments: [
        "Direct farmer sourcing",
        "Competitive pricing",
        "Consistent quality",
        "Batch traceability",
        "Timely exports",
        "Flexible order quantities",
        "Quality documentation as required",
        "Customer-focused sourcing solutions",
      ],
    },
    {
      _type: "partnerCtaSection",
      badge: "Commercial Partnership",
      title: "Partner with Globetrade Corp",
      description:
        "Whether you are a food manufacturer, nutraceutical company, herbal brand, importer, wholesaler, or distributor, Globetrade Corp can help you source premium-quality Indian Moringa products with reliability and transparency. We welcome inquiries for both conventional and certified organic Moringa powder, customized according to your quality standards and packaging requirements.",
      ctaText: "Inquire for Export",
      ctaLink: "/contact",
    },
  ];
}

function resolveProductSections(product: Product): PageSection[] {
  if (product.pageSections && product.pageSections.length > 0) {
    return product.pageSections;
  }

  const isMoringa =
    (product.name || product.productName || "").toLowerCase().includes("moringa") ||
    (product.slug || "").includes("moringa");

  if (isMoringa) {
    return getDefaultMoringaSections();
  }

  // Fallback for general products
  const sections: PageSection[] = [];

  if (product.details && product.details.length > 0) {
    sections.push({
      _type: "customSection",
      badge: "Specifications",
      title: "Product Specifications & Highlights",
      bulletPoints: product.details,
    });
  }

  sections.push({
    _type: "partnerCtaSection",
    badge: "Commercial Partnership",
    title: `Source ${product.name || product.productName} with Globetrade Corp`,
    description: `We work directly with established farmers and processors to deliver export-grade ${
      product.name || product.productName
    } with consistent quality and reliable logistics.`,
    ctaText: "Inquire for Export",
    ctaLink: "/contact",
  });

  return sections;
}

function getSectionId(section: PageSection, index: number): string {
  switch (section._type) {
    case "overviewSection":
      return "overview";
    case "nutrientsSection":
      return "nutrients";
    case "originSection":
      return "origin-advantage";
    case "comparisonSection":
      return "comparison";
    case "sourcingSection":
      return "sourcing";
    case "commitmentsSection":
      return "commitments";
    case "partnerCtaSection":
      return "partner";
    case "faqSection":
      return "faqs";
    case "customSection":
      return `section-${index + 1}`;
    default:
      return `section-${index + 1}`;
  }
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const rawProduct = await getProductBySlug(slug);

  if (!rawProduct) {
    notFound();
  }

  const product = getEnrichedProduct(rawProduct);
  const sections = resolveProductSections(product);

  // Build dynamic Table of Contents items directly from ordered sections
  const tocItems: TocItem[] = sections.map((section, idx) => ({
    id: getSectionId(section, idx),
    title: section.title || `Section ${idx + 1}`,
    badge: section.badge,
  }));

  return (
    <Section
      className="py-6 sm:py-10"
      containerClassName="max-w-7xl space-y-8 sm:space-y-12"
    >
      {/* Full-Width Hero Section - Perfectly bounded and aligned */}
      <div className="w-full">
        <ProductHero product={product} />
      </div>

      {/* Main Layout: Symmetrical Grid with Large Content Column + Sticky TOC Sidebar */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] 2xl:grid-cols-[minmax(0,1fr)_340px] gap-8 xl:gap-10 items-start w-full">
        {/* Large Content Column - Occupies generous and balanced width matching the hero alignment */}
        <div className="w-full space-y-8 sm:space-y-12 min-w-0">
          {/* Mobile TOC - Shows ONLY the Jump To dropdown, never the full sidebar card */}
          {tocItems.length > 1 && (
            <div className="xl:hidden">
              <ProductToc items={tocItems} variant="mobile-only" />
            </div>
          )}

          {/* Dynamic Reorderable Sections */}
          {sections.map((section, idx) => {
            const sectionId = getSectionId(section, idx);

            switch (section._type) {
              case "overviewSection":
                return (
                  <ProductSection
                    key={section._key || idx}
                    id={sectionId}
                    badge={section.badge || "Overview"}
                    title={section.title || "Overview & Processing"}
                  >
                    <div className="space-y-5">
                      {section.overview && (
                        <p className="text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7">
                          {section.overview}
                        </p>
                      )}
                      {section.processingMethod && (
                        <div className="rounded-2xl border border-nature/12 bg-nature/5 p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nature">
                            Harvesting & Processing
                          </p>
                          <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                            {section.processingMethod}
                          </p>
                        </div>
                      )}
                    </div>
                  </ProductSection>
                );

              case "nutrientsSection":
                return (
                  <ProductSection
                    key={section._key || idx}
                    id={sectionId}
                    badge={section.badge || "Nutritional Profile"}
                    title={section.title || "Nutrient-Dense Natural Composition"}
                    description={section.description}
                  >
                    <div className="space-y-6">
                      {section.nutrientsList && section.nutrientsList.length > 0 && (
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {section.nutrientsList.map((nutrient, nIdx) => (
                            <div
                              key={nIdx}
                              className="flex items-center gap-3 rounded-2xl border border-nature/15 bg-nature/5 px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-nature/10"
                            >
                              <Sparkles className="h-4 w-4 shrink-0 text-nature" />
                              <span>{nutrient}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {section.applicationsText && (
                        <div className="rounded-2xl border border-border-soft bg-background-subtle p-5 text-sm leading-relaxed text-slate-700 sm:text-base">
                          <p>{section.applicationsText}</p>
                        </div>
                      )}
                    </div>
                  </ProductSection>
                );

              case "originSection":
                return (
                  <ProductSection
                    key={section._key || idx}
                    id={sectionId}
                    badge={section.badge || "Origin Sourcing"}
                    title={section.title || "Why Choose Indian Origin?"}
                    description={section.intro}
                    background="subtle"
                  >
                    {section.points && section.points.length > 0 && (
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {section.points.map((point, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-start gap-3 rounded-2xl border border-border-soft bg-white p-5 shadow-xs"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                            <span className="text-sm font-semibold leading-snug text-slate-800">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </ProductSection>
                );

              case "comparisonSection":
                return (
                  <ProductSection
                    key={section._key || idx}
                    id={sectionId}
                    badge={section.badge || "Product Comparison"}
                    title={section.title || "Organic vs Conventional"}
                    description={section.intro}
                  >
                    <ComparisonTable
                      col1Header={section.col1Header}
                      col2Header={section.col2Header}
                      rows={section.rows}
                    />
                  </ProductSection>
                );

              case "sourcingSection":
                return (
                  <ProductSection
                    key={section._key || idx}
                    id={sectionId}
                    badge={section.badge || "Export Capabilities"}
                    title={section.title || "Why Choose Globetrade Corp?"}
                    description={section.intro}
                    background="subtle"
                  >
                    <div className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        {section.varieties && section.varieties.length > 0 && (
                          <div className="space-y-4 rounded-2xl border border-border-soft bg-white p-6 shadow-xs">
                            <h3 className="font-heading text-lg font-bold text-primary">
                              {section.varietiesTitle || "We can source and export:"}
                            </h3>
                            <ul className="space-y-2.5">
                              {section.varieties.map((v, vIdx) => (
                                <li key={vIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                  <span className="font-medium leading-relaxed">{v}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {section.specifications && section.specifications.length > 0 && (
                          <div className="space-y-4 rounded-2xl border border-border-soft bg-white p-6 shadow-xs">
                            <h3 className="font-heading text-lg font-bold text-primary">
                              {section.specificationsTitle || "Customization & Packaging"}
                            </h3>
                            <ul className="space-y-2.5">
                              {section.specifications.map((s, sIdx) => (
                                <li key={sIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                  <span className="font-medium leading-relaxed">{s}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      {section.note && (
                        <div className="rounded-2xl border border-nature/20 bg-nature/5 p-5 text-sm leading-relaxed text-slate-700 sm:text-base">
                          <p>{section.note}</p>
                        </div>
                      )}
                    </div>
                  </ProductSection>
                );

              case "commitmentsSection":
                return (
                  <ProductSection
                    key={section._key || idx}
                    id={sectionId}
                    badge={section.badge || "Quality & Reliability"}
                    title={section.title || "Our Commitment Includes:"}
                  >
                    {section.commitments && section.commitments.length > 0 && (
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {section.commitments.map((commitment, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-start gap-3 rounded-2xl border border-border-soft bg-background-subtle/70 p-5 shadow-xs transition hover:border-primary/20 hover:bg-white"
                          >
                            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-nature" />
                            <span className="text-sm font-semibold text-slate-800">
                              {commitment}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </ProductSection>
                );

              case "partnerCtaSection":
                return (
                  <ProductSection
                    key={section._key || idx}
                    id={sectionId}
                    badge={section.badge || "Commercial Partnership"}
                    title={section.title || "Partner with Globetrade Corp"}
                    background="subtle"
                  >
                    <div className="max-w-3xl space-y-6">
                      <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                        {section.description}
                      </p>
                      <div className="pt-2">
                        <Link
                          href={section.ctaLink || "/contact"}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-accent/90 hover:shadow-md"
                        >
                          <span>{section.ctaText || "Inquire for Export"}</span>
                          <Send className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </ProductSection>
                );

              case "faqSection":
                return (
                  <ProductSection
                    key={section._key || idx}
                    id={sectionId}
                    badge={section.badge || "Information"}
                    title={section.title || "Frequently Asked Questions"}
                  >
                    {section.faqs && section.faqs.length > 0 && (
                      <div className="space-y-4">
                        {section.faqs.map((faq, fIdx) => (
                          <div
                            key={fIdx}
                            className="rounded-2xl border border-border-soft bg-white p-6 shadow-xs space-y-2"
                          >
                            <div className="flex items-center gap-2.5">
                              <HelpCircle className="h-4 w-4 text-accent shrink-0" />
                              <h4 className="font-heading text-base font-bold text-primary">
                                {faq.question}
                              </h4>
                            </div>
                            <p className="text-sm leading-relaxed text-slate-600 pl-6.5">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </ProductSection>
                );

              case "customSection":
                return (
                  <ProductSection
                    key={section._key || idx}
                    id={sectionId}
                    badge={section.badge}
                    title={section.title}
                  >
                    <div className="space-y-4">
                      {section.content && (
                        <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                          {section.content}
                        </p>
                      )}
                      {section.bulletPoints && section.bulletPoints.length > 0 && (
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {section.bulletPoints.map((bp, bpIdx) => (
                            <li
                              key={bpIdx}
                              className="flex items-start gap-2.5 text-sm text-slate-700"
                            >
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </ProductSection>
                );

              default:
                return null;
            }
          })}
        </div>

        {/* Floating Sticky Sidebar TOC Navigation (Desktop only) */}
        {tocItems.length > 1 && (
          <div className="hidden xl:block w-full">
            <ProductToc items={tocItems} variant="desktop-only" />
          </div>
        )}
      </div>
    </Section>
  );
}
