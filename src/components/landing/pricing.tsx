import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    description: "For early teams building weekly operating rhythm.",
    features: ["Core dashboards", "Up to 10 seats", "Email support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$149",
    description: "For scaling organizations coordinating product and finance.",
    features: [
      "Advanced analytics",
      "Unlimited seats",
      "Priority support",
      "Audit logs",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For global teams requiring governance and tailored onboarding.",
    features: [
      "SSO + SCIM",
      "Dedicated success manager",
      "Custom security controls",
    ],
    popular: false,
  },
] as const;

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="mx-auto mt-24 w-full max-w-7xl scroll-mt-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Simple pricing that scales with your team
        </h3>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Start quickly, then expand into advanced governance and strategic
          workflows.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={
              tier.popular
                ? "relative border-slate-300 shadow-[0_16px_36px_rgba(15,23,42,0.12)]"
                : ""
            }
          >
            <CardContent className="pt-6">
              {tier.popular ? (
                <Badge className="mb-4">Most Popular</Badge>
              ) : null}
              <p className="text-sm font-semibold text-slate-700">
                {tier.name}
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                {tier.price}
                {tier.price !== "Custom" ? (
                  <span className="text-sm text-slate-500">/mo</span>
                ) : null}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {tier.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="size-4 text-slate-700" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href="/dashboard"
                variant={tier.popular ? "default" : "secondary"}
                className="mt-6 w-full"
              >
                Choose {tier.name}
              </ButtonLink>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
