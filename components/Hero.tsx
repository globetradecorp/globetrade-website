"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type HeroSlide = {
  _id: string;
  image: string;
  altText: string;
};

type HeroProps = {
  heading: string;
  tagline?: string;
  slides: HeroSlide[];
};

export default function Hero({ heading, tagline, slides }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const headingLines = useMemo(
    () => heading.split("\n").map((line) => line.trim()).filter(Boolean).slice(0, 3),
    [heading],
  );

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-[calc(100vh-82px)] overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide._id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.altText}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,58,108,0.62)_0%,rgba(30,58,108,0.42)_34%,rgba(30,58,108,0.18)_58%,rgba(30,58,108,0.1)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-82px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8 lg:max-w-[52%]">
          {tagline ? (
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/88 backdrop-blur-sm">
              {tagline}
            </span>
          ) : null}

          <div className="space-y-6">
            <h1 className="font-heading text-[1.95rem] font-bold tracking-tight text-white sm:text-[2.15rem] lg:text-[2.2rem] lg:leading-[1.04]">
              {headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-accent/92"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/55 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:border-white hover:bg-white/16"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
