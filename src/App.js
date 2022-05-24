import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import MovieGenres from "./components/MovieGenres";
import MovieList from "./components/MovieList";
import MainFooter from "./layouts/MainFooter";
import MainHeader from "./layouts/MainHeader";
import MainLayout from "./layouts/MainLayout";
import DetailPage from "./pages/DetailPage";
import GenresPage from "./pages/GenresPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movie/:movieId" element={<DetailPage />} />
            <Route path="genre/:genreId" element={<GenresPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
