import { useState, useEffect } from "react";
import useAddress from "../components/useAddress";

const useGetReportsByUser = (user_id) => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState(null);
  const { backend } = useAddress()


  const fetchData = async () => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(backend + "/admin/reportesUser/" + user_id);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      if (!isCanceled) {
        setReports(result);
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
  }, [user_id]);

  return { loading, reports, error };
};

export default useGetReportsByUser;