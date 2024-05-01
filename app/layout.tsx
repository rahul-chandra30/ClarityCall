import Head from 'next/head';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VirtuMeet",
  description: "Generated by Rahul Chandra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/path/to/your/favicon.ico" />
      </Head>
      <body className={`${inter.className} bg-dark-2`}>{children}</body>
    </html>
  );
}