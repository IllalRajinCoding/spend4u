---
name: nextjs-clerk-premium-frontend
description: "Build production-ready Next.js App Router frontends with Clerk auth and premium SaaS UX. Use when implementing login/signup, protected dashboard routes, post-login redirects to /dashboard, reusable component architecture, Tailwind + shadcn/ui styling, loading/skeleton/empty states, and polished responsive UI inspired by Stripe, Vercel, and Linear."
argument-hint: "Describe the page or feature to build, target routes, and required auth behavior."
user-invocable: true
---

# Next.js Clerk Premium Frontend

## What This Skill Produces

This skill produces clean, scalable, production-ready frontend implementations for Next.js App Router projects using Clerk authentication, with a minimal premium SaaS aesthetic.

## When To Use

Use this skill when you need to:

- Build or refactor App Router pages/layouts in TypeScript.
- Add or fix Clerk auth flows (sign in, sign up, session-aware UI).
- Redirect authenticated users to `/dashboard` after login.
- Protect dashboard and other private routes.
- Build modern dashboard UIs with reusable components.
- Improve UX quality (loading, skeletons, empty states, spacing, hierarchy, accessibility, responsiveness).

## Required Standards

- Keep architecture component-first and reusable.
- Prefer Tailwind CSS and shadcn/ui patterns.
- Use mobile-first responsive layouts.
- Keep code readable; avoid overengineering.
- Use meaningful naming conventions.
- Add comments only when they explain non-obvious logic.

## Workflow

1. Assess current app structure and auth entry points.
2. Define route access model (public vs protected) and redirect behavior.
3. Implement Clerk auth primitives and session-aware navigation.
4. Enforce protected dashboard access.
5. Build premium dashboard shell (sidebar, top bar, content area).
6. Add data presentation blocks (stats, recent activity, chart placeholder).
7. Add UX polish (hover/focus/transition states, loading/skeleton/empty states).
8. Verify accessibility, responsiveness, and consistency.

## Decision Points And Branching Logic

### 1) Route Protection Strategy

- If project already uses `middleware.ts`, integrate Clerk route protection there.
- If project does not use middleware yet, add `middleware.ts` with explicit public route allowlist and default protection for dashboard/private paths.
- If route groups are used, protect group segments consistently (for example `(app)` private, `(marketing)` public).

### 2) Post-Login Redirect Strategy

- If sign-in and sign-up are custom pages, set Clerk redirect behavior to send authenticated users to `/dashboard`.
- If using Clerk hosted buttons/components in layouts, ensure authenticated users are redirected from public entry surfaces to `/dashboard`.
- If user is already authenticated and visits landing/login/signup, redirect to `/dashboard`.

### 3) Dashboard Layout Composition

- If app already has a shared layout system, extend it with reusable primitives (sidebar item, stat card, section header).
- If no reusable primitives exist, create focused UI components in `src/components` before composing page views.

### 4) State UX Requirements

- If asynchronous data exists, provide loading and skeleton states.
- If data is absent, provide empty-state messaging and CTA.
- If demo-only content is required, use stable mock data with realistic formatting.

## Implementation Checklist

- Clerk installed and provider placed correctly in root layout.
- Public routes defined (landing, sign-in, sign-up).
- Protected routes enforced for `/dashboard`.
- Authenticated users redirected to `/dashboard` from public auth screens.
- Dashboard contains:
  - Sidebar navigation with icons + labels
  - Top navbar with profile and sign-out/user menu
  - Main content area with stats cards, recent activity, chart placeholder
- Styling reflects premium minimal SaaS quality:
  - Clear typographic hierarchy
  - Consistent spacing system
  - Subtle shadows and rounded corners
  - Neutral palette with one accent color
  - Smooth but restrained transitions
- Mobile, tablet, and desktop layouts verified.
- Basic accessibility checks passed (focus visibility, semantic regions, contrast).

## Completion Criteria

Consider work complete only when all of the following are true:

- Unauthenticated users cannot access `/dashboard`.
- Authenticated users land on `/dashboard` after sign in/sign up.
- Public routes still render correctly for signed-out users.
- UI is visually polished and consistent across breakpoints.
- Components are reusable and code is maintainable.

## Prompt Starters

Use these prompts to invoke this skill effectively:

- Build a premium landing page and Clerk auth flow, then route signed-in users to `/dashboard`.
- Create a protected dashboard layout with sidebar, top bar, stats cards, activity list, and chart placeholder.
- Refactor this App Router code into reusable components with Tailwind + shadcn/ui and improve loading/empty states.
- Audit my Next.js + Clerk auth flow and fix redirect/protection issues for `/dashboard`.
