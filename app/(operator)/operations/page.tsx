import { AppShell } from "@/src/components";
import { navByArea } from "@/src/config/navigation";

export default function Page() {
  return (
    <AppShell title="Operations" nav={navByArea.operator}>
      <div className="card p-4 text-sm text-slate-600">Operations module scaffold with service-backed API hooks and scope-aware filters.</div>
    </AppShell>
  );
}
