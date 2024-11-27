import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../success/Success";
import useFetchValues from "../../hooks/useFetchValues";
import usePostFound from "../../hooks/usePostFound";
import { useTranslation } from "react-i18next";

export default function AddFoundForm() {
  const [formData, setFormData] = useState({
    category: "",
    object: "",
    color: "",
    brand: "",
    date: "",
    place: "",
    dependencie: "",
    details: "",
  });
  const { places, colors, categories, dependencies } = useFetchValues(
    formData.place
  );
  const { isSubmitting, error, postFound } = usePostFound();

  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    var error = false;
    const today = new Date();
    const inputDate = new Date(formData.date);


    if (formData.category === "") {
      error = true;
      alert("Preencha a categoria");
    } else if (formData.object === "") {
      error = true;
      alert("Preencha o título do objeto");
    } else if (formData.color === "") {
      error = true;
      alert("Preencha a cor do objeto");
    } else if (formData.date === "") {
      error = true;
      alert("Preencha a data");
    } else if (inputDate > today) {
      error = true
      alert("A data não pode ser no futuro.");
    } else if (formData.place === ""){
      error = true
      alert("Preencha o local da perda")
    } else if (formData.dependencie === ""){
      error = true
      alert("Preencha a dependencia da perda")
    }

    if (!error) {
      postFound(formData);
      setSent(true);
    }
  };

  const handleCancel = () => {
    navigate("/mainPage");
  };

  

  const { t } = useTranslation();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        {sent && (
          <Success message={t("objetoAdicionadoSucesso")} route={"/mainPage"} />
        )}

        {!sent && (
          <div className="flex flex-col w-full max-w-md space-y-8 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
            <div>
              <h2 className="text-xl text-center font-semibold text-emerald-500 md:text-[180%]">
                {t("adicionarAchado")}
              </h2>
            </div>

            <div className="flex flex-col space-y-2">
              <select
                className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
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
                    {t("categoria")}
                  </option>
                )}
              </select>

              <input
                type="text"
                className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                name="object"
                value={formData.object}
                onChange={handleChange}
                required
                placeholder={t("objeto")}
              />

              <select
                className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
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
                    {t("categoria")}
                  </option>
                )}
              </select>

              <input
                type="text"
                name="brand"
                className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                value={formData.brand}
                onChange={handleChange}
                required
                placeholder={t("marca")}
              />

              <textarea
                type="text"
                name="details"
                rows="8"
                className="rounded-xl w-full max-h-24 min-h-24 py-2 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                required
                placeholder={t("objetoDetalhes")}
                value={formData.details}
                onChange={handleChange}
              />

              <input
                className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />

              <select
                className="rounded-xl w-full h-8 px-4 bg-emerald-100 text-emerald-950 font-semibold text-lg"
                name="place"
                value={formData.place}
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
                    {t("dependencia")}
                  </option>
                )}
              </select>
            </div>

            <div className="flex flex-row justify-between">
              <button
                onClick={handleCancel}
                className="text-emerald-950 rounded-full py-2 px-2 text-lg font-semibold"
              >
                {t("cancelar")}
              </button>
              <button
                onClick={handleSave}
                className="bg-emerald-950 rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-500"
              >
                {t("salvar")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
