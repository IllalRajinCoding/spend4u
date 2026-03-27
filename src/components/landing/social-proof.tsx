type Brand = {
  name: string;
  color: string;
  mark: string;
};

const brands: Brand[] = [
  { name: "Amazon", color: "#FF9900", mark: "a" },
  { name: "Google", color: "#4285F4", mark: "G" },
  { name: "Stripe", color: "#635BFF", mark: "S" },
  { name: "Shopify", color: "#95BF47", mark: "S" },
  { name: "Notion", color: "#111111", mark: "N" },
  { name: "Vercel", color: "#000000", mark: "V" },
];

const loopedBrands = [...brands, ...brands];

export function SocialProofSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6d7693]">
        Trusted by product and finance teams at
      </p>

      <div className="relative mt-7 overflow-hidden rounded-2xl border border-[#e6eaf4] bg-white/70 py-3">
        {/* gradient fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f4f7fd] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f4f7fd] to-transparent sm:w-24" />

        <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex min-w-max shrink-0 items-center gap-6 px-3 sm:gap-8 sm:px-4 md:gap-10 animate-logo-scroll group-hover:[animation-play-state:paused]">
            {loopedBrands.map((brand, index) => (
              <article
                key={`${brand.name}-${index}`}
                className="flex h-12 items-center gap-3 rounded-xl border border-[#e7ebf5] bg-white/85 px-4 text-[#55607d] opacity-70 grayscale transition-all duration-200 will-change-transform hover:scale-105 hover:opacity-100 hover:grayscale-0 sm:h-14 sm:px-5"
              >
                <span
                  className="grid size-7 place-items-center rounded-md text-sm font-semibold text-white sm:size-8"
                  style={{ backgroundColor: brand.color }}
                >
                  {brand.mark}
                </span>
                <span className="text-sm font-semibold tracking-tight sm:text-base">
                  {brand.name}
                </span>
              </article>
            ))}
          </div>
        </div>
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