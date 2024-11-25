import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import useAddress from "../components/useAddress";

const useEditItem = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { payload } = useAuthContext();
  const { backend } = useAddress()


  const editItem = async (formData) => {
    setIsSubmitting(true);
    setError(null);

    const item = {
      idItem: formData.idItem,
      titulo: formData.object,
      descricao: formData.details,
      marca: formData.brand,
      categoria: formData.category,
      cor: formData.color,
      localEncontro: formData.place,
      dependenciaEncontro: formData.dependencie,
      dataEntrada: formData.date,
      situacao: formData.situation,
      usuarioCadastrante: payload.user.id_usuario,
    };

    try {
      const response = await fetch(
        backend +
        "/admin/editItem",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ item }),
        }
      );

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

  return { isSubmitting, error, editItem };
};

export default useEditItem;
