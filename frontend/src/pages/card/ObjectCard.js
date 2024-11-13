import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useFetchValues from "../../hooks/useFetchValues";

export default function ObjectCard({ object, isFound }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { places, categories, dependencies } = useFetchValues(
    isFound ? object.item.local_encontro : object.item.local_perda
  );

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Primeiro card (expandido por padrão) */}
      <div
        className={`w-full p-4 bg-white rounded-3xl shadow-md transition-all duration-100 ${
          isExpanded ? "h-24" : "h-16"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{object.item.titulo}</h2>
          <button onClick={toggleCard} className="text-emerald-500">
            {isExpanded ? "Menos" : "Detalhes"}
          </button>
        </div>
        {isExpanded && (
          <div className="flex flex-col space-y-2">
            <div className="mt-4 flex flex-row space-x-4">
              <h2>
                <b>Categoria: </b>
                {categories
                  ? categories.categorias.find(
                      (categoria) =>
                        categoria.id_categoria === +object.item.categoria
                    ).nome
                  : ""}
              </h2>
              {isFound && (
                <div className="inline-flex">
                  <p>
                    <b>{t("local")}: </b>
                    {places
                      ? places.locais.find(
                          (place) =>
                            place.id_local === +object.item.local_encontro
                        ).titulo
                      : ""}
                  </p>
                  <p>-</p>
                  <p>
                    {object.item.dependencia_encontro
                      ? dependencies.dependencias.find(
                          (dependencie) =>
                            dependencie.id_dependencia ===
                            +object.item.dependencia_encontro
                        ).titulo
                      : ""}
                  </p>
                </div>
              )}

              {!isFound && (
                <div className="inline-flex">
                  <p>
                    <b>{t("local")}: </b>
                    {places
                      ? places.locais.find(
                          (place) =>
                            place.id_local === +object.item.local_perda
                        ).titulo
                      : ""}
                  </p>
                  <p>-</p>
                  <p>
                    {object.item.dependencia_perda
                      ? dependencies.dependencias.find(
                          (dependencie) =>
                            dependencie.id_dependencia ===
                            +object.item.dependencia_perda
                        ).titulo
                      : ""}
                  </p>
                </div>
              )}

              <p>
                <b>{t("dataEncontro")}: </b>
                {formatDate(object.item.data_entrada)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
