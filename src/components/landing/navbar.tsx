"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#docs", label: "Docs" },
];

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8">
      <nav
        className={`relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-border bg-background/80 shadow-sm backdrop-blur-md"
            : "border-transparent bg-background/70 backdrop-blur-sm"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5 select-none">
          <div className="bg-foreground text-background flex size-7 items-center justify-center rounded-lg">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 10.5L5.5 4 9 8l2-3 1 1.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-foreground group-hover:text-muted-foreground text-sm font-semibold tracking-[0.14em] transition-colors duration-200">
            SPEND4U
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />

          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Get Started</Button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <Button asChild size="lg">
              <Link href="/dashboard">Open app</Link>
            </Button>
          </Show>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="border-border bg-card text-card-foreground hover:bg-muted inline-flex size-10 items-center justify-center rounded-xl border transition-all duration-200 active:scale-[0.97] md:hidden"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden
          >
            {mobileOpen ? (
              <path
                d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3.5 5.5H14.5M3.5 9H14.5M3.5 12.5H14.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        <div
          className={`absolute left-0 right-0 top-[calc(100%+8px)] md:hidden ${
            mobileOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            className={`border-border bg-card/95 overflow-hidden rounded-2xl border p-3 shadow-lg backdrop-blur-xl transition-all duration-200 ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
          >
            <div className="grid gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-3 grid gap-2 border-t border-border pt-3">
              <ThemeToggle className="w-full" />

              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button
                    type="button"
                    className="border-border text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:ring-2"
                  >
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="w-full" size="lg">
                    Get Started
                  </Button>
                </SignUpButton>
              </Show>

              <Show when="signed-in">
                <Button
                  asChild
                  size="sm"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  <Link href="/dashboard">Open app</Link>
                </Button>
              </Show>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
