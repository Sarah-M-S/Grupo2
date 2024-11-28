import { useState, useEffect } from "react";
import useAddress from "../components/useAddress";

const useFetchValues = (id_local) => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);
  const [places, setPlaces] = useState(null);
  const [dependencies, setDependencies] = useState(null);
  const [colors, setColors] = useState(null);
  const [courses, setCourses] = useState(null);
  const backend = "https://ichei-app.com/api"

  console.log("endereço: ",backend)

  const fetchData = async () => {
    setError(null);
    setLoading(true);

    try {
      await fetchCategories();
      await fetchColors();
      await fetchPlaces();
      await fetchCourses();
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
      console.log(backend + "/list/item/categorias")
      const response = await fetch(
        backend + "/list/item/categorias"
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
      const response = await fetch(backend + "/list/locais");
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
      const response = await fetch(backend + "/list/item/cores");
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
        backend + "/list/locais/dependencias/" + id_local
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

  const fetchCourses = async () => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        backend + "/list/cursos"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      if (!isCanceled) {
        setCourses(result);
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
    console.log(backend)
    return () => setIsCanceled(true);
  }, [id_local]);

  return { loading, error, categories, places, colors, dependencies, courses };
};

export default useFetchValues;
