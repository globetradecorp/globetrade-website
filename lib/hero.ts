import { client } from "./sanity";

export type HeroSlide = {
  _id: string;
  image: string;
  altText: string;
};

const fallbackSlides: HeroSlide[] = [
  {
    _id: "fallback-moringa",
    image: "/images/hero/moringa-hero.png",
    altText: "Moringa powder with fresh leaves",
  },
  {
    _id: "fallback-produce",
    image: "/images/hero/produce-hero.jpg",
    altText: "Fresh fruits and vegetables arranged on a white surface",
  },
];

const fallbackHeading =
  "Premium Indian Herbs, Fruits & Vegetables\nExported Worldwide with Quality\nTrusted by Global Buyers";

export async function getHeroContent() {
  const content = await client.fetch(`
    *[_type == "heroSection"][0] {
      tagline,
      heading,
      "slides": slides[]{
        "image": asset->url
      }
    }
  `);

  return {
    tagline: content?.tagline || "TRUSTED EXPORT PARTNER FROM INDIA",
    heading: content?.heading || fallbackHeading,
    slides:
      content?.slides?.filter((slide: { image?: string }) => Boolean(slide?.image)).map(
        (slide: { image: string }, index: number) => ({
          _id: `hero-slide-${index}`,
          image: slide.image,
          altText: `Hero background slide ${index + 1}`,
        }),
      ) || fallbackSlides,
  };
}
