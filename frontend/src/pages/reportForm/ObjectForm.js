import React, { useState } from "react";
import ForwardButton from "./ForwardButton";
import { useTranslation } from "react-i18next";
import useFetchValues from "../../hooks/useFetchValues";
import CancelButton from "./CancelButton";
import { useNavigate } from "react-router-dom";

export default function ObjectForm({ onNext }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: "",
    object: "",
    color: "",
    brand: "",
  });
  const { colors, categories } = useFetchValues(formData.place);
  const [errors, setErrors] = useState({});

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
    // Validate required fields (all except "brand")
    if (!formData.category) newErrors.category = "Categoria é obrigatória.";
    if (!formData.object) newErrors.object = "Objeto é obrigatório.";
    if (!formData.color) newErrors.color = "Cor é obrigatória.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBack = () => {
    setFormData((prevData) => ({
      category: "",
      object: "",
      color: "",
      brand: "",
    }));
    navigate("/mainPage");
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <div className="h-[90%] w-full flex flex-col items-center justify-center space-y-4">
      <div className="flex flex-col max-w-md space-y-12 bg-white rounded-3xl py-12 px-8 md:w-[30%]">
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl text-start font-semibold text-emerald-950 md:text-[220%]">
            {t("objetoDescricao")}
          </h2>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            {t("objetoTextoIdentificacao")}
          </h3>

          <div className="flex flex-col space-y-2">
            <select
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="category"
              value={formData.category}
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
                  Categoria
                </option>
              )}
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm -pt-8">{errors.category}</p>
            )}

            <input
              type="text"
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="object"
              value={formData.object}
              onChange={handleChange}
              required
              placeholder={t("objeto")}
            />
            {errors.object && (
              <p className="text-red-500 text-sm">{errors.object}</p>
            )}

            <select
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="color"
              value={formData.color}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                {t("cor")}
              </option>
              {colors &&
                colors.cor.map((cor) => (
                  <option key={cor.id_cor} value={cor.id_cor}>
                    {cor.nome}
                  </option>
                ))}
              {!colors && (
                <option value="" disabled hidden>
                  Categoria
                </option>
              )}
            </select>
            {errors.color && (
              <p className="text-red-500 text-sm">{errors.color}</p>
            )}

            <input
              type="text"
              name="brand"
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              value={formData.brand}
              onChange={handleChange}
              required
              placeholder={t("marca")}
            />
          </div>
        </div>
      </div>

      <div className="w-[48%] flex flex-row items-center justify-center space-x-4">
        <CancelButton onClick={handleBack} />

        <ForwardButton onClick={handleNext} />
      </div>
    </div>
  );
}
