import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSvgs } from "../redux/sideSlice";
import axios from "axios";

const usePage = (link) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!link) return;
    axios
      .get(`http://localhost:8080/api/v1/ai/link/${link}`)
      .then((res) => {
        dispatch(setSvgs(res.data));
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response?.data?.error || "Failed to fetch SVGs");
      });
  }, [link, dispatch]);
};

export default usePage;
