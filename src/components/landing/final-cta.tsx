import { Show, SignUpButton } from "@clerk/nextjs";
import { Button, ButtonLink } from "@/components/ui/button";
import { Suspense } from "react";

export function FinalCtaSection() {
  return (
    <section className="mx-auto mt-24 w-full max-w-7xl rounded-3xl border border-slate-300 bg-slate-100 p-8 text-center shadow-[0_18px_40px_rgba(15,23,42,0.1)] sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
        Ready to move faster
      </p>
      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Replace fragmented reports with one premium operating system
      </h3>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
        Join high-performing teams that use Spend4U to align strategy,
        execution, and revenue in a single workspace.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Suspense
          fallback={
            <div className="h-12 w-32 animate-pulse rounded-md bg-[#e3e8f4]" />
          }
        >
          <Show when="signed-out">
            <SignUpButton mode="modal">
              <Button size="lg">Get Started</Button>
            </SignUpButton>
          </Show>
        </Suspense>
        <ButtonLink href="/dashboard" variant="secondary" size="lg">
          View Live Demo
        </ButtonLink>
      </div>
    </section>
  );
}
