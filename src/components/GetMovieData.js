const API_KEY = "8d6f0cb4fe35f27fc39124f100bbb18d";

const GetMovieData = {
  TrendingMovies: `/trending/all/week/api_key=${API_KEY}`,
  ActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=Action`,
  AdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=Adventure`,
  ComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=Comedy`,
  DrammaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=Dramma`,
  FantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=Fantasy`,
  HorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=Horror`,
  RomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=Romance`,
  TVMovies: `/discover/movie?api_key=${API_KEY}&with_genres=TV%20Movie`,
  ImageMovies: `https://image.tmdb.org/t/p/`,
  GenresMenu: `/genre/movie/list?api_key=${API_KEY}`,
};
export default GetMovieData;
