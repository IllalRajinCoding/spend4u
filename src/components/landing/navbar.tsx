"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button, ButtonLink } from "@/components/ui/button";

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
            ? "border-slate-300 bg-white/75 shadow-sm backdrop-blur-md"
            : "border-transparent bg-slate-50/70 shadow-[0_4px_14px_rgba(15,23,42,0.04)] backdrop-blur-sm"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5 select-none">
          <div className="flex size-7 items-center justify-center rounded-lg bg-slate-900 text-white">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 10.5L5.5 4 9 8l2-3 1 1.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-[0.14em] text-slate-900 transition-opacity duration-200 group-hover:opacity-70">
            SPEND4U
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3.5 py-1.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
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
            <ButtonLink href="/dashboard" size="sm">
              Open app
            </ButtonLink>
          </Show>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-300 bg-white/90 text-slate-800 transition-all duration-200 hover:bg-slate-100 active:scale-[0.97] md:hidden"
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
            className={`overflow-hidden rounded-2xl border border-slate-300 bg-slate-50/95 p-3 shadow-[0_12px_28px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-200 ${
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
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200/70 hover:text-slate-900"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-3 grid gap-2 border-t border-slate-200 pt-3">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button
                    type="button"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition-colors duration-200 hover:bg-slate-50"
                  >
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="w-full" size="sm">
                    Get Started
                  </Button>
                </SignUpButton>
              </Show>

              <Show when="signed-in">
                <ButtonLink
                  href="/dashboard"
                  size="sm"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Open app
                </ButtonLink>
              </Show>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
