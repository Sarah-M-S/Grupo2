import React, { useState } from "react";
import ForwardButton from "./ForwardButton";
import useFetchValues from "../../hooks/useFetchValues";

export default function ObjectForm({ onNext }) {
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

  const validateForm = () => {
    const newErrors = {};
    // Validate required fields (all except "brand")
    if (!formData.category) newErrors.category = "Categoria é obrigatória.";
    if (!formData.object) newErrors.object = "Objeto é obrigatório.";
    if (!formData.color) newErrors.color = "Cor é obrigatória.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
            Como é o objeto?
          </h2>
          <h3 className="text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
            Quanto mais detalhes você der, mais fácil será de identificar o
            objeto e devolvê-lo para você.
          </h3>

          <div className="flex flex-col space-y-4">
            <select
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                Categoria
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
            {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}

            <input
              type="text"
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="object"
              value={formData.object}
              onChange={handleChange}
              required
              placeholder="Objeto"
            />
            {errors.object && <p className="text-red-500 text-sm">{errors.object}</p>}

            <select
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              name="color"
              value={formData.color}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Cor
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
            {errors.color && <p className="text-red-500 text-sm">{errors.color}</p>}

            <input
              type="text"
              name="brand"
              className="rounded-xl w-full h-12 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Marca"
            />
          </div>
        </div>
      </div>
      <ForwardButton onClick={handleNext} />
    </div>
  );
}
