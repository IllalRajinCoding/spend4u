import Link from "next/link";
import { Show, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

export function FinalCtaSection() {
  return (
    <section className="bg-primary text-primary-foreground mx-auto mt-24 w-full max-w-7xl rounded-3xl border border-border p-8 text-center shadow-lg sm:p-12">
      <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-[0.2em]">
        Ready to move faster
      </p>
      <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        Replace fragmented reports with one premium operating system
      </h3>
      <p className="text-primary-foreground/85 mx-auto mt-4 max-w-2xl text-base leading-7">
        Join high-performing teams that use Spend4U to align strategy,
        execution, and revenue in a single workspace.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Suspense
          fallback={
            <div className="bg-primary-foreground/20 h-12 w-32 animate-pulse rounded-md" />
          }
        >
          <Show when="signed-out">
            <SignUpButton mode="modal">
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
            </SignUpButton>
          </Show>
        </Suspense>
        <Button
          asChild
          variant="ghost"
          size="lg"
          className="border border-border"
        >
          <Link href="/dashboard">View Live Demo</Link>
        </Button>
      </div>
    </section>
  );
}
