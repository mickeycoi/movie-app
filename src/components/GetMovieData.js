const API_KEY = "8d6f0cb4fe35f27fc39124f100bbb18d";

const GetMovieData = {
  TrendingMovies: `/trending/all/week?api_key=${API_KEY}`,
  DicoverMovies: `/discover/movie?api_key=${API_KEY}`,
  ImageMovies: `https://image.tmdb.org/t/p/`,
  GenresMenu: `/genre/movie/list?api_key=${API_KEY}`,
};
export default GetMovieData;
