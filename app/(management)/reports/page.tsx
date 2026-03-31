import { AppShell } from "@/src/components";
import { navByArea } from "@/src/config/navigation";

export default function Page() {
  return (
    <AppShell title="Management - Reports" nav={navByArea.management}>
      <div className="card p-4 text-sm text-slate-600">Management reports view with region/station/device filters.</div>
    </AppShell>
  );
}
