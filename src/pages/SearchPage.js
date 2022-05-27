import { Grid, Typography, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../app/apiService";
import GetMovieData from "../components/GetMovieData";
import MovieCard from "../components/MovieCard";
import MovieList from "../components/MovieList";
import PaginationMovie from "../components/PaginationMovie";
import LoadingScreen from "../components/LoadingScreen";
import { Alert } from "@mui/material";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(1);
  let [searchParams, setSearchParams] = useSearchParams("");
  const params = useParams();
  const API_KEY = "8d6f0cb4fe35f27fc39124f100bbb18d";

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(
          GetMovieData.SearchMovie +
            `&page=${pages}&query=${searchParams.get("keymovie")}`
        );

        setMovies(res.data);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getData();
  }, [searchParams.get("keymovie"), pages]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <>
              {movies && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h5">
                    {" "}
                    Search Movie with key: {searchParams.get("keymovie")}
                  </Typography>
                  <MovieList movies={movies.results} />
                  <PaginationMovie
                    page={pages}
                    setPage={setPages}
                    count={movies.total_pages}
                  />
                </Box>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default SearchPage;
