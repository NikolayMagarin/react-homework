"use client";

import { genreRU } from "../utils/genreRU";
import TicketCard from "./TicketCard";
import styles from "./TicketContainer.module.css";

export default function TicketContainer({
  basket,
  films,
}: {
  basket?: boolean;
  films: {
    title: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    genre: string;
    id: string;
    rating: number;
    director: string;
    reviewIds: string[];
  }[];
}) {
  return (
    <div className={styles.ticketContainer}>
      {!!films &&
        films.map(({ title, posterUrl, id, genre }) => (
          <TicketCard
            key={id}
            filmId={id}
            data={{
              posterUrl: posterUrl,
              title: title,
              description: [
                ["genre", genreRU[genre] || genre],
                // ["decriptionline0", "Что-то ещё"],
                // ["decriptionline1", "И ещё какая-то информация"],
              ],
            }}
            basket={basket}
          />
        ))}
    </div>
  );
}
