import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={`${styles.footerText} ${styles.left}`} href={"/"}>
        Вопросы-ответы
      </Link>
      <Link className={`${styles.footerText} ${styles.right}`} href={"/"}>
        О нас
      </Link>
    </footer>
  );
}
