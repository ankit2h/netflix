import React from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSidebar } from "../redux/sideSlice";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { setToggle } from "../redux/movieSlice";

const Header = ({ hideUserControls = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Use optional chaining and fallback to avoid undefined errors
  const user = useSelector((store) => store.app?.user || null);
  const name = useSelector((store) => store.app?.user?.fullName || "");

  const toggle = useSelector((store) => store.movie?.toggle);
  const toggleHandler = () => {
    dispatch(setToggle());
  };
  const logoutHandler = useLogout();
  return (
    <div className="fixed z-20 flex w-full items-center justify-between px-4 sm:px-8 py-2 sm:py-3 min-h-[80px] sm:min-h-[96px] bg-gradient-to-b from-black/90 to-transparent shadow-lg">
      {/* Hamburger button for mobile */}
      <button
        className="flex items-center justify-center mr-2 sm:mr-4 text-[#e50914]"
        onClick={() => dispatch(setSidebar(true))}
        aria-label="Open sidebar"
        style={{ fontSize: 0 }}
      >
        {/* SVG Hamburger Icon (no circle) */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      {/* Netflix logo centered for mobile, left for desktop */}
      <div className="flex-1 flex justify-center sm:justify-start"></div>
      {/* User controls right-aligned */}
      {!hideUserControls && user && (
        <div className="ml-auto flex items-center gap-2 sm:gap-4 p-1 sm:p-2">
          <IoIosArrowDropdownCircle
            size="24px"
            color="#e50914"
            className="drop-shadow hidden sm:inline-block"
          />
          <h1 className="text-sm sm:text-xl font-bebas text-white tracking-wider uppercase select-none max-w-[110px] sm:max-w-none truncate">
            {name || "Learnest"}
          </h1>
          <div className="ml-2 sm:ml-4 flex flex-row gap-2 items-center">
            <button
              onClick={logoutHandler}
              className="bg-[#e50914] hover:bg-[#b0060f] text-white px-2 sm:px-5 py-1 sm:py-2 rounded font-semibold shadow transition-colors duration-200 text-xs sm:text-base"
            >
              Logout
            </button>
            <button
              className="bg-[#e50914] hover:bg-[#b0060f] text-white px-2 sm:px-5 py-1 sm:py-2 rounded font-semibold shadow transition-colors duration-200 text-xs sm:text-base"
              onClick={toggleHandler}
            >
              {toggle ? "Home" : "Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
