import Link from "next/link";
import { Show, SignUpButton } from "@clerk/nextjs";
import { ArrowRight, BarChart3, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function LandingHero() {
  return (
    <section className="relative pt-14 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(74,108,255,0.24),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(0,174,146,0.14),transparent_28%),linear-gradient(180deg,#f8faff_0%,#f3f6fc_100%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-7">
          <Badge>Revenue OS for modern teams</Badge>

          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-[#0f1426] sm:text-5xl lg:text-6xl">
            Ship faster decisions with a command center designed for operators.
          </h1>

          <p className="max-w-2xl text-pretty text-base leading-7 text-[#4d5776] sm:text-lg">
            Spend4U unifies metrics, billing signals, and product activity into
            one premium workspace that gives your team clarity in every weekly
            cycle.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Show when="signed-out">
              <SignUpButton mode="modal">
                <Button size="lg">
                  Get Started <ArrowRight className="ml-2 size-4" />
                </Button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <ButtonLink href="/dashboard" size="lg">
                Open dashboard <ArrowRight className="ml-2 size-4" />
              </ButtonLink>
            </Show>

            <ButtonLink href="/dashboard" variant="secondary" size="lg">
              Live Demo
            </ButtonLink>
          </div>

          <div className="grid gap-3 text-sm text-[#4d5776] sm:grid-cols-3">
            <div className="rounded-xl border border-[#e3e8f4] bg-white/80 px-4 py-3">
              <p className="font-semibold text-[#11182b]">No setup tax</p>
              <p className="mt-1">Launch in under 5 minutes</p>
            </div>
            <div className="rounded-xl border border-[#e3e8f4] bg-white/80 px-4 py-3">
              <p className="font-semibold text-[#11182b]">Realtime insights</p>
              <p className="mt-1">Refresh in less than 300ms</p>
            </div>
            <div className="rounded-xl border border-[#e3e8f4] bg-white/80 px-4 py-3">
              <p className="font-semibold text-[#11182b]">
                Enterprise controls
              </p>
              <p className="mt-1">Policy and audit ready</p>
            </div>
          </div>
        </div>

        <Card className="relative overflow-hidden border-[#dfe6fb] bg-white/90">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#2f5bff_0%,#4ba1ff_45%,#10b981_100%)]" />
          <CardHeader className="flex flex-row items-center justify-between pb-0">
            <p className="text-sm font-semibold text-[#141a2e]">
              Operations Pulse
            </p>
            <span className="rounded-full bg-[#ecf2ff] px-2.5 py-1 text-xs font-medium text-[#2f5bff]">
              Live
            </span>
          </CardHeader>
          <CardContent className="space-y-5 pt-4">
            <div className="grid grid-cols-3 gap-3">
              <article className="rounded-xl border border-[#e7ebf6] bg-[#f7f9ff] p-3">
                <BarChart3 className="size-4 text-[#2f5bff]" />
                <p className="mt-3 text-xs text-[#627094]">MRR</p>
                <p className="mt-1 text-lg font-semibold text-[#13192b]">
                  $382k
                </p>
              </article>
              <article className="rounded-xl border border-[#e7ebf6] bg-[#f7f9ff] p-3">
                <Sparkles className="size-4 text-[#0ea37f]" />
                <p className="mt-3 text-xs text-[#627094]">Activation</p>
                <p className="mt-1 text-lg font-semibold text-[#13192b]">
                  78.4%
                </p>
              </article>
              <article className="rounded-xl border border-[#e7ebf6] bg-[#f7f9ff] p-3">
                <ShieldCheck className="size-4 text-[#8b5cf6]" />
                <p className="mt-3 text-xs text-[#627094]">Security</p>
                <p className="mt-1 text-lg font-semibold text-[#13192b]">A+</p>
              </article>
            </div>

            <div className="rounded-xl border border-[#e8ecf7] bg-white p-4">
              <div className="flex items-end gap-2">
                {[32, 38, 41, 36, 49, 58, 62, 70, 67, 76].map((value) => (
                  <div
                    key={value}
                    className="h-28 flex-1 rounded-t-md bg-[linear-gradient(180deg,#6f89ff_0%,#2f5bff_100%)]"
                    style={{ height: `${value}%` }}
                  />
                ))}
              </div>
            </div>

            <Link
              href="/dashboard"
              className="inline-flex items-center text-sm font-semibold text-[#2f5bff] transition-colors hover:text-[#224df0]"
            >
              Explore product walkthrough <ArrowRight className="ml-1 size-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
