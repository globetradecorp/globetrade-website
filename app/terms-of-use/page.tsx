import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsOfUsePage() {
  return (
    <Section className="pb-24 pt-16 sm:pb-24 sm:pt-24">
      <div className="max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Terms of Use for www.globetradecorp.com
          </h1>
          <p className="text-base leading-relaxed text-slate-600">
            Effective Date: May 1, 2026
          </p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              1. Acceptance of Terms
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              By accessing or using www.globetradecorp.com, you agree to be
              bound by these Terms of Use and our Privacy Policy. If you do not
              agree, please do not use this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              2. Purpose of Website
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              This website is for informational purposes only to showcase
              products available for export. No content on this website
              constitutes a binding offer to sell goods. All export
              transactions are subject to separate, formal Export Contracts and
              Incoterms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              3. Intellectual Property
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              All content, including product descriptions, technical
              specifications, and product images, is the property of
              Globetrade Corp. You may view and print pages for your personal
              business research, but you may not reproduce, distribute, or use
              our content for commercial purposes without our written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              4. Accuracy of Information
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              While we strive for accuracy, the products showcased may vary
              slightly from the actual goods due to regional standards or
              updates. We reserve the right to change product details,
              availability, and specifications at any time without notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              5. User Conduct
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              By using our &quot;Contact Us&quot; form, you agree to:
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Provide accurate and truthful information.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Not use the website for any unlawful purpose or to transmit
              malicious software.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Not attempt to scrape data or bypass our security measures.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              6. Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Globetrade Corp. shall not be liable for any direct or indirect
              damages arising from your use of this website or reliance on its
              content. The website is provided on an &quot;As-Is&quot; and
              &quot;As-Available&quot; basis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              These terms are governed by the laws of India. Any disputes
              related to the use of this website shall be subject to the
              exclusive jurisdiction of the courts in Pune, Dist. Maharashtra.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              8. Changes to Terms
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              We may update these terms occasionally. Your continued use of the
              site after changes are posted means you accept the new terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-primary">
              9. Contact Information
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              For any questions regarding these terms, please contact:
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Email: rishaansglobe@gmail.com
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Address: Shop No. 2, Gound Floor, Gayatri Bungalow, Lane no.
              29-B, Dhayari, Pune 411 041
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
