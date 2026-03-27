import { Card, CardContent } from "@/components/ui/card";

const blocks = [
  {
    title: "Build leadership confidence with one source of truth",
    description:
      "See product usage, expansion opportunities, and billing health in a shared system that every team can trust.",
    points: [
      "Unified activity timeline",
      "Automated stakeholder updates",
      "Cross-functional drilldowns",
    ],
  },
  {
    title: "Turn operating reviews into execution cycles",
    description:
      "Weekly snapshots expose bottlenecks, helping teams align faster and move from diagnosis to action without context loss.",
    points: [
      "Target-level accountability",
      "Trend anomaly callouts",
      "Decision logs by initiative",
    ],
  },
  {
    title: "Scale reliability without adding complexity",
    description:
      "Policy-ready access controls and monitoring guardrails keep enterprise workflows secure as your organization grows.",
    points: [
      "Role-based approvals",
      "Audit-friendly controls",
      "Change visibility in real time",
    ],
  },
] as const;

export function HighlightSections() {
  return (
    <section className="mx-auto mt-24 w-full max-w-7xl space-y-12">
      {blocks.map((block, index) => (
        <div
          key={block.title}
          className="border-border bg-card grid items-center gap-7 rounded-3xl border p-6 shadow-md sm:p-8 lg:grid-cols-2"
        >
          <div className={index % 2 === 1 ? "lg:order-2" : ""}>
            <h3 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
              {block.title}
            </h3>
            <p className="text-muted-foreground mt-4 text-base leading-7">
              {block.description}
            </p>
            <ul className="text-foreground mt-5 space-y-2 text-sm">
              {block.points.map((point) => (
                <li key={point} className="bg-muted rounded-lg px-3 py-2">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <Card className={index % 2 === 1 ? "lg:order-1" : ""}>
            <CardContent className="pt-6">
              <div className="border-border bg-muted rounded-xl border p-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="border-border bg-card rounded-lg border p-3">
                    <p className="text-muted-foreground text-xs">
                      Growth signal
                    </p>
                    <p className="text-foreground mt-1 text-lg font-semibold">
                      +18.4%
                    </p>
                  </div>
                  <div className="border-border bg-card rounded-lg border p-3">
                    <p className="text-muted-foreground text-xs">
                      At-risk segment
                    </p>
                    <p className="text-foreground mt-1 text-lg font-semibold">
                      2 cohorts
                    </p>
                  </div>
                </div>
                <div className="border-border bg-card/80 mt-4 h-36 rounded-lg border border-dashed" />
                <div className="border-border bg-card mt-4 flex items-center justify-between rounded-lg border px-3 py-2 text-sm">
                  <span className="text-muted-foreground">
                    Action plan health
                  </span>
                  <span className="text-foreground font-semibold">
                    On track
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </section>
  );
}
