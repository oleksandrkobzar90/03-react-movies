import axios from "axios";
import type { Movie } from "../types/movie.ts";

interface MovieHttResponse {
  results: Movie[];
}

const myToken = import.meta.env.VITE_TMDB_TOKEN;

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  include_adult: false,
  language: "en-US",
  page: 1,
};

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<MovieHttResponse>("/search/movie", {
    params: { query: String(query) },
    headers: { Authorization: `Bearer ${myToken}` },
  });
  return response.data.results;
};
