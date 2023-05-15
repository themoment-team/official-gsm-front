"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Client</title>
        <meta name="description" content="client" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
