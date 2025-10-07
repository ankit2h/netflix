import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useCallback(async () => {
    try {
      const res = await axios.get("https://my-backend-app-245577333791.us-central1.run.app/api/v1/user/logout");
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, navigate]);
};

export default useLogout;
