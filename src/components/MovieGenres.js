import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import apiService from "../app/apiService";
import GetMovieData from "./GetMovieData";
import { useNavigate } from "react-router-dom";

export default function MovieGenres() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#FFF" }}
      >
        GENRES
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {genres.map((genre) => (
          <MenuItem
            onClick={() => navigate(`/genre/${genre.id}`)}
            key={genre.id}
          >
            {genre.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
