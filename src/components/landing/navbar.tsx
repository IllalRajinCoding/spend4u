import Link from "next/link";
import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button, ButtonLink } from "@/components/ui/button";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#docs", label: "Docs" },
];

export function LandingNavbar() {
  return (
    <header className="sticky top-4 z-50">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-white/70 bg-white/78 px-4 py-3 shadow-[0_12px_32px_rgba(11,18,32,0.1)] backdrop-blur-xl sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] text-[#0f1426]"
        >
          SPEND4U
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#5d6785] transition-colors duration-200 hover:text-[#1d2744]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
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
      </nav>
    </header>
  );
}
