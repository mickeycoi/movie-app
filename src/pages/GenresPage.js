import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../app/apiService";
import GetMovieData from "../components/GetMovieData";
import MovieCard from "../components/MovieCard";
import MovieList from "../components/MovieList";

function GenresPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const params = useParams();
  console.log("paramsGenres", params);
  const API_KEY = "8d6f0cb4fe35f27fc39124f100bbb18d";

  useEffect(() => {
    if (params.genreId) {
      const getData = async () => {
        setLoading(true);
        try {
          const res = await apiService.get(
            GetMovieData.DicoverMovies + `&with_genres=${params.genreId}`
          );
          console.log("genreslMovie:", res.data);
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
  }, [params]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const getGenres = async () => {
      try {
        const res = await apiService.get(GetMovieData.GenresMenu);
        setGenres(res.data.genres);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getGenres();
  }, []);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h4">
        {genres.forEach((item) =>
          item.id === params.genreId ? `${item.name}` : "hix"
        )}
      </Typography>
      <Grid container spacing={2} mt={1}>
        {movies &&
          movies.map((movie) => (
            <>
              <Grid key={movie.id} item xs={12} sm={6} md={3} lg={2.4}>
                <MovieCard movie={movie} />
              </Grid>
            </>
          ))}
      </Grid>
    </Box>
  );
}

export default GenresPage;
