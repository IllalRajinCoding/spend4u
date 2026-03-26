import {
  BellRing,
  ChartNoAxesCombined,
  Clock3,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: ChartNoAxesCombined,
    title: "Realtime Revenue Views",
    description:
      "Track subscriptions, expansion, and churn in one live canvas updated across every workspace.",
  },
  {
    icon: Workflow,
    title: "Connected Operations",
    description:
      "Tie product adoption signals to billing behavior so teams can prioritize what moves retention.",
  },
  {
    icon: ShieldCheck,
    title: "Granular Permissions",
    description:
      "Control access by role and team with policy-based visibility designed for enterprise workflows.",
  },
  {
    icon: BellRing,
    title: "Contextual Alerts",
    description:
      "Get proactive notifications when usage, upgrades, or risk thresholds change unexpectedly.",
  },
  {
    icon: Clock3,
    title: "Weekly Decision Briefs",
    description:
      "Auto-generated summaries compress the week into clear priorities your team can act on instantly.",
  },
  {
    icon: Sparkles,
    title: "Executive-grade UI",
    description:
      "A refined interface built for speed, clarity, and confidence in every leadership review.",
  },
];

export function FeaturesGridSection() {
  return (
    <section
      id="features"
      className="mx-auto mt-24 w-full max-w-7xl scroll-mt-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-[#101427] sm:text-4xl">
          Everything your team needs to operate from signal, not noise
        </h2>
        <p className="mt-4 text-base leading-7 text-[#4f5a78]">
          Six focused capabilities designed to improve visibility, speed up
          execution, and strengthen strategic decisions.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="group transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,22,40,0.1)]"
          >
            <CardContent className="pt-6">
              <feature.icon className="size-5 text-[#2f5bff]" />
              <h3 className="mt-5 text-lg font-semibold text-[#12182b]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#525e7d]">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
