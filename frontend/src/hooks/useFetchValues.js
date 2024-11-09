import { useState, useEffect } from "react";

const useFetchValues = (id_local) => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);
  const [places, setPlaces] = useState(null);
  const [dependencies, setDependencies] = useState(null);
  const [colors, setColors] = useState(null);

  const fetchData = async () => {
    setError(null);
    setLoading(true);

    try {
      await fetchCategories();
      await fetchColors();
      await fetchPlaces();
      if (id_local) {
        await fetchDependencies();
      }

      if (!isCanceled) {
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

  const fetchCategories = async () => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8083/list/item/categorias"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      if (!isCanceled) {
        setCategories(result);
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

  const fetchPlaces = async () => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8083/list/locais");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      if (!isCanceled) {
        setPlaces(result);
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

  const fetchColors = async () => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8083/list/item/cores");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      if (!isCanceled) {
        setColors(result);
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

  const fetchDependencies = async () => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8083/list/locais/dependencias/" + id_local
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      if (!isCanceled) {
        setDependencies(result);
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

  useEffect(() => {
    setIsCanceled(false);
    fetchData();
    return () => setIsCanceled(true);
  }, [id_local]);

  return { loading, error, categories, places, colors, dependencies };
};

export default useFetchValues;
