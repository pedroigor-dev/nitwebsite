import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GlobalLoader } from "@/components/global-loader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NITE",
  description:
    "Site de recrutamento do Núcleo de Inovação e Tecnologia da UJ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <GlobalLoader />
        {children}
      </body>
    </html>
  );
}
