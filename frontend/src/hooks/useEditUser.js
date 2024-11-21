import { useContext, useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useEditUser = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const editUser = async (formData, isDifferentUser) => {
    setIsSubmitting(true);
    setError(null);

    const usuario = {
      idUsuario: formData.userId,
      nomeUsuario: formData.name,
      email: formData.email,
      senha: formData.password,
      telefone: formData.phone,
      turno: formData.shift,
      curso: formData.course,
      ativoFlag: true,
      adminFlag: formData.type,
    };

    try {
      const res = await fetch("http://localhost:8083/admin/editUsuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario }),
      }).then((res) => res.json());

      console.log(res);
      const payload = {
        accessToken: localStorage.getItem("accessToken"),
        user: res,
      };

      if (!isDifferentUser) {
        dispatch({ type: "EDIT_USER", payload: payload });
      }
    } catch (error) {
      setError(error.message);
      console.error("Erro:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, error, editUser };
};

export default useEditUser;
