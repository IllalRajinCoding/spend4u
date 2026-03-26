import Link from "next/link";

type DashboardSidebarProps = {
  active?: "overview" | "analytics" | "inbox" | "settings";
};

const navItems = [
  { id: "overview", label: "Overview", icon: "◩" },
  { id: "analytics", label: "Analytics", icon: "◧" },
  { id: "inbox", label: "Inbox", icon: "◨" },
  { id: "settings", label: "Settings", icon: "○" },
] as const;

export function DashboardSidebar({
  active = "overview",
}: Readonly<DashboardSidebarProps>) {
  return (
    <aside className="rounded-2xl border border-[#e6e9f1] bg-white/95 p-4 shadow-[0_12px_28px_rgba(11,18,32,0.07)] backdrop-blur lg:min-h-[calc(100vh-6rem)]">
      <div className="mb-8 px-2 pt-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d7693]">
          Spend4U
        </p>
        <h2 className="mt-2 text-lg font-semibold text-[#111523]">
          Control Center
        </h2>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = item.id === active;
          return (
            <Link
              key={item.id}
              href={item.id === "overview" ? "/dashboard" : "#"}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#f2f5ff] text-[#345efb]"
                  : "text-[#4f5a78] hover:bg-[#f7f8fc] hover:text-[#1a2238]"
              }`}
            >
              <span aria-hidden>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
