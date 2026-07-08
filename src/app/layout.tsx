import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Leather Sheaths & Gear Reviews | Leathersheaths.net",
  description: "Deep-dive testing and rugged field evaluations of premium leather knife sheaths — fixed-blade survival sheaths, scout carry conversions, and maintenance guides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
