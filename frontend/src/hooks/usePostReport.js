import {  useState } from "react";
import { useAuthContext } from "./useAuthContext";
import useAddress from "../components/useAddress";

const usePostReport = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { payload } = useAuthContext()
  const { backend } = useAddress()

  

  const postFound = async (formData) => {
    setIsSubmitting(true);
    setError(null);

    // Monta o objeto com os nomes em português
    const itemPerdido = {
      tituloItem: formData.object,
      descricao: formData.details,
      categoria: formData.category,
      cor: formData.color,
      localPerda: formData.place,
      dependencia: formData.dependencie,
      dataPerda: formData.date,
      situacao: "1",
      usuarioPerda: payload.user.id_usuario
    };

    try {
      const response = await fetch(backend + "/admin/reportarPerda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemPerdido }),
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

  return { isSubmitting, error, postFound };
};

export default usePostReport;