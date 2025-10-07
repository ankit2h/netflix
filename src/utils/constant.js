export const API_END_POINT = "http://localhost:8080/api/v1/user";

export const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGM3ZTg1ZmNiMjg0YTNkYWUwNjczNmM1ZjZiY2FmZSIsIm5iZiI6MTc1MjgxNzgwMy41NTIsInN1YiI6IjY4NzllMDhiMjQyOWQ3NDI5M2Q5ODE1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bKIAbqCdw2As7J3NtIdo0sRxB8CTwaWIvIrLRDEGCQA'
  }
};

export const Now_Playing_Movies = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movies = "https://api.themoviedb.org/3/movie/upcoming";

export const TMDB_Poster = "https://image.tmdb.org/t/p/w500";
export const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie?query=';
