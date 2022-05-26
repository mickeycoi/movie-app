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
  let [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const API_KEY = "8d6f0cb4fe35f27fc39124f100bbb18d";

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(
          GetMovieData.SearchMovie + `&query=${searchParams.get("keymovie")}}`
        );
        console.log("searchMovie:", res.data);
        setMovies(res.data.results);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getData();
  }, []);

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
                  <Typography variant="h4"> Search Movie</Typography>
                  <Grid container spacing={2} mt={1}>
                    {movies &&
                      movies
                        .filter((movie) => {
                          let keymovie = searchParams.get("keymovie");
                          if (!keymovie) return true;
                          let name = movie.title.toLowerCase();
                          return name.includes(keymovie.toLowerCase());
                        })
                        .map((movie) => (
                          <Grid
                            key={movie.id}
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            lg={2.4}
                          >
                            <MovieCard movie={movie} />
                          </Grid>
                        ))}
                  </Grid>
                  <PaginationMovie
                    page={pages}
                    setPage={setPages}
                    total={100}
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
