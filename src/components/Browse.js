
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearchMovie from "./SearchMovie";
import Sidebar from "./Sidebar";

const Browse = () => {
  const open = useSelector((store) => store.sidebar.sidebar);
  const toggle = useSelector((store) => store.movie.toggle);
  const rehydrated = useSelector((state) => state._persist?.rehydrated);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  // useEffect(() => {
  //   if (rehydrated && !user) {
  //     navigate("/");
  //   }
  // }, [user, navigate, rehydrated]);

  if (!rehydrated) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
  <div className="min-h-screen bg-gradient-to-b from-[#141414] to-black font-sans relative custom-scrollbar">
      {/* Sidebar overlay, only when open */}
      {open && (
        <div className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm flex">
          <Sidebar onClose={() => window.dispatchEvent(new CustomEvent('closeSidebar'))} />
          {/* Click outside to close */}
          <div
            className="flex-1 cursor-pointer"
            onClick={() => window.dispatchEvent(new CustomEvent('closeSidebar'))}
          />
        </div>
      )}
      <Header />
      {/* Content */}
      <div className="pt-20 sm:pt-24 px-4 sm:px-8 max-w-[1400px] mx-auto relative">
        <h1 className="text-5xl sm:text-7xl font-extrabold font-bebas text-netflix-red mb-6 sm:mb-8 drop-shadow-lg select-none tracking-widest text-center">
          STREAMER
        </h1>
        {toggle ? (
          <div className="bg-netflix bg-opacity-90 rounded-lg shadow-netflix p-4 sm:p-8 border border-[#333]">
            <SearchMovie />
          </div>
        ) : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
