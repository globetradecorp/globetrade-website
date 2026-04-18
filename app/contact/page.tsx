import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Section from "@/components/Section";
import { siteContent } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pb-12 pt-16 sm:pb-16 sm:pt-24">
        <div className="max-w-4xl space-y-6">
          <span className="inline-flex rounded-full border border-accent/18 bg-accent/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Contact
          </span>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Let&apos;s discuss your sourcing and export requirements
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            Reach out for product inquiries, shipment planning, or partnership
            discussions.
          </p>
        </div>
      </Section>

      <Section className="pb-24" containerClassName="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-border-soft bg-white p-8 shadow-sm sm:p-10">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Contact Form
            </p>
            <h2 className="font-heading text-3xl font-bold text-primary">
              Send an inquiry
            </h2>
          </div>

          <form className="mt-8 space-y-5">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">Name</span>
              <input
                type="text"
                name="name"
                className="w-full rounded-2xl border border-border-soft bg-background-subtle px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent focus:bg-white"
                placeholder="Your name"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                name="email"
                className="w-full rounded-2xl border border-border-soft bg-background-subtle px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent focus:bg-white"
                placeholder="Your email"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">Phone</span>
              <input
                type="tel"
                name="phone"
                className="w-full rounded-2xl border border-border-soft bg-background-subtle px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent focus:bg-white"
                placeholder="Your phone number"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">Message</span>
              <textarea
                name="message"
                rows={6}
                className="w-full rounded-2xl border border-border-soft bg-background-subtle px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent focus:bg-white"
                placeholder="Tell us about your requirement"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent/92"
            >
              Contact Us
            </button>
          </form>
        </div>

        <div className="rounded-[2rem] border border-primary/10 bg-background-subtle p-8 text-primary shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Contact Information
          </p>
          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm text-primary/65">Contact Person</p>
              <p className="mt-2 font-heading text-2xl font-semibold">
                {siteContent.contact.person}
              </p>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-1 h-7 w-7 shrink-0 text-accent" strokeWidth={2} />
              <div>
                <p className="text-sm text-primary/65">Address</p>
                <p className="mt-2 whitespace-pre-line text-base leading-8 text-primary/85">
                  {siteContent.contact.address}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="mt-1 h-7 w-7 shrink-0 text-accent" strokeWidth={2} />
              <div>
              <p className="text-sm text-primary/65">Phone</p>
              <a
                href={`tel:${siteContent.contact.phone}`}
                className="mt-2 block text-base font-medium text-primary hover:text-accent"
              >
                {siteContent.contact.phone}
              </a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="mt-1 h-7 w-7 shrink-0 text-accent" strokeWidth={2} />
              <div>
              <p className="text-sm text-primary/65">Email</p>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="mt-2 block text-base font-medium text-primary hover:text-accent"
              >
                {siteContent.contact.email}
              </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
