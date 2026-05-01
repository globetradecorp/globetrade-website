import { Icon, Mail, MapPin, Phone, type LucideProps } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";
import { siteContent } from "@/lib/constants";

const InstagramIcon = (props: LucideProps) => (
  <Icon
    {...props}
    iconNode={[
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "5", key: "ig-frame" }],
      ["circle", { cx: "12", cy: "12", r: "4", key: "ig-lens" }],
      ["circle", { cx: "17", cy: "7", r: "1", key: "ig-flash" }],
    ]}
  />
);

const FacebookIcon = (props: LucideProps) => (
  <Icon
    {...props}
    iconNode={[
      ["path", { d: "M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h2.5l.5-4H13V7a1 1 0 0 1 1-1h2V3z", key: "fb-shape" }],
    ]}
  />
);

const LinkedinIcon = (props: LucideProps) => (
  <Icon
    {...props}
    iconNode={[
      ["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z", key: "li-body" }],
      ["rect", { x: "2", y: "9", width: "4", height: "12", key: "li-column" }],
      ["circle", { cx: "4", cy: "4", r: "2", key: "li-dot" }],
    ]}
  />
);

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
            <div className="grid gap-8 pt-2 sm:grid-cols-2">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-white">Follow Us</p>
                <div className="flex items-center gap-3 text-sm text-white/78">
                  <InstagramIcon className="h-5 w-5" strokeWidth={1.9} />
                  <span>Globetrade Corp.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/78">
                  <FacebookIcon className="h-5 w-5" strokeWidth={1.9} />
                  <span>Globetrade Corp.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/78">
                  <LinkedinIcon className="h-5 w-5" strokeWidth={1.9} />
                  <span>Globetrade Corp.</span>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-white">Legal</p>
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/78 hover:text-white"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-of-use"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/78 hover:text-white"
                >
                  Terms of Use
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-sm leading-7 text-white/78">
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
        <p className="text-sm text-white/70">
          &copy; 2022 Globetrade Corp. All rights reserved.
        </p>
      </Section>
    </footer>
  );
}
