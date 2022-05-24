import React, { useEffect, useState } from "react";
import apiService from "../app/apiService";
import GetMovieData from "../components/GetMovieData";
import MovieList from "../components/MovieList";

function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await apiService.get(GetMovieData.DicoverMovies);
        setMovies(res.data.results);
        console.log("dataMovie:", res.data.results);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}

export default HomePage;
