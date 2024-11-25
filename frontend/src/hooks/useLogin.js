import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import useAddress from "../components/useAddress";

export const useLogin = () => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const { backend } = useAddress()

  const login = async (email, password) => {
    setError(null);
    setLoading(true);

    const login = {
      email: email,
      password: password,
    };

    try {
      const res = await fetch(backend + "/autenticar", {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => res.json())

      dispatch({ type: "LOGIN", payload: res });

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

  return { login, error, loading };
};
