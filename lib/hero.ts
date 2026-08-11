import { client } from "./sanity";

export type HeroSlide = {
  _id: string;
  image: string;
  altText: string;
  displayOrder?: number;
};

export type HeroContent = {
  smallTagline?: string;
  heading: string;
};

const fallbackSlides: HeroSlide[] = [
  {
    _id: "fallback-moringa",
    image: "/images/hero/moringa-hero.png",
    altText: "Moringa powder with fresh leaves",
    displayOrder: 1,
  },
  {
    _id: "fallback-produce",
    image: "/images/hero/produce-hero.jpg",
    altText: "Fresh fruits and vegetables arranged on a white surface",
    displayOrder: 2,
  },
];

const fallbackContent: HeroContent = {
  smallTagline: "Trusted Export Partner From India",
  heading: "Premium Herbs\nFresh Fruits\nQuality Vegetables",
};

export async function getHeroSlides(): Promise<HeroSlide[]> {
  const slides = await client.fetch(`
    *[_type == "heroSlide" && isActive == true] | order(displayOrder asc) {
      _id,
      "image": image.asset->url,
      altText,
      displayOrder
    }
  `);

  return slides.length > 0 ? slides : fallbackSlides;
}

export async function getHeroContent(): Promise<HeroContent> {
  const content = await client.fetch(`
    *[_type == "heroContent" && isActive == true][0] {
      smallTagline,
      heading
    }
  `);

  return content?.heading ? content : fallbackContent;
}
