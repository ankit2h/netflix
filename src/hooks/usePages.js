import { useEffect, useState } from "react";
import axios from "axios";

const usePages = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://my-backend-app-245577333791.us-central1.run.app/api/link")
      .then((res) => {
        setPages(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.response?.data?.error || "Failed to fetch pages");
        setPages([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return { pages, loading, error };
};

export default usePages;
