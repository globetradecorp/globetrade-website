"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteContent } from "@/lib/constants";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products", hasMenu: true },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

const productMenu = [
  {
    title: "Herbs",
    items: [
      { name: "Moringa Leaves Powder", href: "/products/moringa-leaves-powder" },
    ],
  },
  {
    title: "Fruits",
    items: [
      { name: "Fresh Cavendish Bananas", href: "/products/fresh-cavendish-banana" },
      { name: "Fresh Pomegranate", href: "/products/fresh-pomegranate" },
    ],
  },
  {
    title: "Vegetables",
    items: [
      { name: "Onion", href: "/products/onion" },
      { name: "Suran (Elephant Foot Yam)", href: "/products/suran" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);
  const brandName = "Globetrade Corp.";

  // Handle escape key and outside clicks to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMegaMenuOpen(false);
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuContainerRef.current && !menuContainerRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 250);
  };

  const handleLinkClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsMegaMenuOpen(false);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-accent/10 bg-[#f8faf8]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 sm:py-2 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 sm:gap-4"
          onClick={handleLinkClick}
        >
          <div className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt={`${brandName} logo`}
              width={260}
              height={100}
              priority
              className="h-[64px] sm:h-[72px] w-auto object-contain"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <p className="font-heading text-[12px] sm:text-sm md:text-lg font-semibold uppercase tracking-[0.18em] text-[#2E4A8A]">
              {brandName}
            </p>
            <p className="text-[9px] sm:text-[11px] text-slate-500">
              {siteContent.home.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navigationLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            if (link.hasMenu) {
              return (
                <div
                  key={link.href}
                  ref={menuContainerRef}
                  className="relative py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-accent text-white shadow-xs"
                        : "text-primary/78 hover:bg-accent/6 hover:text-accent"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isMegaMenuOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={2}
                    />
                  </Link>

                  {/* Mega Menu Dropdown with continuous hover bridge */}
                  <div
                    className={`absolute right-0 top-full z-50 w-[min(92vw,54rem)] pt-2 transition-all duration-200 ${
                      isMegaMenuOpen
                        ? "pointer-events-auto opacity-100 translate-y-0"
                        : "pointer-events-none opacity-0 -translate-y-1"
                    }`}
                  >
                    {/* Invisible hover bridge to eliminate dead zones completely */}
                    <div className="absolute -top-3.5 left-0 right-0 h-5" />

                    <div className="rounded-[2rem] border border-border-soft bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
                      <div className="grid gap-8 md:grid-cols-3">
                        {productMenu.map((category) => (
                          <div key={category.title} className="space-y-4">
                            <h3 className="font-heading text-xl font-bold text-primary">
                              {category.title}
                            </h3>
                            <ul className="space-y-3">
                              {category.items.map((item) => (
                                <li
                                  key={item.name}
                                  className="border-b border-border-soft/90 pb-3 text-sm"
                                >
                                  <Link
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className="inline-flex items-start gap-2 text-slate-600 transition hover:text-accent"
                                  >
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                    <span>{item.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-accent text-white shadow-xs"
                    : "text-primary/78 hover:bg-accent/6 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/20 text-accent md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-transform ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-accent/10 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
            {navigationLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-accent text-white"
                      : "text-primary/80 hover:bg-accent/6 hover:text-accent"
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
