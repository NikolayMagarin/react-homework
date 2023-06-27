import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3001/api/"}),
  endpoints: (builder)=>({
    getMovies: builder.query({query:()=>"movies"}),
    getMovie: builder.query({query:(movieId)=>`movie?movieId=${movieId}`}),
    getCinemas: builder.query({query:()=>"cinemas"}),
    getReviews: builder.query({query:()=>"reviews"})
  })
})

export const {useGetMoviesQuery, useGetCinemasQuery, useGetReviewsQuery, useGetMovieQuery} = movieApi;
