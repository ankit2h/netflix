import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import "@fontsource/bebas-neue";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const isLoading = useSelector((store) => store.app?.isLoading || false); // adjust if needed
  const loginHandler = () => {
    setIsLogin(!isLogin);
  };
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getInputData = useAuth({
    isLogin,
    setIsLogin,
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    dispatch,
    navigate,
  });

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <img
        src="https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?width=1080&crop=smart&auto=webp&s=5ec8b5f14222e27eecd19b9f5428793bcc857b58"
        alt="banner"
        className="fixed inset-0 w-full h-full object-cover z-0"
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 to-black/90 z-10" />
      <div className="fixed inset-0 flex items-center justify-center z-20">
        <form
          onSubmit={getInputData}
          className="flex flex-col w-full max-w-md p-10 sm:p-12 rounded-md bg-black/80 shadow-netflix"
        >
        <h1 className="text-4xl font-extrabold font-bebas text-netflix-red mb-8 drop-shadow-lg select-none tracking-widest text-center">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col w-full">
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="outline-none p-3 my-2 rounded bg-[#181818] text-white border border-[#333] focus:border-[#e50914] transition"
              autoComplete="name"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            className="outline-none p-3 my-2 rounded bg-[#181818] text-white border border-[#333] focus:border-[#e50914] transition"
            autoComplete="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="outline-none p-3 my-2 rounded bg-[#181818] text-white border border-[#333] focus:border-[#e50914] transition"
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="bg-[#e50914] hover:bg-[#b0060f] mt-6 p-3 text-white rounded font-bold text-lg shadow-netflix transition-colors duration-200"
          >
            {`${isLoading ? "loading..." : isLogin ? "Login" : "Signup"}`}
          </button>
          <p className="text-white mt-4 text-center">
            {isLogin ? "New to Netflix?" : "Already have an account?"}
            <span
              className="ml-1 text-[#e50914] font-semibold cursor-pointer hover:underline"
              onClick={loginHandler}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
