const entries = [
  { title: "New onboarding flow published", time: "2m ago", status: "Shipped" },
  { title: "Billing settings updated", time: "19m ago", status: "Reviewing" },
  { title: "Q2 revenue snapshot exported", time: "1h ago", status: "Complete" },
  { title: "Support queue reassigned", time: "3h ago", status: "In progress" },
];

export function RecentActivity() {
  return (
    <section className="rounded-2xl border border-[#e6e9f1] bg-white p-6 shadow-[0_8px_24px_rgba(16,22,38,0.06)]">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#121728]">
          Recent activity
        </h3>
        <button className="rounded-lg border border-[#dbe1ef] px-3 py-1.5 text-xs font-medium text-[#4f5b7a] transition-colors hover:bg-[#f7f8fc]">
          View all
        </button>
      </div>

      <ul className="mt-5 space-y-3">
        {entries.map((entry) => (
          <li
            key={entry.title}
            className="flex items-center justify-between rounded-xl border border-[#eef1f7] px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-[#13192b]">
                {entry.title}
              </p>
              <p className="mt-1 text-xs text-[#6b7593]">{entry.time}</p>
            </div>
            <span className="rounded-full bg-[#f2f5ff] px-3 py-1 text-xs font-medium text-[#3a62ff]">
              {entry.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
