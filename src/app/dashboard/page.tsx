import { Suspense } from "react";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import { RecentActivity } from "@/components/dashboard/recent-activity";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { StatCard } from "@/components/dashboard/stat-card";
import { Skeleton } from "@/components/ui/skeleton";

// --- 1. DATA DUMMY ---
const stats = [
  { label: "Active Users", value: "12,480", change: "+8.2% vs last week" },
  { label: "Revenue", value: "$98,420", change: "+4.9% this month" },
  { label: "Engagement", value: "67.8%", change: "+2.1% today" },
];

const chartBars = [
  { id: "w1", value: 22 },
  { id: "w2", value: 38 },
  { id: "w3", value: 30 },
  { id: "w4", value: 49 },
  { id: "w5", value: 43 },
  { id: "w6", value: 58 },
  { id: "w7", value: 70 },
  { id: "w8", value: 62 },
];

// --- 2. KOMPONEN LOADING (SKELETON UI) ---
function DashboardSkeleton() {
  return (
    <section className="space-y-6">
      {/* Skeleton Header */}
      <div className="flex items-center justify-between rounded-2xl border border-[#e6e9f1] bg-white p-4 shadow-[0_8px_22px_rgba(16,20,34,0.06)] sm:p-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-64 sm:w-80" />
        </div>
        <Skeleton className="size-8 rounded-full" />
      </div>

      {/* Skeleton Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-[#e6e9f1] bg-white p-6 shadow-sm"
          >
            <Skeleton className="h-5 w-28 mb-4" />
            <Skeleton className="h-8 w-32 mb-2" />
            <Skeleton className="h-4 w-40" />
          </div>
        ))}
      </div>

      {/* Skeleton Chart & Activity */}
      <div className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
        <div className="rounded-2xl border border-[#e6e9f1] bg-white p-6 shadow-sm">
          <Skeleton className="h-6 w-40 mb-6" />
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="size-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="rounded-2xl border border-[#e6e9f1] bg-white p-6 shadow-[0_8px_24px_rgba(16,22,38,0.06)]">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-36" />
            <Skeleton className="h-4 w-20" />
          </div>

          <div className="mt-6 h-64 rounded-xl border border-dashed border-[#d9dfee] bg-[#fdfdff] p-4 flex items-end gap-2">
            {[20, 40, 30, 60, 50, 80, 70, 90].map((h, i) => (
              <Skeleton
                key={i}
                className="flex-1 rounded-t-md rounded-b-none"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

// --- 3. KOMPONEN KONTEN UTAMA (ASYNC FETCH) ---
async function DashboardContent() {
  const user = await currentUser();

  const name =
    user?.firstName || user?.emailAddresses?.[0]?.emailAddress || "User";

  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between rounded-2xl border border-[#e6e9f1] bg-white p-4 shadow-[0_8px_22px_rgba(16,20,34,0.06)] sm:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f7794]">
            Dashboard
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#111526]">
            Good afternoon, welcome back {name}
          </h1>
        </div>
        <UserButton />
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
        <RecentActivity />

        <section className="rounded-2xl border border-[#e6e9f1] bg-white p-6 shadow-[0_8px_24px_rgba(16,22,38,0.06)]">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#121728]">
              Performance trend
            </h3>
            <span className="text-xs text-[#6e7792]">Last 30 days</span>
          </div>

          <div className="mt-6 h-64 rounded-xl border border-dashed border-[#d9dfee] bg-[linear-gradient(180deg,#f9fbff_0%,#f2f6ff_100%)] p-4">
            <div className="flex h-full items-end gap-2">
              {chartBars.map((bar) => (
                <div
                  key={bar.id}
                  className="flex-1 rounded-t-md bg-[linear-gradient(180deg,#6d88ff_0%,#355ffb_100%)]"
                  style={{ height: `${bar.value}%` }}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

// --- 4. HALAMAN UTAMA (ENTRY POINT) ---
export default function DashboardPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <DashboardSidebar active="overview" />

        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardContent />
        </Suspense>
      </div>
    </main>
  );
}