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
    <section className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[calc(100vh-82px)] overflow-hidden">
      {/* Slide Background Images */}
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
              className="object-cover object-[68%_center] sm:object-center"
            />
          </div>
        ))}

        {/* Readability Overlay Scrim: Strong on mobile, smoothly fading on tablet/desktop to highlight the product image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#122244]/90 via-[#1E3A6C]/75 to-[#1E3A6C]/40 sm:bg-[linear-gradient(90deg,rgba(18,34,68,0.88)_0%,rgba(30,58,108,0.65)_36%,rgba(30,58,108,0.20)_60%,rgba(30,58,108,0.02)_85%,rgba(30,58,108,0)_100%)] lg:bg-[linear-gradient(90deg,rgba(18,34,68,0.86)_0%,rgba(30,58,108,0.60)_38%,rgba(30,58,108,0.12)_65%,rgba(30,58,108,0)_100%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative mx-auto flex min-h-[500px] sm:min-h-[560px] lg:min-h-[calc(100vh-82px)] max-w-7xl items-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-xl space-y-6 sm:space-y-8 lg:max-w-[52%]">
          {tagline ? (
            <span className="inline-flex rounded-full border border-white/30 bg-white/12 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.28em]">
              {tagline}
            </span>
          ) : null}

          <div className="space-y-5 sm:space-y-6">
            <h1 className="font-heading text-[1.65rem] font-bold tracking-tight text-white leading-[1.2] sm:text-[2.15rem] sm:leading-[1.18] lg:text-[2.2rem] lg:leading-[1.14] max-w-[320px] sm:max-w-none">
              {headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/92 sm:px-7 sm:py-3.5"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/12 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:border-white/60 hover:bg-white/20 hover:text-white sm:px-7 sm:py-3.5"
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
