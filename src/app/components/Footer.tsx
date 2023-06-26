import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={`${styles.footerText} ${styles.left}`} href={"/faq"}>
        Вопросы-ответы
      </Link>
      <Link className={`${styles.footerText} ${styles.right}`} href={"/about"}>
        О нас
      </Link>
    </footer>
  );
}
