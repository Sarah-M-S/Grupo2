import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useFetchValues from "../../hooks/useFetchValues";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import useFetchData from "../../hooks/useFetchData";

export default function ObjectCard({ object, panel }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const { places, categories, dependencies } = useFetchValues(
    panel === "found" || panel === "returned"
      ? object.item.local_encontro
      : object.item.local_perda
  );
  const { payload } = useAuthContext();
  const [url, setUrl] = useState("/admin/list/usuarios");
  const { loading, data } = useFetchData(url);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate() + 1).padStart(2, "0");
    return `${day}-${month}-${year}`;
  }

  const handleEdit = () => {
    navigate("/editItem", { state: object });
  };

  const handleReturn = () => {
    navigate("/return", { state: object });
  };

  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center space-y-4">
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
            <div className="mt-4 flex flex-row space-x-4 justify-between">
              <div className="flex flex-row space-x-4">
                <h2>
                  <b>Categoria: </b>
                  {categories
                    ? categories.categorias.find(
                        (categoria) =>
                          categoria.id_categoria === +object.item.categoria
                      ).nome
                    : ""}
                </h2>
                {panel === "found" ||
                  (panel === "returned" && (
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
                  ))}

                {panel === "reports" && (
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
                  {panel === "found" && (
                    <div className="flex flex-row space-x-2">
                      <b>{t("dataEncontro")}: </b>
                      <p>{formatDate(object.item.data_entrada)}</p>
                    </div>
                  )}

                  {panel === "reports" && (
                    <div className="flex flex-row space-x-2">
                      <b>Data Perda: </b>
                      <p>{formatDate(object.item.data_perda)}</p>
                    </div>
                  )}

                  {panel === "returned" && (
                    <div className="flex flex-row space-x-2">
                      <b>Data Devolução: </b>
                      <p>{formatDate(object.item.data_devolucao)}</p>
                    </div>
                  )}
                </p>

                {panel === "returned" && (
                  <div className="flex flex-row space-x-2">
                    <b>Usuario Resgatante: </b>
                    <p>{data
                          ? data.usuario.find(
                              (user) =>
                                user.id_usuario === +object.item.usuario_resgatante
                            ).nome
                          : ""}</p>
                  </div>
                )}

              </div>
              {panel === "found" && payload.user.admin && (
                <div className="flex flex-row space-x-4">
                  <button onClick={handleEdit} className="text-emerald-500">
                    {t("editar")}
                  </button>
                  <button onClick={handleReturn} className="text-emerald-500">
                    Devolver
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
