import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import FlyingCTA from "@/components/global/FlyingCTA";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import HeaderMenuScreen from "@/components/global/HeaderMenuScreen";
import SeoSchema from "@/components/SEO/SeoSchema";
import SmoothScroll from "@/components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans-app",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-app",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victor Cordeiro | Frontend Developer",
  description:
    "Victor Cordeiro's portfolio — frontend developer. React, TypeScript, modern interfaces and digital experiences.",
  keywords: [
    "Victor Cordeiro",
    "frontend developer",
    "React",
    "TypeScript",
    "portfolio",
    "frontend developer",
  ],
  openGraph: {
    title: "Victor Cordeiro | Frontend Developer",
    description:
      "Victor Cordeiro's portfolio — frontend developer. React, TypeScript and modern interfaces.",
    url: "https://victorcordeiro.dev",
    images: [
      {
        url: "/img-1.png",
        width: 1200,
        height: 630,
        alt: "Victor Cordeiro - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Cordeiro | Frontend Developer",
    description:
      "Victor Cordeiro's portfolio — frontend developer. React, TypeScript and modern interfaces.",
    images: ["/img-1.png"],
  },
  icons: {
    // icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SeoSchema
          schema={{
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Victor Cordeiro",
            url: "https://victorcordeiro.dev",
            jobTitle: "Frontend Developer",
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} dark antialiased`}
      >
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
        <FlyingCTA />
        <HeaderMenuScreen />
      </body>
    </html>
  );
}
