import { AppShell } from "@/src/components";
import { navByArea } from "@/src/config/navigation";

export default function DashboardPage() {
  return (
    <AppShell title="Operational Overview" nav={navByArea.operator}>
      <section className="grid grid-cols-4 gap-4">
        {[
          ["Active Interruptions", "2"],
          ["Readings Completion", "91%"],
          ["Open Operations", "7"],
          ["Unread Messages", "5"]
        ].map(([label, value]) => (
          <div key={label} className="card p-4">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-2xl font-semibold">{value}</p>
          </div>
        ))}
      </section>
    </AppShell>
  );
}
