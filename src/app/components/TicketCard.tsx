import Image from "next/image";
import Link from "next/link";
import TicketButtons from "./TicketButtons";
import styles from "./TicketCard.module.css";

export default function TicketCard({
  data,
  filmId,
  basket,
}: {
  filmId: string;
  data: {
    posterUrl: string;
    title: string;
    description: [string, string][];
  };
  basket?: boolean;
}) {
  return (
    <div className={styles.ticketCard}>
      <Image
        className={styles["film-poster-small"]}
        src={data.posterUrl}
        alt="Film poster"
        width={92}
        height={128}
      />

      <div className={styles.filmData}>
        <div>
          <Link className={styles.filmTitle} href={`./movie/${filmId}`}>
            {data.title}
          </Link>
        </div>
        <div className={styles.filmDescription}>
          {data.description.map(([type, text]) => (
            <p key={type}>{text}</p>
          ))}
        </div>
      </div>

      <TicketButtons basket={basket} />
    </div>
  );
}
