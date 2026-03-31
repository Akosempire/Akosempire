import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NISO System",
  description: "Nigeria Independent System Operation platform used by NISO under TCN"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
