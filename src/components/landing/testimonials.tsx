import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maya Chen",
    role: "VP Product, Orbitly",
    quote:
      "The UI is unbelievably clean, and our weekly decision meetings now run in half the time with stronger clarity.",
  },
  {
    name: "Daniel Okafor",
    role: "Head of RevOps, Northgrid",
    quote:
      "Spend4U connects product and billing in a way our old stack never could. It became mission-critical in two weeks.",
  },
  {
    name: "Sofia Laurent",
    role: "CEO, Framelab",
    quote:
      "Our leadership team gets immediate confidence from one dashboard. It feels like a product built for executives.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="mx-auto mt-24 w-full max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Loved by operators who move fast
        </h3>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Teams across product, finance, and strategy use Spend4U to execute
          with confidence.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
