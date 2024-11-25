import {  useState } from "react";
import { useAuthContext } from "./useAuthContext";
import ChangePassword from "../pages/changePassword/ChangePassword";
import useAddress from "../components/useAddress";

const useChangePassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { payload } = useAuthContext()
  const { backend } = useAddress()

  const changePassword = async (usuario) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(backend + "/editSenha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o formulário");
      }

      const data = await response.json();
      console.log("Sucesso:", data);
    } catch (error) {
      setError(error.message);
      console.error("Erro:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, error, changePassword };
};

export default useChangePassword;