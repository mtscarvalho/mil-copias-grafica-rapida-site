import type { Metadata } from "next";

import { GoogleTagManager } from "@next/third-parties/google";
import { Exo, Figtree } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  title: {
    default: `${process.env.SITE_TITLE}`,
    template: `%s | ${process.env.SITE_TITLE}`,
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${figtree.variable} ${exo.variable} antialiased`}>
        <NextTopLoader color="var(--color-red-700)" />
        <Header />
        {children}
        {process.env.NEXT_PUBLIC_ENV === "production" && <GoogleTagManager gtmId="GTM-" />}
        <Footer />
      </body>
    </html>
  );
}
