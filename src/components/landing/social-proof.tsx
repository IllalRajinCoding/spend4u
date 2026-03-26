const logos = ["Novira", "Orbitly", "Radian", "Framelab", "Northgrid", "Hydra"];

export function SocialProofSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6d7693]">
        Trusted by product and finance teams at
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((logo) => (
          <div
            key={logo}
            className="rounded-xl border border-[#e5e9f3] bg-white/85 px-4 py-3 text-center text-sm font-semibold text-[#495474] shadow-[0_6px_20px_rgba(15,22,40,0.05)]"
          >
            {logo}
          </div>
        ))}
      </div>

      <blockquote className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-[#495474] sm:text-lg">
        &ldquo;Spend4U gave us a single source of truth for growth and billing
        in less than one sprint.&rdquo;
      </blockquote>
      <p className="mt-2 text-center text-sm font-medium text-[#6d7693]">
        Elena Park, COO at Novira
      </p>
    </section>
  );
}
