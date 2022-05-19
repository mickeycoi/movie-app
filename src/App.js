import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import Pagination from "@mui/material/Pagination";
import FilterMovie from "./components/FilterMoive";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <FilterMovie />
        <MovieCard />
        <Pagination count={10} size="large" />
      </BrowserRouter>
    </>
  );
}
