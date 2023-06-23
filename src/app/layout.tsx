//import { Inter } from "next/font/google";

import { Metadata } from "next";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Билетопоиск",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
