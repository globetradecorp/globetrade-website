import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";
import { siteContent } from "@/lib/constants";

export default function Footer() {
  const brandName = "Globetrade Corp.";

  return (
    <footer className="border-t border-primary/10 bg-primary">
      <Section className="py-12" containerClassName="space-y-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div className="space-y-3">
            <p className="font-heading text-xl font-bold text-white">
              {brandName}
            </p>
            <p className="max-w-xl text-sm leading-7 text-white/78">
              At Globetrade Corp., we bridge the gap between India&apos;s rich
              resources and the global demand for quality. We are committed to
              transparency, competitive pricing, and building long-term
              relationships through excellence in export.
            </p>
          </div>

          <div className="space-y-4 text-sm leading-7 text-white/78">
            <p className="font-semibold text-white">{siteContent.contact.person}</p>
            <div className="flex items-start gap-2">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-accent" strokeWidth={2} />
              <p className="whitespace-pre-line">{siteContent.contact.address}</p>
            </div>
            <a
              href={`tel:${siteContent.contact.phone}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-6 w-6 shrink-0 text-accent" strokeWidth={2} />
              <span>{siteContent.contact.phone}</span>
            </a>
            <a
              href={`mailto:${siteContent.contact.email}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-6 w-6 shrink-0 text-accent" strokeWidth={2} />
              <span>{siteContent.contact.email}</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/12 pt-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{brandName}</p>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </Section>
    </footer>
  );
}
