import { useCallback } from "react";
import axios from "axios";
import { setSearchMovieDetails } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import { options, SEARCH_MOVIE_URL } from "../utils/constant";

const useSearchMovie = ({ searchMovie, setSearchMovie, dispatch }) => {
  return useCallback(
    async (e) => {
      e.preventDefault();
      dispatch(setLoading(true));
      try {
        const res = await axios.get(
          `${SEARCH_MOVIE_URL}${searchMovie}&include_adult=true&language=en-US&page=1`,
          options
        );
        const movies = res?.data?.results;
        dispatch(setSearchMovieDetails({ searchMovie, movies }));
        console.log(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
      setSearchMovie("");
    },
    [searchMovie, setSearchMovie, dispatch]
  );
};

export default useSearchMovie;
