import { AppShell } from "@/src/components";
import { navByArea } from "@/src/config/navigation";

export default function Page() {
  return (
    <AppShell title="Admin - Stations" nav={navByArea.admin}>
      <div className="card p-4 text-sm text-slate-600">Scope-aware stations management table, forms, and audit trail hooks.</div>
    </AppShell>
  );
}
