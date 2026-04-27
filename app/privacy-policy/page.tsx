import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <Section className="pb-24 pt-16 sm:pb-24 sm:pt-24">
      <div className="max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Privacy Policy for Globetradecorp.com
          </h1>
          <p className="text-base leading-relaxed text-slate-600">
            Effective Date: May 1, 2026
          </p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              1. Introduction
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Welcome to globetrade.com. At Globetrade Corp., we are committed
              to protecting the privacy of our website visitors and the
              importers we do business with. This policy explains how we handle
              your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              2. Information We Collect
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              We collect information that you voluntarily provide to us through
              our &quot;Contact Us&quot; form, including:
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Contact Information: Your Name, Email ID and Contact Number.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Business Details: Any additional information provided in your
              inquiry regarding our products.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Automated Data: Standard log data such as your IP address,
              browser type, and pages visited for analytics purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              3. Use of Your Information
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              As a Merchant Exporter, we use your data strictly for:
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Communication: Responding to your product inquiries and providing
              quotes.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Business Development: Sending occasional updates about new
              products or export offers (you can opt-out at any time).
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Website Improvement: Analyzing visitor trends to improve our
              product showcases.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              4. Data Storage and Security
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              We value your trust. We implement commercially acceptable
              security measures to protect your personal information from
              unauthorized access. However, no method of transmission over the
              internet is 100% secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              5. International Data Transfers
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Because we serve importers globally, your information may be
              transferred to and maintained on servers located outside your
              country. By submitting your information, you consent to this
              transfer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              6. Sharing Your Information
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              We do not sell or trade your personal information to third
              parties. We may only share data with trusted service providers
              (like our email hosting service) who help us operate our website
              and business, provided they keep this information confidential.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              7. Your Rights
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Depending on your location, you have the right to:
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Access the personal data we hold about you.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Request correction or deletion of your data.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Object to or restrict our processing of your information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              8. Contact Us
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              By Email: rishaansglobe@gmail.com
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              By Phone: +91 8208385616
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Address: Shop no. 2, Ground Floor, Gayatri Bungalow, Lane no.
              29-B, Dhayari, Dist. Pune – 411041
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
