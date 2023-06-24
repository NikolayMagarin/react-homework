import TicketCard from "./TicketCard";
import styles from "./TicketContainer.module.css";

export default function TicketContainer() {
  return (
    <div className={styles.ticketContainer}>
      {new Array(4)
        .fill(0)
        .map((_, i) => i)
        .map((i) => (
          <TicketCard
            key={i}
            filmId={"*Тут уникальные айдишники полученные сервера*"}
            data={{
              poster: "https://i.postimg.cc/pdCLNMqX/1.webp",
              title: "Властелин колец: Братство кольца",
              description: [
                ["genre", "Фэнтези"],
                ["decriptionline0", "Что-то ещё"],
                ["decriptionline1", "И ещё какая-то информация"],
              ],
            }}
          />
        ))}
    </div>
  );
}
