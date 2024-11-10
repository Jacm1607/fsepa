import type { Metadata } from "next";
import { DM_Sans } from "@next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const dongle = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundación SEPA",
  description: "Servicios - Estadísticas - Proyectos - Análisis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${dongle.className} antialiased`}>
        <div className="min-h-screen bg-black">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
