const metrics = [
  { value: "10k+", label: "active teams" },
  { value: "99.9%", label: "platform uptime" },
  { value: "<300ms", label: "dashboard response" },
  { value: "42%", label: "faster weekly planning" },
];

export function MetricsSection() {
  return (
    <section className="mx-auto mt-24 w-full max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-[0_14px_34px_rgba(15,23,42,0.08)] sm:p-10">
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Built for teams that treat operations as a competitive advantage
      </h3>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-5"
          >
            <p className="text-3xl font-semibold tracking-tight text-slate-900">
              {metric.value}
            </p>
            <p className="mt-1 text-sm text-slate-600">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
