import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { FTextField } from "./form";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    // vertical padding + font size from searchIcon

    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

function MovieSearch() {
  let [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  let location = useLocation();

  const { handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <Search>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Button
            type="submit"
            size="small"
            sx={{
              color: "white",
            }}
            component={Link}
            to={`/search?keymovie=${searchParams.get("keymovie")}`}
            disabled={searchParams.get("keymovie") ? false : true}
            startIcon={<SearchIcon />}
          />

          <StyledInputBase
            placeholder="Search a movie…"
            value={searchParams.get("keymovie") || ""}
            onChange={(event) => {
              let keymovie = event.target.value;

              if (keymovie) {
                setSearchParams({ keymovie });
              } else {
                setSearchParams({});
              }
            }}
          />
        </form>
      </Search>
    </>
  );
}

export default MovieSearch;
