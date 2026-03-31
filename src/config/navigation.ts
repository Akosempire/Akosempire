export type NavItem = { label: string; href: string };

export const navByArea: Record<string, NavItem[]> = {
  operator: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Hourly Readings", href: "/operator/readings" },
    { label: "Interruptions", href: "/operator/interruptions" },
    { label: "Operations", href: "/operator/operations" },
    { label: "Events", href: "/operator/events" },
    { label: "Messages", href: "/operator/messages" },
    { label: "Knowledge", href: "/operator/knowledge" }
  ],
  admin: [
    { label: "Users", href: "/admin/users" },
    { label: "Roles & Scopes", href: "/admin/roles" },
    { label: "Regions", href: "/admin/regions" },
    { label: "Stations", href: "/admin/stations" },
    { label: "Devices", href: "/admin/devices" },
    { label: "Parameters", href: "/admin/parameters" },
    { label: "Audit Logs", href: "/admin/audit" },
    { label: "Settings", href: "/admin/settings" }
  ],
  management: [
    { label: "Live Dashboard", href: "/management/live" },
    { label: "Interruption Board", href: "/management/interruptions" },
    { label: "Reports", href: "/management/reports" }
  ]
};
