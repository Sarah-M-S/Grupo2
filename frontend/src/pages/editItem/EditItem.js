import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Success from "../success/Success";
import useFetchValues from "../../hooks/useFetchValues";
import { useTranslation } from "react-i18next";
import useEditItem from "../../hooks/useEditItem";

export default function EditItem() {
  const location = useLocation();
  const { state } = location;
  const selectRef = useRef(null);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idItem: state.item.id_item,
    category: state.item.categoria,
    object: state.item.titulo,
    color: state.item.cor,
    brand: state.item.marca,
    date: formatDate(state.item.data_entrada),
    place: state.item.local_encontro,
    dependencie: state.item.dependencia_encontro,
    details: state.item.descricao,
    situation: state.item.situacao,
  });
  const dependencieRef = useRef(formData.dependencie);
  const { isSubmitting, error, editItem } = useEditItem();
  const { places, colors, categories, dependencies } = useFetchValues(
    formData.place
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log(formData);
    editItem(formData);
    setSent(true);
  };

  const handleCancel = () => {
    navigate("/mainPage");
  };

  const { t } = useTranslation();

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate() + 1).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    if (!state) {
      navigate("/mainPage");
    }
  }, []);

  useEffect(() => {
     if(selectRef.current.value){
        setFormData((prevData) => ({
            ...prevData,
            dependencie: selectRef.current.value,
          }));
     }   
  }, [formData.dependencie, dependencies]);

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
                Editar Achado
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
                value={+formData.place}
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
                ref={selectRef}
                value={+formData.dependencie}
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
                {!dependencies && (
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
