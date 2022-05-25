import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DetailPage from "./pages/DetailPage";
import GenresPage from "./pages/GenresPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ModalMoviePage from "./pages/ModalMoviePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movie/:movieId" element={<DetailPage />} />
            <Route path="genre/:genreId" element={<GenresPage />} />
            <Route path="search/:query" element={<GenresPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/movie/:movieId" element={<ModalMoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
