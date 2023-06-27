import TicketButtons from "@/app/components/TicketButtons";
import { genreRU } from "@/app/utils/genreRU";
import Image from "next/image";
import styles from "./FilmCard.module.css";

export default function FilmCard({
  filmData,
}: {
  filmData: {
    title: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    genre: string;
    id: string;
    rating: number;
    director: string;
    reviewIds: string[];
  };
}) {
  return (
    <div className={styles.filmCard}>
      <div>
        <Image
          width={300}
          height={450}
          className={styles.filmPoster}
          src={filmData.posterUrl}
          alt="film poster"
        />
      </div>
      <div className={styles.filmData}>
        <div style={{ display: "flex" }}>
          <h1 className={styles.filmTitle}>{filmData.title}</h1>
          <TicketButtons filmId={filmData.id} />
        </div>

        <div className={styles.aboutData}>
          <p className={styles.aboutLine}>
            <strong>Жанр:</strong>
            <span>{genreRU[filmData.genre] || filmData.genre}</span>
          </p>
          <p className={styles.aboutLine}>
            <strong>Год выпуска:</strong>
            <span>{filmData.releaseYear}</span>
          </p>
          <p className={styles.aboutLine}>
            <strong>Рейтинг:</strong>
            <span>{filmData.rating}</span>
          </p>
          <p className={styles.aboutLine}>
            <strong>Режиссер:</strong>
            <span>{filmData.director}</span>
          </p>

          <p style={{ marginTop: "16px" }}>
            <strong>Описание</strong>
          </p>
          <p className={styles.description}>{filmData.description}</p>
        </div>
      </div>
    </div>
  );
}
