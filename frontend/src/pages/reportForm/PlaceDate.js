import React, { useState } from "react";

import ForwardButton from "./ForwardButton";
import useFetchValues from "../../hooks/useFetchValues";

import { useTranslation } from "react-i18next";

export default function PlaceDate({ onNext }) {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    date: "",
    place: "",
    dependencie: "",
  });
  const { places, dependencies } = useFetchValues(formData.place);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { t } = useTranslation();
  const validateForm = () => {
    const newErrors = {};
    const today = new Date();
    const inputDate = new Date(formData.date);

    // Verifica se a data está presente
    if (!formData.date) {
      newErrors.date = "Data é obrigatória.";
    } else {
      // Verifica se a data não é no futuro
      if (inputDate > today) {
        newErrors.date = "A data não pode ser no futuro.";
      }

      // Verifica se a data está dentro dos últimos 30 dias
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(today.getDate() - 30);
      if (inputDate < thirtyDaysAgo) {
        newErrors.date = "A data deve ser dentro dos últimos 30 dias.";
      }
    }

    if (!formData.place) newErrors.place = "Bloco é obrigatório.";
    if (!formData.dependencie)
      newErrors.dependencie = "Dependência é obrigatória.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <div className="h-[90%] w-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
        <div className="flex flex-col space-y-8">
          <h2 className="text-3xl text-start font-semibold text-emerald-950 md:text-[220%]">
            {t("localData")}
          </h2>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            {t("dataPerda")}
          </h3>

          <div className="flex flex-col space-y-4">
            <input
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date}</p>
            )}

            <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
              {t("localPerda")}
            </h3>
            <select
              className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="place"
              value={formData.place}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
              {t("bloco")}
              </option>
              {places &&
                places.locais.map((place) => (
                  <option key={place.id_local} value={place.id_local}>
                    {place.titulo}
                  </option>
                ))}
              {!places && (
                <option value="" disabled hidden>
                  Local
                </option>
              )}
            </select>
            {errors.place && (
              <p className="text-red-500 text-sm">{errors.place}</p>
            )}

            <select
              className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="dependencie"
              value={formData.dependencie}
              onChange={handleChange}
              disabled={!dependencies}
            >
              <option value="" disabled hidden>
              {t("dependencia")}
              </option>
              {dependencies &&
                dependencies.dependencias.map((dependencia) => (
                  <option
                    key={dependencia.id_dependencia}
                    value={dependencia.id_dependencia}
                  >
                    {dependencia.titulo}
                  </option>
                ))}
              {!places && (
                <option value="" disabled hidden>
                  Dependência
                </option>
              )}
            </select>
            {errors.dependencie && (
              <p className="text-red-500 text-sm">{errors.dependencie}</p>
            )}
          </div>
        </div>
      </div>

      <ForwardButton onClick={handleNext} />
    </div>
  );
}
