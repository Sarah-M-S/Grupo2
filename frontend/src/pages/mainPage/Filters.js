import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useFetchValues from "../../hooks/useFetchValues";
import { useSearchContext } from "../../hooks/useSearchContext";

export default function Filters({ display }) {
  const [formData, setFormData] = useState({
    categoryData: "",
    dateData: "",
    placeData: "",
  });
  const { dispatch } = useSearchContext();
  const { categories, places, colors, dependencies, courses } =
    useFetchValues();
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dispatchFilter = () => {
    if(formData.categoryData !== ""){
      dispatch({category: formData.categoryData, display: display})
    }
    if(formData.dateData !== ""){
      dispatch({date: formData.dateData, display: display})
    }
    if(formData.placeData !== ""){
      dispatch({place: formData.placeData, display: display})
    }
  }

  const handleReset = () => {
    setFormData({
      categoryData: "",
      dateData: "",
      placeData: "",
    });
    dispatch({display: null, category: null, date: null, place: null, search: null})
  };

  useEffect(() => {
    dispatchFilter()
  }, [formData]);

  useEffect(() => {
    setFormData({
      categoryData: "",
      dateData: "",
      placeData: "",
    });
  }, [display]);



  return (
    <div className="w-full h-12 flex flex-row items-center space-x-8">
      {display !== "users" && (
        <div className="w-full flex flex-row items-center justify-between space-x-8">
          <select
            className="rounded-xl h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
            name="categoryData"
            value={formData.categoryData}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              {t("categoria")}
            </option>
            {categories &&
              categories.categorias.map((categoria) => (
                <option
                  key={categoria.id_categoria}
                  value={categoria.id_categoria}
                >
                  {categoria.nome}
                </option>
              ))}
            {!categories && (
              <option value="" disabled hidden>
                {t("categoria")}
              </option>
            )}
          </select>

          <input
            className="rounded-xl h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
            type="date"
            name="dateData"
            value={formData.dateData}
            onChange={handleChange}
          />

          <select
            className="rounded-xl h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
            name="placeData"
            value={formData.placeData}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              {t("local")}
            </option>
            {places &&
              places.locais.map((place) => (
                <option key={place.id_local} value={place.id_local}>
                  {place.titulo}
                </option>
              ))}
            {!places && (
              <option value="" disabled hidden>
                {t("local")}
              </option>
            )}
          </select>

          <button
            className="flex items-center h-[60%] bg-emerald-400 text-emerald-950 font-semibold px-4 rounded-3xl "
            onClick={handleReset}
          >
            <p>{t("redefinir")}</p>
          </button>
        </div>
      )}
    </div>
  );
}
