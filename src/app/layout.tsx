import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import { GoogleAnalytics } from "./common/ui/components/GoogleAnalytics";
import { Suspense } from "react";
import { AdSense } from "./common/ui/components/AdSense";
import { Header } from "./common/ui/components/Header/Header";

export const metadata: Metadata = {
  title:
    "todopitbike.es - guía completa de Pitbikes de asfalto en España: Marcas, Circuitos, Mantenimiento y mucho más",
  description:
    "Descubre todo sobre las pitbikes de asfalto en España. Guía completa para iniciarte en el mundo de las pitbikes: marcas, mantenimiento, circuitos, eventos y más. Encuentra todo lo que necesitas saber para rodar en asfalto con tu pitbike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon-180x180.png" />
        <link rel="icon" href="/favicon-512x512.png" sizes="512x512" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="google-site-verification" content="aTDwnWMa_KG-mAFtDZa1QYWTXprMQAD1nhU-3DaUz6M" />
        <meta name="google-adsense-account" content="ca-pub-6477691629525796" />
        <AdSense pid="pub-6477691629525796" />
      </head>
      <body
        className={`${inter.className} antialiased flex flex-col min-h-screen	`}
      >
        <Header />
        <main className="grow">{children}</main>
      </body>
      <Suspense>
        <Analytics />
        <GoogleAnalytics />
      </Suspense>
    </html>
  );
}
