import { AppShell } from "@/src/components";
import { navByArea } from "@/src/config/navigation";

export default function Page() {
  return (
    <AppShell title="Management - Interruptions" nav={navByArea.management}>
      <div className="card p-4 text-sm text-slate-600">Management interruptions view with region/station/device filters.</div>
    </AppShell>
  );
}
