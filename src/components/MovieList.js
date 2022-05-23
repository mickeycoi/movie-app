import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";
import apiService from "../app/apiService";
import GetMovieData from "./GetMovieData";

function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await apiService.get(GetMovieData.ActionMovies);
        setMovies(res.data.results);
        console.log("dataMovie:", res.data.results);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getData();
  }, []);
  return (
    <Grid container spacing={2} mt={1}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={1.5}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieList;
