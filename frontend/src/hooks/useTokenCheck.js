import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import useAddress from "../components/useAddress";

export const useTokenCheck = () => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const { backend } = useAddress()


  const checkToken = async () => {
    setError(null);
    setLoading(true);

    const token = localStorage.getItem("accessToken");

    if (!token) {
      console.log("not token:", token);
      dispatch({ type: "AUTH_IS_READY", payload: null });
      return;
    }

    console.log("token:", token);

    try {
      const res = await fetch(backend + "/admin", {
        method: "GET",
        headers: {
          "access-token": localStorage.getItem("token"),
        },
      }).then((res) => res.json());

      dispatch({ type: "AUTH_IS_READY", payload: res });

      if (!isCanceled) {
        setLoading(false);
        setError(null);
      }
    } catch (err) {
      if (!isCanceled) {
        setError(err.message);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    setIsCanceled(false);
    return () => setIsCanceled(true);
  }, []);

  return { checkToken, error, loading };
};
