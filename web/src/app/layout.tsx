import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habbo/Nitro Avatar Generator",
  description: "Random + manual Habbo-style avatar builder using Nitro Imager.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
