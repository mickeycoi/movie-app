import React, { useEffect, useState } from "react";
import apiService from "../app/apiService";
import GetMovieData from "../components/GetMovieData";
import MovieList from "../components/MovieList";
import PaginationMovie from "../components/PaginationMovie";
import { Box, Grid, Pagination, Alert } from "@mui/material";
import LoadingScreen from "../components/LoadingScreen";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(
          GetMovieData.DicoverMovies + `&page=${pages}`
        );
        setMovies(res.data.results);
        setError("");
      } catch (error) {
        console.log("error:", error);
        setError(error.message);
      }
      setLoading(false);
    };
    getData();
  }, [pages]);
  const limit = 20;
  const pageCount = Math.ceil(movies.length / limit);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {" "}
          {error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <>
              {movies && (
                <>
                  <MovieList movies={movies} />
                  <PaginationMovie page={pages} setPage={setPages} />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default HomePage;
