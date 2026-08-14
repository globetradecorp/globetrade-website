import type { ComparisonRow } from "@/lib/products";

type ComparisonTableProps = {
  col1Header?: string;
  col2Header?: string;
  rows?: ComparisonRow[];
};

export default function ComparisonTable({
  col1Header = "Organic",
  col2Header = "Conventional",
  rows = [],
}: ComparisonTableProps) {
  if (!rows || rows.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Desktop / Tablet View */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-border-soft bg-white shadow-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border-soft bg-background-subtle">
              <th className="py-4 px-6 font-heading text-sm font-bold uppercase tracking-wider text-primary w-1/4">
                Features
              </th>
              <th className="py-4 px-6 font-heading text-sm font-bold uppercase tracking-wider text-nature w-[37.5%]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-nature/10 px-3 py-1 text-xs">
                  {col1Header}
                </span>
              </th>
              <th className="py-4 px-6 font-heading text-sm font-bold uppercase tracking-wider text-primary w-[37.5%]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs">
                  {col2Header}
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-soft">
            {rows.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 1 ? "bg-background-subtle/30" : "bg-white"}
              >
                <td className="py-4 px-6 font-semibold text-sm text-slate-900 align-top">
                  {row.feature}
                </td>
                <td className="py-4 px-6 text-sm text-slate-700 leading-relaxed align-top">
                  {row.col1Value}
                </td>
                <td className="py-4 px-6 text-sm text-slate-700 leading-relaxed align-top">
                  {row.col2Value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card-Based View */}
      <div className="grid gap-4 md:hidden">
        {rows.map((row, index) => (
          <div
            key={index}
            className="rounded-2xl border border-border-soft bg-white p-5 shadow-xs space-y-3.5"
          >
            <div className="border-b border-border-soft/80 pb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                Parameter
              </span>
              <h4 className="font-heading text-base font-bold text-primary">
                {row.feature}
              </h4>
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="rounded-xl border border-nature/20 bg-nature/5 p-3">
                <span className="font-semibold uppercase tracking-wider text-nature text-[10px]">
                  {col1Header}
                </span>
                <p className="mt-1 text-slate-700">{row.col1Value}</p>
              </div>

              <div className="rounded-xl border border-primary/15 bg-background-subtle p-3">
                <span className="font-semibold uppercase tracking-wider text-primary text-[10px]">
                  {col2Header}
                </span>
                <p className="mt-1 text-slate-700">{row.col2Value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
