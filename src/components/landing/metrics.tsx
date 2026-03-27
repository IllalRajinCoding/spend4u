const metrics = [
  { value: "10k+", label: "active teams" },
  { value: "99.9%", label: "platform uptime" },
  { value: "<300ms", label: "dashboard response" },
  { value: "42%", label: "faster weekly planning" },
];

export function MetricsSection() {
  return (
    <section className="border-border bg-card mx-auto mt-24 w-full max-w-5xl rounded-3xl border p-6 text-center shadow-md sm:p-10">
      <h3 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
        Built for teams that treat operations as a competitive advantage
      </h3>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="border-border bg-muted rounded-2xl border px-3 py-5"
          >
            <p className="text-foreground text-3xl font-semibold tracking-tight">
              {metric.value}
            </p>
            <p className="text-muted-foreground mt-1 text-sm">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
