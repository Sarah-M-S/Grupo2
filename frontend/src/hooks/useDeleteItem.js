import { useState, useEffect } from "react";
import useAddress from "../components/useAddress";

const useDeleteItem = () => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const { backend } = useAddress()


  const deleteItem = async (id_item) => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(backend + "/admin/delete/item/" + id_item);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      if (!isCanceled) {
        setResult(result);
        setLoading(false);
      }
    } catch (error) {
      if (!isCanceled) {
        setError(error);
        setLoading(false);
      }
      console.error("Error fetching data:", error);
    }
  };

  // useEffect(() => {
  //   setIsCanceled(false);
  //   deleteItem();
  //   return () => setIsCanceled(true);
  // }, [id_item]);

  return { loading, result, error, deleteItem };
};

export default useDeleteItem;