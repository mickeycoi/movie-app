import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DetailPage from "./pages/DetailPage";
import GenresPage from "./pages/GenresPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ModalMoviePage from "./pages/ModalMoviePage";
import ThemeProvider from "./contexts/ThemeProvider";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="movie/:movieId" element={<DetailPage />} />
              <Route path="movie/:movieId/trailer" element={<DetailPage />} />
              <Route path="genre/:genreId" element={<GenresPage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <Routes>
            <Route
              path="/movie/:movieId/trailer"
              element={<ModalMoviePage />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
