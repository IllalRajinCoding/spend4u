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
          className="grid items-center gap-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.07)] sm:p-8 lg:grid-cols-2"
        >
          <div className={index % 2 === 1 ? "lg:order-2" : ""}>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {block.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {block.description}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              {block.points.map((point) => (
                <li key={point} className="rounded-lg bg-slate-100 px-3 py-2">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <Card className={index % 2 === 1 ? "lg:order-1" : ""}>
            <CardContent className="pt-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-xs text-slate-500">Growth signal</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      +18.4%
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-xs text-slate-500">At-risk segment</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      2 cohorts
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-36 rounded-lg border border-dashed border-slate-300 bg-white/80" />
                <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
                  <span className="text-slate-600">Action plan health</span>
                  <span className="font-semibold text-slate-900">On track</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </section>
  );
}
