"use client";

import { useGetMovieQuery, useGetReviewsQuery } from "@/app/fetching/movieApi";
import FilmCard from "./components/FilmCard";
import ReviewCard from "./components/ReviewCard";
import styles from "./page.module.css";

export default function Page({ params }: { params: { id: string } }) {
  const movieQuery = useGetMovieQuery(params.id);
  const reviewsQuery = useGetReviewsQuery(null);

  return (
    <div className={styles.content}>
      {!movieQuery.isLoading && movieQuery.data ? (
        <FilmCard filmData={movieQuery.data} />
      ) : (
        <FilmCard
          filmData={{
            title: "загрузка...",
            posterUrl:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+Pr1638ACaED3/nOThIAAAAASUVORK5CYII=",
            releaseYear: 0,
            description: "загрузка...",
            genre: "загрузка...",
            id: "загрузка...",
            rating: 0,
            director: "загрузка...",
            reviewIds: [],
          }}
        />
      )}

      {!reviewsQuery.isLoading &&
        !movieQuery.isLoading &&
        movieQuery.data &&
        reviewsQuery.data
          .filter(
            (review: {
              id: string;
              name: string;
              text: string;
              rating: number;
            }) => movieQuery.data.reviewIds.includes(review.id)
          )
          .map(
            (review: {
              id: string;
              name: string;
              text: string;
              rating: number;
            }) => <ReviewCard reviewData={review} key={review.id} />
          )}
    </div>
  );
}
