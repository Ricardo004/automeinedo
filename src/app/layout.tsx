import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Automeinedo - Stand Virtual Subaru | Compra e Venda de Veículos",
  description:
    "Stand virtual especializado em veículos Subaru. Explore nossa seleção de carros novos e usados, configure seu veículo ideal e agende test drives em Meinedo, Lousada.",
  keywords:
    "subaru, stand virtual, carros, veículos, compra, venda, Meinedo, Lousada, test drive, financiamento",
  openGraph: {
    title: "Automeinedo - Stand Virtual Subaru",
    description:
      "Explore nossa seleção exclusiva de veículos Subaru no stand virtual mais moderno da região.",
    url: "https://automeinedo.com",
    siteName: "Automeinedo Stand Virtual",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-neutral-50">{children}</body>
    </html>
  );
}
