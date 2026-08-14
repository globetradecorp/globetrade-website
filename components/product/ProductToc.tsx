"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Compass, Send } from "lucide-react";
import Link from "next/link";

export type TocItem = {
  id: string;
  title: string;
  badge?: string;
};

type ProductTocProps = {
  items: TocItem[];
};

export default function ProductToc({ items }: ProductTocProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (!items || items.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsMobileOpen(false);
    }
  };

  if (!items || items.length === 0) {
    return null;
  }

  const activeItem = items.find((i) => i.id === activeId) || items[0];

  return (
    <>
      {/* Mobile Top Navigation (< xl) */}
      <div className="xl:hidden sticky top-[73px] z-30 mb-6">
        <div className="rounded-2xl border border-border-soft bg-white/95 backdrop-blur-md p-3 shadow-md">
          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="flex w-full items-center justify-between gap-3 text-left text-xs font-semibold text-primary"
            aria-expanded={isMobileOpen}
          >
            <div className="flex items-center gap-2 truncate">
              <Compass className="h-4 w-4 text-accent shrink-0" />
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">Jump to:</span>
              <span className="truncate text-slate-900 font-bold">{activeItem?.title}</span>
            </div>
            <ChevronDown
              className={`h-4 w-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                isMobileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isMobileOpen && (
            <div className="mt-3 border-t border-border-soft pt-2 space-y-1 max-h-60 overflow-y-auto">
              {items.map((item, index) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollTo(e, item.id)}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs transition ${
                      isActive
                        ? "bg-accent/10 font-bold text-accent"
                        : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                    }`}
                  >
                    <span className="truncate">
                      <span className="text-[10px] opacity-70 mr-1.5">{index + 1}.</span>
                      {item.title}
                    </span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 ml-2" />}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Floating Sticky Sidebar Navigation (>= xl) */}
      <aside className="sticky top-28 space-y-5">
        <div className="rounded-[1.75rem] border border-border-soft bg-white p-6 shadow-xs">
          {/* Header */}
          <div className="flex items-center gap-2.5 pb-4 border-b border-border-soft">
            <Compass className="h-5 w-5 text-accent" />
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-primary">
              Table of Contents
            </h3>
          </div>

          {/* Vertical Section Links with Centered Guide Line */}
          <nav className="mt-4 relative" aria-label="Page Sections Navigation">
            {/* Perfectly centered vertical connector line behind number circles */}
            <div className="absolute left-[24px] top-3 bottom-3 w-[1.5px] -translate-x-1/2 bg-slate-200/80" />

            <ul className="space-y-2 relative">
              {items.map((item, index) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleScrollTo(e, item.id)}
                      className={`group flex items-center gap-3.5 rounded-xl px-3 py-2.5 text-xs font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-accent/8 text-accent font-semibold translate-x-1"
                          : "text-slate-600 hover:bg-background-subtle hover:text-primary"
                      }`}
                    >
                      <span
                        className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ring-4 ring-white transition-all duration-200 ${
                          isActive
                            ? "bg-accent text-white shadow-xs"
                            : "bg-slate-100 text-slate-500 group-hover:bg-accent/20 group-hover:text-accent"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="truncate text-left leading-tight">
                        {item.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Quick Inquiry Mini Card */}
        <div className="rounded-[1.5rem] border border-accent/15 bg-gradient-to-br from-background-subtle to-white p-5 shadow-xs space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
            Export Sourcing
          </span>
          <p className="text-xs font-semibold text-primary leading-snug">
            Require export specifications or custom volume pricing?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-accent py-2.5 px-4 text-xs font-semibold text-white shadow-xs transition hover:bg-accent/90"
          >
            <span>Contact Us</span>
            <Send className="h-3 w-3" />
          </Link>
        </div>
      </aside>
    </>
  );
}
