import {  useState } from "react";

const usePostNewLocal = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);


  const postNewLocal = async (formData) => {
    if(formData.place !== "new"){
        const newFormData = { dependencie:formData.dependencie, place: formData.place}
        console.log(newFormData)
    } else {
        const res = await postPlace(formData.newPlace)
        .then(res => {
            console.log(res.json())
        })
    }
  }

  const postPlace = async (place) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8083/admin/addLocal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo: place }),
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

  const postDependencie = async (formData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8083/admin/addLocal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo: formData.dependencie, local_pai: formData.place }),
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

  return { isSubmitting, error, postNewLocal };
};

export default usePostNewLocal;