import Filters from "./components/Filters";
import TicketContainer from "./components/TicketContainer";
import { getCinemas } from "./fetching/getCinemas";
import { getMovies } from "./fetching/getMovies";

import styles from "./page.module.css";
import { selectFilters } from "./store/features/filters";
import { store } from "./store/store";

export default async function Page() {
  const films: {
    title: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    genre: string;
    id: string;
    rating: number;
    director: string;
    reviewIds: string[];
  }[] = await getMovies();

  const cinemas: { id: string; name: string; movieIds: string[] }[] =
    await getCinemas();

  const filters = selectFilters(store);

  return (
    <div className={styles.content}>
      <aside className={styles.filters}>
        <Filters />
      </aside>
      <TicketContainer
        films={films.filter(
          (film) =>
            !filters ||
            ((filters.name == "" ||
              film.title
                .toLocaleLowerCase()
                .includes(filters?.name.toLocaleLowerCase())) &&
              (filters.cinema == "" ||
                cinemas
                  .filter((cinema) => cinema.id === filters.cinema)[0]
                  .movieIds.includes(film.id)) &&
              (filters.genre == "" ||
                filters.genre == "" ||
                film.genre === filters.genre))
        )}
      />
    </div>
  );
}
