import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { FTextField } from "./form";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useSearchParams } from "react-router-dom";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";

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
function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <Link to={to + location.search} {...props} />;
}

function MovieSearch() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Search>
        <Button
          size="small"
          sx={{
            color: "white",
          }}
          component={Link}
          to={`/search?keymovie=${searchParams}`}
          disabled={searchParams.get("keymovie") ? false : true}
        >
          <SearchIcon />
        </Button>
        <StyledInputBase
          placeholder="Search a movie…"
          value={searchParams.get("keymovie") || ""}
          onChange={(event) => {
            let keymovie = event.target.value;
            console.log("change", event.target.value);

            if (keymovie) {
              setSearchParams({ keymovie });
              console.log("searchpr", searchParams.get("keymovie"));
            } else {
              setSearchParams({});
            }
          }}
        />
      </Search>
    </>
  );
}

export default MovieSearch;
