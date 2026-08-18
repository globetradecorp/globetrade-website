import { client } from "./sanity";

export type ComparisonRow = {
  feature: string;
  col1Value?: string;
  col2Value?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type OverviewSection = {
  _type: "overviewSection";
  _key?: string;
  badge?: string;
  title?: string;
  overview?: string;
  processingMethod?: string;
};

export type NutrientsSection = {
  _type: "nutrientsSection";
  _key?: string;
  badge?: string;
  title?: string;
  description?: string;
  nutrientsList?: string[];
  applicationsText?: string;
};

export type OriginSection = {
  _type: "originSection";
  _key?: string;
  badge?: string;
  title?: string;
  intro?: string;
  points?: string[];
};

export type ComparisonSection = {
  _type: "comparisonSection";
  _key?: string;
  badge?: string;
  title?: string;
  intro?: string;
  col1Header?: string;
  col2Header?: string;
  rows?: ComparisonRow[];
};

export type SourcingSection = {
  _type: "sourcingSection";
  _key?: string;
  badge?: string;
  title?: string;
  intro?: string;
  varietiesTitle?: string;
  varieties?: string[];
  specificationsTitle?: string;
  specifications?: string[];
  note?: string;
};

export type CommitmentsSection = {
  _type: "commitmentsSection";
  _key?: string;
  badge?: string;
  title?: string;
  commitments?: string[];
};

export type PartnerCtaSection = {
  _type: "partnerCtaSection";
  _key?: string;
  badge?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
};

export type FaqSection = {
  _type: "faqSection";
  _key?: string;
  badge?: string;
  title?: string;
  faqs?: FaqItem[];
};

export type CustomSection = {
  _type: "customSection";
  _key?: string;
  badge?: string;
  title: string;
  content?: string;
  bulletPoints?: string[];
};

export type PageSection =
  | OverviewSection
  | NutrientsSection
  | OriginSection
  | ComparisonSection
  | SourcingSection
  | CommitmentsSection
  | PartnerCtaSection
  | FaqSection
  | CustomSection;

export type Product = {
  _id: string;
  name: string;
  productName: string;
  slug?: string;
  displayOrder?: number;
  subtitle?: string;
  hsn?: string;
  details?: string[];
  showOnHomepage?: boolean;
  image?: string;
  heroImage?: string;
  category?: string;
  productCategory?: string;
  seoTitle?: string;
  seoDescription?: string;
  overview?: string;
  processingMethod?: string;
  inquireCtaText?: string;
  sourcingCtaText?: string;
  pageSections?: PageSection[];
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProductSlug(product: { slug?: string; name?: string; productName?: string }): string {
  if (product.slug) {
    return product.slug;
  }
  const name = product.name || product.productName || "";
  const baseName = name.split("(")[0].trim();
  if (baseName.toLowerCase() === "suran") {
    return "suran";
  }
  return slugify(name);
}

const pageSectionsProjection = `
  pageSections[] {
    _type,
    _key,
    badge,
    title,
    description,
    overview,
    processingMethod,
    nutrientsList,
    applicationsText,
    intro,
    points,
    col1Header,
    col2Header,
    rows[] {
      feature,
      col1Value,
      col2Value
    },
    varietiesTitle,
    varieties,
    specificationsTitle,
    specifications,
    note,
    commitments,
    ctaText,
    ctaLink,
    faqs[] {
      question,
      answer
    },
    content,
    bulletPoints
  }
`;

type RawSanityProduct = Product & {
  pageDoc?: {
    heroImage?: string;
    overview?: string;
    processingMethod?: string;
    inquireCtaText?: string;
    sourcingCtaText?: string;
    seoTitle?: string;
    seoDescription?: string;
    pageSections?: PageSection[];
  };
};

export async function getProducts(): Promise<Product[]> {
  try {
    const rawProducts: RawSanityProduct[] = await client.fetch(`
      *[_type == "product"] | order(coalesce(displayOrder, 999) asc, name asc) {
        _id,
        name,
        "productName": name,
        "slug": slug.current,
        displayOrder,
        subtitle,
        hsn,
        details,
        "showOnHomepage": isFeatured,
        "image": image.asset->url,
        "category": productCategory,
        productCategory,
        "pageDoc": coalesce(
          dedicatedPage->,
          *[_type == "productPage" && references(^._id)][0]
        ) {
          "heroImage": heroImage.asset->url,
          overview,
          "processingMethod": harvestingProcessing,
          inquireCtaText,
          sourcingCtaText,
          seoTitle,
          seoDescription,
          ${pageSectionsProjection}
        }
      }
    `);

    // Combine Product with its referenced Dedicated Product Page automatically
    const mapped = (rawProducts || []).map((p) => {
      const page = p.pageDoc;
      return {
        _id: p._id,
        name: p.name,
        productName: p.productName || p.name,
        slug: p.slug,
        displayOrder: typeof p.displayOrder === "number" ? p.displayOrder : undefined,
        subtitle: p.subtitle,
        hsn: p.hsn,
        details: p.details,
        showOnHomepage: p.showOnHomepage,
        image: p.image,
        category: p.category,
        productCategory: p.productCategory,
        heroImage: page?.heroImage || p.image,
        overview: page?.overview || p.overview,
        processingMethod: page?.processingMethod || p.processingMethod,
        inquireCtaText: page?.inquireCtaText || p.inquireCtaText,
        sourcingCtaText: page?.sourcingCtaText || p.sourcingCtaText,
        seoTitle: page?.seoTitle || p.seoTitle,
        seoDescription: page?.seoDescription || p.seoDescription,
        pageSections: page?.pageSections && page.pageSections.length > 0 ? page.pageSections : p.pageSections,
      };
    });

    // Centralized deterministic sorting: primary displayOrder asc, secondary name asc
    return mapped.sort((a, b) => {
      const orderA = typeof a.displayOrder === "number" ? a.displayOrder : 999;
      const orderB = typeof b.displayOrder === "number" ? b.displayOrder : 999;
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      return (a.name || "").localeCompare(b.name || "");
    });
  } catch (error) {
    console.error("Failed to fetch products from Sanity:", error);
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts();
  if (!products || products.length === 0) {
    return null;
  }

  const normalized = slug.toLowerCase().trim();

  // 1. Direct slug or ID match
  let found = products.find(
    (p) => (p.slug && p.slug.toLowerCase() === normalized) || p._id === slug
  );

  // 2. Slugified full name or short name match
  if (!found) {
    found = products.find((p) => {
      const name = p.name || p.productName || "";
      const generatedSlug = getProductSlug(p);
      const fullSlug = slugify(name);
      const shortNameSlug = slugify(name.split("(")[0].trim());

      return (
        generatedSlug === normalized ||
        fullSlug === normalized ||
        shortNameSlug === normalized ||
        generatedSlug.replace(/s$/, "") === normalized.replace(/s$/, "") ||
        fullSlug.replace(/s$/, "") === normalized.replace(/s$/, "")
      );
    });
  }

  return found || null;
}

export async function getAllProductSlugs(): Promise<string[]> {
  const products = await getProducts();
  const slugs = new Set<string>();

  for (const product of products) {
    if (product.slug) {
      slugs.add(product.slug);
    }
    const name = product.name || product.productName || "";
    const derived = getProductSlug(product);
    if (derived) {
      slugs.add(derived);
      if (derived.endsWith("s")) {
        slugs.add(derived.slice(0, -1));
      }
    }
    const shortDerived = slugify(name.split("(")[0].trim());
    if (shortDerived) {
      slugs.add(shortDerived);
    }
    const fullDerived = slugify(name);
    if (fullDerived) {
      slugs.add(fullDerived);
    }
  }

  slugs.add("moringa-leaves-powder");
  slugs.add("suran");
  slugs.add("suran-elephant-foot-yam");
  slugs.add("fresh-cavendish-banana");
  slugs.add("fresh-cavendish-bananas");

  return Array.from(slugs);
}
