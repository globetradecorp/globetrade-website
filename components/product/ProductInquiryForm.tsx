import { Send } from "lucide-react";

type ProductInquiryFormProps = {
  productName: string;
};

export default function ProductInquiryForm({ productName }: ProductInquiryFormProps) {
  return (
    <form
      action="https://formspree.io/f/mvzjyydo"
      method="POST"
      className="space-y-4"
    >
      {/* Hidden Fields for automatic product tagging */}
      <input type="hidden" name="product" value={productName} />
      <input
        type="hidden"
        name="_subject"
        value={`Export Inquiry: ${productName} - Globetrade Corp`}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
            Full Name *
          </span>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-xl border border-border-soft bg-background-subtle px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-accent focus:bg-white"
            placeholder="Your name"
          />
        </label>

        <label className="block space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
            Business Email *
          </span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-border-soft bg-background-subtle px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-accent focus:bg-white"
            placeholder="name@company.com"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
            Phone / WhatsApp *
          </span>
          <input
            type="tel"
            name="phone"
            required
            className="w-full rounded-xl border border-border-soft bg-background-subtle px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-accent focus:bg-white"
            placeholder="+1 234 567 8900"
          />
        </label>

        <label className="block space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
            Destination Country / Port
          </span>
          <input
            type="text"
            name="destination"
            className="w-full rounded-xl border border-border-soft bg-background-subtle px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-accent focus:bg-white"
            placeholder="e.g. Dubai, Rotterdam, Singapore"
          />
        </label>
      </div>

      <label className="block space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
          Inquiry Details & Specifications *
        </span>
        <textarea
          name="message"
          rows={4}
          required
          defaultValue={`We are interested in sourcing ${productName}. Please share pricing, specifications, and minimum order quantity.`}
          className="w-full rounded-xl border border-border-soft bg-background-subtle px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-accent focus:bg-white"
        />
      </label>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span>Submit Inquiry</span>
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
