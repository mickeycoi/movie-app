import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";
import apiService from "../app/apiService";
import GetMovieData from "./GetMovieData";
import { useSearchParams } from "react-router-dom";

function MovieList({ movies }) {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <Grid container spacing={2} mt={1}>
      {movies &&
        movies
          .filter((movie) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = movie.original_title.toLowerCase();
            return name.includes(filter.toLowerCase());
          })
          .map((movie) => (
            <Grid key={movie.id} item xs={6} sm={4} md={3} lg={2.4}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
    </Grid>
  );
}

export default MovieList;
