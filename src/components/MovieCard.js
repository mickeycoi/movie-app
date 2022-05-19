import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const BASE_URL = "https://api.themoviedb.org/3";
const KEY_API = "api_key=8d6f0cb4fe35f27fc39124f100bbb18d";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [movie, setMovie] = React.useState();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/genre/movie/list?${KEY_API}&language=en-US`
        );
        const data = await res.json();
        setMovie(data.genres);
        console.log("data:", data.genres);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getMovie();
    console.log("moive:", movie);
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="../netflix.png"
        alt="img-movie"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          aa
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
