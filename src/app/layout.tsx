import { Metadata } from "next";
import PageLayout from "./components/PageLayout";

import "./globals.css";
import StoreProvider from "./store/StoreProvider";

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
        <StoreProvider>
          <PageLayout>{children}</PageLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
