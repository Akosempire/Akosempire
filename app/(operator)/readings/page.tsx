import { AppShell } from "@/src/components";
import { navByArea } from "@/src/config/navigation";

const rows = [
  { device: "2JEB-SGB1", amp: "523", mw: "317", voltage: "328" },
  { device: "2JEB-SGB2", amp: "496", mw: "301", voltage: "327" },
  { device: "TR-01", amp: "", mw: "", voltage: "132", condition: "TCN Maintenance" }
];

export default function ReadingsPage() {
  return (
    <AppShell title="Hourly Readings" nav={navByArea.operator}>
      <div className="card p-4">
        <div className="mb-4 flex items-center justify-between text-sm">
          <div className="space-x-2"><span className="font-medium">Hour:</span><span>1300</span></div>
          <div className="space-x-2"><span className="font-medium">Shift:</span><span>B</span></div>
          <div className="text-mutedBlue">Autosave: Saved 14:07:12</div>
        </div>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="py-2">Device</th><th>Amp</th><th>MW</th><th>Voltage</th><th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.device} className="border-b border-border/70">
                <td className="py-2 font-medium">{row.device}</td>
                <td><input defaultValue={row.amp} className="input" /></td>
                <td><input defaultValue={row.mw} className="input" /></td>
                <td><input defaultValue={row.voltage} className="input" /></td>
                <td><input defaultValue={row.condition ?? ""} className="input" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
