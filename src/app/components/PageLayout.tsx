import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./PageLayout.module.css";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Header goodsAmount={10} />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
