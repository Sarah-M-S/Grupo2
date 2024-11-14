import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setError(null);
    setLoading(true);
    console.log(url)

    try {
      const response = await fetch("http://localhost:8083" + url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      if (!isCanceled) {
        setData(result);
        setLoading(false);
      }
    } catch (error) {
      if (!isCanceled) {
        setError(error);
        setLoading(false);
      }
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setIsCanceled(false);
    fetchData();
    return () => setIsCanceled(true);
  }, [url]);

  return { loading, data, error };
};

export default useFetchData;