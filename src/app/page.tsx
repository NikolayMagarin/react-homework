import Filters from "./components/Filters";
import TicketContainer from "./components/TicketContainer";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.content}>
      <aside className={styles.filters}>
        <Filters />
      </aside>
      <TicketContainer />
    </div>
  );
}
