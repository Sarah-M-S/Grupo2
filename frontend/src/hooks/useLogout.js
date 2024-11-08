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

    dispatch({ type: "LOGOUT" });
    
  };

  useEffect(() => {
    setIsCanceled(false);
    return () => setIsCanceled(true);
  }, []);

  return { logout, error, loading };
};
