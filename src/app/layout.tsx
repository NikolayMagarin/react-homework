import { Metadata } from "next";
import PageLayout from "./components/PageLayout";

import "./globals.css";

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
