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

function GenresPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(1);
  const [genres, setGenres] = useState([]);

  const params = useParams();
  console.log("paramsGenres", params);
  const API_KEY = "8d6f0cb4fe35f27fc39124f100bbb18d";

  useEffect(() => {
    if (params.genreId) {
      const getData = async () => {
        setLoading(true);
        try {
          const res = await apiService.get(
            GetMovieData.DicoverMovies +
              `&with_genres=${params.genreId}&page=${pages}`
          );
          const resGen = await apiService.get(GetMovieData.GenresMenu);
          setGenres(resGen.data.genres);
          console.log(
            "genreslMovie:",
            resGen.data.genres.filter((item) => item.id === params.genreId)
          );
          setMovies(res.data.results);
          setError("");
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
        setLoading(false);
      };
      getData();
    }
  }, [params, pages]);

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
                  <Typography variant="h4"> Genres Movie</Typography>
                  <Grid container spacing={2} mt={1}>
                    {movies &&
                      movies.map((movie) => (
                        <>
                          <Grid
                            key={movie.id}
                            item
                            xs={6}
                            sm={4}
                            md={3}
                            lg={2.4}
                          >
                            <MovieCard movie={movie} />
                          </Grid>
                        </>
                      ))}
                  </Grid>
                  <PaginationMovie page={pages} setPage={setPages} />
                </Box>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default GenresPage;
