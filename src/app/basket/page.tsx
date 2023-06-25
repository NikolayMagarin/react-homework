import TicketContainer from "../components/TicketContainer";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <TicketContainer basket={true} />
      <div>
        <div className={styles.totalTickets}>
          <div className={styles.totalText}>Итого билетов:</div>
          <span>7</span>
        </div>
      </div>
    </div>
  );
}
