import Link from "next/link";
import { Show, SignUpButton } from "@clerk/nextjs";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  CreditCard,
  TrendingDown,
  TrendingUp,
  Wallet,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

const BAR_VALUES = [32, 38, 41, 36, 49, 58, 62, 70, 67, 76];

const ALERTS = [
  {
    icon: AlertTriangle,
    message: "Budget exceeded for Marketing",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Bell,
    message: "Unusual transaction detected",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: CheckCircle2,
    message: "Subscription optimized",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
];

const METRICS = [
  {
    icon: CreditCard,
    label: "Total Spending",
    value: "$48,320",
    trend: "+12%",
    up: true,
  },
  {
    icon: Wallet,
    label: "Monthly Budget",
    value: "$60,000",
    trend: "-8%",
    up: false,
  },
  {
    icon: Bell,
    label: "Alerts Triggered",
    value: "7",
    trend: "+3",
    up: true,
  },
];

export function LandingHero() {
  return (
    <section className="relative pt-14 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-background via-muted/30 to-background" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        {/* Left: Copy */}
        <div className="space-y-7">
          <h1 className="text-foreground text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Ship faster decisions with a command center designed for operators.
          </h1>

          <p className="text-muted-foreground max-w-2xl text-pretty text-base leading-7 sm:text-lg">
            Spend4U unifies metrics, billing signals, and product activity into
            one premium workspace that gives your team clarity in every weekly
            cycle.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Suspense
              fallback={
                <div className="bg-muted h-12 w-32 animate-pulse rounded-md" />
              }
            >
              <Show when="signed-out">
                <SignUpButton mode="modal">
                  <Button size="lg">
                    Get Started <ArrowRight className="ml-2 size-4" />
                  </Button>
                </SignUpButton>
              </Show>

              <Show when="signed-in">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    Open dashboard <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </Show>
            </Suspense>

            <Button asChild variant="secondary" size="lg">
              <Link href="/dashboard">Live Demo</Link>
            </Button>
          </div>

          <div className="text-muted-foreground grid gap-3 text-sm sm:grid-cols-3">
            <div className="border-border bg-card/80 rounded-xl border px-4 py-3">
              <p className="text-foreground font-semibold">No setup tax</p>
              <p className="mt-1">Launch in under 5 minutes</p>
            </div>
            <div className="border-border bg-card/80 rounded-xl border px-4 py-3">
              <p className="text-foreground font-semibold">Realtime insights</p>
              <p className="mt-1">Refresh in less than 300ms</p>
            </div>
            <div className="border-border bg-card/80 rounded-xl border px-4 py-3">
              <p className="text-foreground font-semibold">
                Enterprise controls
              </p>
              <p className="mt-1">Policy and audit ready</p>
            </div>
          </div>
        </div>

        {/* Right: Fintech Dashboard Preview */}
        <Card className="relative overflow-hidden border-border bg-card/90 shadow-lg ring-1 ring-border/50">
          {/* Top accent bar */}
          <div className="bg-primary absolute inset-x-0 top-0 h-1 rounded-t-2xl" />

          <CardHeader className="flex flex-row items-center justify-between pb-2 pt-5">
            <div className="flex items-center gap-2">
              <BarChart3 className="text-primary size-4" />
              <p className="text-foreground text-sm font-semibold tracking-tight">
                Financial Overview
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-500">
              <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
              Live
            </span>
          </CardHeader>

          <CardContent className="space-y-4 pt-3">
            {/* Metric Cards */}
            <div className="grid grid-cols-3 gap-2.5">
              {METRICS.map(({ icon: Icon, label, value, trend, up }) => (
                <article
                  key={label}
                  className="group/metric border-border bg-muted/60 hover:bg-muted rounded-xl border p-3 transition-all duration-200"
                >
                  <div className="bg-accent inline-flex rounded-md p-1.5">
                    <Icon className="text-foreground size-3.5 transition-transform duration-200 group-hover/metric:scale-110" />
                  </div>
                  <p className="text-muted-foreground mt-2.5 text-xs leading-none">
                    {label}
                  </p>
                  <p className="text-foreground mt-1 text-base font-semibold leading-none">
                    {value}
                  </p>
                  <p
                    className={cn(
                      "mt-1.5 flex items-center gap-0.5 text-xs font-medium",
                      up ? "text-green-500" : "text-red-500",
                    )}
                  >
                    {up ? (
                      <TrendingUp className="size-3" />
                    ) : (
                      <TrendingDown className="size-3" />
                    )}
                    {trend}
                  </p>
                </article>
              ))}
            </div>

            {/* Spend Chart */}
            <div className="border-border bg-card rounded-xl border p-4">
              <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-wider">
                Monthly Spend
              </p>
              <div className="relative">
                {/* Grid lines */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between pb-0">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="border-border/40 w-full border-t border-dashed"
                    />
                  ))}
                </div>
                <div className="relative flex h-24 items-end gap-1.5">
                  {BAR_VALUES.map((value, i) => (
                    <div
                      key={i}
                      className="group/bar flex-1 cursor-default"
                      style={{ height: `${value}%` }}
                    >
                      <div
                        className="h-full w-full rounded-t-lg bg-gradient-to-t from-primary to-primary/70 opacity-80 transition-opacity duration-150 group-hover/bar:opacity-100"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="space-y-1.5">
              <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                Recent Alerts
              </p>
              <ul className="space-y-1.5">
                {ALERTS.map(({ icon: Icon, message, color, bg }) => (
                  <li
                    key={message}
                    className="bg-muted/50 flex items-center gap-2.5 rounded-lg px-3 py-2"
                  >
                    <span className={cn("inline-flex rounded-md p-1", bg)}>
                      <Icon className={cn("size-3", color)} />
                    </span>
                    <span className="text-muted-foreground text-xs leading-none">
                      {message}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/dashboard"
              className="text-muted-foreground hover:text-foreground inline-flex items-center text-sm font-semibold transition-colors"
            >
              Explore product walkthrough{" "}
              <ArrowRight className="ml-1 size-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}