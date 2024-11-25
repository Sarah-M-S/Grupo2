import {  useState } from "react";
import useAddress from "../components/useAddress";

const useReturnItem = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { backend } = useAddress()


  const returnItem = async (devolucao) => {
    setIsSubmitting(true);
    setError(null);


    try {
      const response = await fetch(backend + "/admin/devolverItem/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ devolucao }),
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

  return { isSubmitting, error, returnItem };
};

export default useReturnItem;