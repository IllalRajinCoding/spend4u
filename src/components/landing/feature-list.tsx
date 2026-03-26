const features = [
  {
    title: "Signal over noise",
    description:
      "Track meaningful activity with a clean interface that highlights what matters first.",
  },
  {
    title: "Fast daily workflows",
    description:
      "Focused navigation and compact surfaces help teams move from idea to action in seconds.",
  },
  {
    title: "Confident collaboration",
    description:
      "Shared context, recent changes, and clear ownership keep your team aligned without meetings.",
  },
];

export function FeatureList() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {features.map((feature, index) => (
        <article
          key={feature.title}
          className="slide-in rounded-2xl border border-[#e6e8ef] bg-white/85 p-6 shadow-[0_8px_24px_rgba(14,18,34,0.06)] backdrop-blur"
          style={{ animationDelay: `${120 + index * 80}ms` }}
        >
          <h3 className="text-lg font-semibold tracking-tight text-[#121625]">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#535d79]">
            {feature.description}
          </p>
        </article>
      ))}
    </section>
  );
}
