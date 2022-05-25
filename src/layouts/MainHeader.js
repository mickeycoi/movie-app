import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Logo from "../components/Logo";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import MovieGenres from "../components/MovieGenres";
import MovieSearch from "../components/MovieSearch";
import { FormProvider } from "../components/form";
import { useForm } from "react-hook-form";
import Darkmode from "../components/Darkmode";

function MainHeader() {
  let navigate = useNavigate();
  const defaultValues = { searchQuery: "" };
  const methods = useForm({
    defaultValues,
  });
  const { watch, reset } = methods;

  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
          <MovieGenres />
          <Box sx={{ flexGrow: 1 }} />
          <FormProvider methods={methods}>
            <MovieSearch />
          </FormProvider>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
