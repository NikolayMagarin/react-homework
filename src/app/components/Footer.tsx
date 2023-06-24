export function Footer({ children }: { children?: string }) {
  return (
    <footer className="footer">
      <a className="footer-text left">Вопросы-ответы</a>
      <a className="footer-text right">О нас</a>
    </footer>
  );
}
