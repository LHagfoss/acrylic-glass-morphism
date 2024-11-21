import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisContainer from "@/components/LenisContainer";
import PageTransition from "@/components/PageTransition"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Acrylig Glass Morphism",
  description: "Made by LHagfoss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-[100vw] overflow-x-hidden`}
      >
        <LenisContainer>
          <PageTransition />
          {children}
        </LenisContainer>
      </body>
    </html>
  );
}
