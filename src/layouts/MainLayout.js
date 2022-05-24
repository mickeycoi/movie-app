import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import Container from "@mui/material/Container";

function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />
      <Container>
        <Outlet />
      </Container>
      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
