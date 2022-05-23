import React, { useEffect } from "react";

import Card from "@mui/material/Card";

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
  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="auto"
          image={GetMovieData.ImageMovies + `/w300/${movie.poster_path}`}
          alt="movie.original_title"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {movie.original_title}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="share">
            <StarRateIcon />
            {movie.vote_average}
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
