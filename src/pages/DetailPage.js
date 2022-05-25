import React, { useEffect, useState } from "react";
import {
  Link as RouterLink,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
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
  Chip,
  Button,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import LoadingScreen from "../components/LoadingScreen";
import MovieCard from "../components/MovieCard";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

function DetailPage() {
  const [movie, setMovie] = useState([]);
  const [recMovie, setRecMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
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
          const resRec = await apiService.get(
            `/movie/${params.movieId}/recommendations?api_key=${API_KEY}`
          );

          setMovie(res.data);
          setRecMovie(resRec.data.results);
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
                  <>
                    <Box sx={{ display: "flex" }}>
                      <Box maxWidth={350} minWidth={200}>
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
                          <Rating
                            name="half-rating-read"
                            defaultValue={movie.vote_average / 2}
                            precision={0.5}
                            readOnly
                          />
                          <Typography variant="body1">
                            {movie.overview}
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              mb: 1,
                            }}
                          >
                            Genres:
                            {movie.genres.map((item) => (
                              <Stack direction="row" spacing={1} key={item.id}>
                                <RouterLink
                                  to={`/genre/${item.id}`}
                                  state={{ backgroundLocation: location }}
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  <Chip
                                    label={item.name}
                                    variant="outlined"
                                    size="small"
                                  />
                                </RouterLink>
                              </Stack>
                            ))}
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              mb: 1,
                            }}
                          >
                            Release :{" "}
                            <Chip
                              label={movie.release_date}
                              variant="outlined"
                              size="small"
                            />
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              mb: 1,
                            }}
                          >
                            Country :
                            {movie.production_countries.map((item) => (
                              <Stack direction="row" spacing={1} key={item.id}>
                                <Chip
                                  label={item.name}
                                  variant="outlined"
                                  size="small"
                                />
                              </Stack>
                            ))}
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              mb: 1,
                            }}
                          >
                            Production:
                            {movie.production_companies.map((item) => (
                              <Stack direction="row" spacing={1} key={item.id}>
                                <Chip
                                  label={item.name}
                                  variant="outlined"
                                  size="small"
                                />
                              </Stack>
                            ))}
                          </Typography>
                          <RouterLink
                            to={`/movie/${params.movieId}`}
                            state={{ backgroundLocation: location }}
                            style={{
                              textDecoration: "none",
                            }}
                          >
                            <Button
                              variant="contained"
                              startIcon={<PlayCircleFilledWhiteIcon />}
                            >
                              Trailer
                            </Button>
                          </RouterLink>
                        </CardContent>
                      </Box>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body1">You may aslo like</Typography>
                      <Divider />
                      <Grid container spacing={2} mt={1} wrap="nowrap">
                        {recMovie.slice(0, 3).map((movie) => (
                          <>
                            <Grid key={movie.id} item>
                              <MovieCard movie={movie} />
                            </Grid>
                          </>
                        ))}
                      </Grid>
                    </Box>
                  </>
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
