type StatCardProps = {
  label: string;
  value: string;
  change: string;
};

export function StatCard({ label, value, change }: Readonly<StatCardProps>) {
  return (
    <article className="rounded-2xl border border-[#e7eaf2] bg-white p-5 shadow-[0_8px_22px_rgba(16,20,34,0.06)] transition-transform duration-300 hover:-translate-y-0.5">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6d7693]">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-[#101423]">
        {value}
      </p>
      <p className="mt-2 text-sm text-[#4069ff]">{change}</p>
    </article>
  );
}
