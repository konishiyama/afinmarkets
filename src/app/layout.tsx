import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { i18n, type Locale } from "../i18n-config";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[Afin Technologies] 24/7 Forex Trading",
  description: "World's First On-Chain 24/7 Forex Trading Platform.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: {
      url: "/public/images/openGraphImage.png",
    },
  },
  twitter: {
    images: {
      url: "/public/images/openGraphImage.png",
    },
  },
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
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {children}
      </body>
    </html>
  );
}
