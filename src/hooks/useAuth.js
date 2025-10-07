import { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { setLoading, setUser } from "../redux/userSlice";

const useAuth = ({
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
}) => {
  return useCallback(
    async (e) => {
      e.preventDefault();
      dispatch(setLoading(true));
      if (isLogin) {
        const user = { email, password };
        try {
          const res = await axios.post("https://my-backend-app-245577333791.us-central1.run.app/api/v1/user/login", user, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          });
          if (res.data.success) {
            toast.success(res.data.message);
          }
          dispatch(setUser(res.data.user));
          navigate("/browse");
        } catch (error) {
          toast.error(error?.response?.data?.message || "Login failed");
        } finally {
          dispatch(setLoading(false));
        }
      } else {
        dispatch(setLoading(true));
        const user = { fullName, email, password };
        try {
          const res = await axios.post("https://my-backend-app-245577333791.us-central1.run.app/api/v1/user/register", user, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          });
          if (res.data.success) {
            toast.success(res.data.message);
          }
          setIsLogin(true);
        } catch (error) {
          toast.error(error?.response?.data?.message || "Signup failed");
        } finally {
          dispatch(setLoading(false));
        }
      }

      setFullName("");
      setEmail("");
      setPassword("");
    },
  [isLogin, setIsLogin, fullName, setFullName, email, setEmail, password, setPassword, dispatch, navigate]
  );
};

export default useAuth;
