import TicketCard from "./TicketCard";
import styles from "./TicketContainer.module.css";

export default function TicketContainer({
  basket,
  filmIds,
}: {
  basket?: boolean;
  filmIds?: string[];
}) {
  return (
    <div className={styles.ticketContainer}>
      {new Array(30)
        .fill(0)
        .map((_, i) => i)
        .map((i) => (
          <TicketCard
            key={i}
            filmId={"2aT976Fs_Bek0e2ZR_05V"}
            data={{
              posterUrl: "https://i.postimg.cc/pdCLNMqX/1.webp",
              title: "Властелин колец: Братство кольца",
              description: [
                ["genre", "Фэнтези"],
                ["decriptionline0", "Что-то ещё"],
                ["decriptionline1", "И ещё какая-то информация"],
              ],
            }}
            basket={basket}
          />
        ))}
    </div>
  );
}
