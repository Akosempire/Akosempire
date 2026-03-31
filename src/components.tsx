import Link from "next/link";
import type { ReactNode } from "react";

export function BrandBlock() {
  return (
    <div className="space-y-1">
      <p className="text-xl font-semibold tracking-tight">NISO System</p>
      <p className="text-sm text-slate-600">Nigeria Independent System Operation</p>
      <p className="text-xs text-slate-500">Used by NISO under the Transmission Company of Nigeria (TCN)</p>
    </div>
  );
}

export function AppShell({
  title,
  nav,
  children
}: {
  title: string;
  nav: { href: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-border bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <BrandBlock />
          <div className="text-right text-xs text-slate-600">
            <p>Region: North Central</p>
            <p>Station: Jebba</p>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1600px] grid-cols-[260px_1fr] gap-6 p-6">
        <aside className="card p-3">
          <nav className="space-y-1">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="space-y-4">
          <h1 className="text-2xl font-semibold">{title}</h1>
          {children}
        </main>
      </div>
    </div>
  );
}
