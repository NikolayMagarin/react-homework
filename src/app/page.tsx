"use client";

import { useState } from "react";
import Filters from "./components/Filters";
import TicketContainer from "./components/TicketContainer";
import { useGetCinemasQuery, useGetMoviesQuery } from "./fetching/movieApi";

import styles from "./page.module.css";

export default function Page() {
  const moviesQuery = useGetMoviesQuery(null);
  const cinemasQuery = useGetCinemasQuery(null);

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
  }[] = moviesQuery.data;

  const cinemas: { id: string; name: string; movieIds: string[] }[] =
    cinemasQuery.data;

  const [filters, setFilters] = useState({ name: "", genre: "", cinema: "" });

  return (
    <div className={styles.content}>
      <aside className={styles.filters}>
        <Filters filters={filters} setFilters={setFilters} />
      </aside>
      {!moviesQuery.isLoading && !cinemasQuery.isLoading ? (
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
      ) : (
        <TicketContainer
          films={new Array(4).fill(0).map((_, i) => {
            return {
              title: "загрузка...",
              posterUrl:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+Pr1638ACaED3/nOThIAAAAASUVORK5CYII=",
              releaseYear: 0,
              description: "загрузка...",
              genre: "загрузка...",
              id: "loading_ticket_" + i,
              rating: 0,
              director: "загрузка...",
              reviewIds: [],
            };
          })}
        />
      )}
    </div>
  );
}
