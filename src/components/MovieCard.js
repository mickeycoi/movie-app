import React, { useEffect } from "react";

import Card from "@mui/material/Card";
import { useNavigate, Link, useLocation } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import StarRateIcon from "@mui/icons-material/StarRate";
import GetMovieData from "./GetMovieData";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Card sx={{ maxWidth: 200 }}>
        <Link
          to={`/movie/${movie.id}`}
          state={{ backgroundLocation: location }}
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={GetMovieData.ImageMovies + `/w300/${movie.poster_path}`}
            alt="movie.original_title"
          />

          <CardContent>
            <Typography variant="body1" color="text.secondary" noWrap="true">
              {movie.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" wrap="nowrap">
              {movie.release_date.slice(0, 4)}
            </Typography>
          </CardContent>
        </Link>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" size="small">
            <FavoriteIcon sx={{ color: "#dd3333" }} />
          </IconButton>
          <IconButton aria-label="share" size="small">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="share" size="small">
            <StarRateIcon sx={{ color: "#faaf00" }} />
            {movie.vote_average.toFixed(1)}
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
