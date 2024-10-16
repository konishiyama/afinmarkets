import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { i18n, type Locale } from "../i18n-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afin Markets",
  description: "World's First On-Chain Forex Markets.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body className="flex flex-col min-h-screen flex-grow font-sans bg-white text-base">
        {children}
      </body>
    </html>
  );
}
