import { AppShell } from "@/src/components";
import { navByArea } from "@/src/config/navigation";

export default function InterruptionsPage() {
  return (
    <AppShell title="Interruption Management" nav={navByArea.operator}>
      <div className="grid grid-cols-2 gap-4">
        <section className="card p-4">
          <h2 className="mb-3 text-lg font-semibold">Open Interruption</h2>
          <div className="grid grid-cols-2 gap-3">
            {['Region','Station','Device','Start Time','Cause Code','Load Lost'].map((f)=><input key={f} className="input" placeholder={f} />)}
          </div>
        </section>
        <section className="card border-danger/40 p-4">
          <h2 className="mb-3 text-lg font-semibold text-danger">Active Interruption Board</h2>
          <p className="text-sm">Jebba / 2JEB-SGB1 / Started 12:11 / Cause: Protection trip</p>
        </section>
      </div>
    </AppShell>
  );
}
