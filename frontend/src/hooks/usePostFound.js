import {  useState } from "react";
import { useAuthContext } from "./useAuthContext";
import useAddress from "../components/useAddress";

const usePostFound = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { payload } = useAuthContext()
  const { backend } = useAddress()


  const postFound = async (formData) => {
    setIsSubmitting(true);
    setError(null);

    // Monta o objeto com os nomes em português
    const achado = {
      tituloItem: formData.object,
      descricao: formData.details,
      marca: formData.brand,
      categoria: formData.category,
      cor: formData.color,
      localEncontro: formData.place,
      dependencia: formData.dependencie,
      dataEntrada: formData.date,
      usuarioCadastrante: payload.user.id_usuario
    };

    try {
      const response = await fetch(backend + "/admin/adicionarAchado", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ achado }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o formulário");
      }

      const data = await response.json();
      // console.log("Sucesso:", data);
    } catch (error) {
      setError(error.message);
      // console.error("Erro:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, error, postFound };
};

export default usePostFound;