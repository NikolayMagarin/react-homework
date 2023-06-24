//import { Inter } from "next/font/google";

import { Metadata } from "next";
import PageLayout from "./components/PageLayout";

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
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
