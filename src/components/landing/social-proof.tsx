type Brand = {
  name: string;
  mark: string;
};

const brands: Brand[] = [
  { name: "Amazon", mark: "a" },
  { name: "Google", mark: "G" },
  { name: "Stripe", mark: "S" },
  { name: "Shopify", mark: "S" },
  { name: "Notion", mark: "N" },
  { name: "Vercel", mark: "V" },
];

const loopedBrands = [...brands, ...brands];

export function SocialProofSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl">
      <p className="text-muted-foreground text-center text-xs font-semibold uppercase tracking-[0.2em]">
        Trusted by product and finance teams at
      </p>

      <div className="border-border bg-card/70 relative mt-7 overflow-hidden rounded-2xl border py-3">
        {/* gradient fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

        <div className="group flex overflow-hidden">
          <div className="flex min-w-max shrink-0 items-center gap-6 px-3 sm:gap-8 sm:px-4 md:gap-10 animate-logo-scroll group-hover:[animation-play-state:paused]">
            {loopedBrands.map((brand, index) => (
              <article
                key={`${brand.name}-${index}`}
                className="border-border bg-card/85 text-muted-foreground hover:text-foreground flex h-12 items-center gap-3 rounded-xl border px-4 opacity-70 grayscale transition-all duration-200 will-change-transform hover:scale-105 hover:opacity-100 hover:grayscale-0 sm:h-14 sm:px-5"
              >
                <span className="bg-primary text-primary-foreground grid size-7 place-items-center rounded-md text-sm font-semibold sm:size-8">
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

      <blockquote className="text-muted-foreground mx-auto mt-8 max-w-3xl text-center text-base leading-7 sm:text-lg">
        &ldquo;Spend4U gave us a single source of truth for growth and billing
        in less than one sprint.&rdquo;
      </blockquote>
      <p className="text-muted-foreground mt-2 text-center text-sm font-medium">
        Elena Park, COO at Novira
      </p>
    </section>
  );
}
