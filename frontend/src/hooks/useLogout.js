import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const { user } = useAuthContext();

  const logout = async () => {
    setError(null);
    setLoading(true);

    try {
        fetch('http://localhost:3001/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });

      dispatch({ type: "LOGOUT" });

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

  return { logout, error, loading };
};
