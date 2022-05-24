import React, { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import apiService from "../app/apiService";
import GetMovieData from "../components/GetMovieData";
import {
  Card,
  Grid,
  Container,
  Typography,
  Box,
  Stack,
  Rating,
  Divider,
  Breadcrumbs,
  Link,
  Alert,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import LoadingScreen from "../components/LoadingScreen";

function DetailPage() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const params = useParams();
  console.log("params", params);
  const API_KEY = "8d6f0cb4fe35f27fc39124f100bbb18d";

  useEffect(() => {
    if (params.movieId) {
      const getData = async () => {
        setLoading(true);
        try {
          const res = await apiService.get(
            `/movie/${params.movieId}?api_key=${API_KEY}`
          );
          console.log("detailMovie:", res.data);
          setMovie(res.data);
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

  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Container>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <>
                {movie && (
                  <Box sx={{ display: "flex" }}>
                    <Box maxWidth={400}>
                      <CardMedia
                        sx={{ borderRadius: 2 }}
                        component="img"
                        height="auto"
                        image={
                          GetMovieData.ImageMovies +
                          `/w500/${movie.poster_path}`
                        }
                        alt={movie.original_title}
                      />
                    </Box>
                    <Box>
                      <CardContent>
                        <Typography variant="h3">
                          {movie.original_title}
                        </Typography>
                        <Typography variant="body1">
                          {movie.overview}
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                          Genres :
                          {movie.genres.map((item) => (
                            <div>{item.name}</div>
                          ))}
                        </Typography>
                        <Typography>Release : {movie.release_date}</Typography>
                        <Typography sx={{ display: "flex" }}>
                          Country :
                          {movie.production_countries.map((item) => (
                            <div>{item.name}</div>
                          ))}
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                          Production:
                          {movie.production_companies.map((item) => (
                            <div>{item.name}</div>
                          ))}
                        </Typography>
                      </CardContent>
                    </Box>
                  </Box>
                )}
              </>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}

export default DetailPage;
