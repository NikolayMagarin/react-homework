// import Image from "next/image";
import Filters from "./components/Filters";
import TicketContainer from "./components/TicketContainer";

import styles from "./page.module.css";

export default function Page() {
  return (
    // <main className="ticket-content-container">
    //   <div className="ticket-content">
    //     <FiltersContainer />
    //     <TicketContainer />
    //   </div>
    // </main>

    <div className={styles.content}>
      <aside className={styles.filters}>
        <Filters />
      </aside>
      <TicketContainer />
    </div>
  );
}
