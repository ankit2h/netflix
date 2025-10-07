import axios from "axios";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "../redux/movieSlice";
import { Popular_Movie, options } from "../utils/constant";

const usePopularMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = axios.get(Popular_Movie, options);
    dispatch(getPopularMovies((await res).data.results));
  } catch (error) {
    console.log(error);
  }
};

export default usePopularMovies;
