import React, { useEffect, useState } from "react";

import FinalizeButton from "./FinalizeButton";
import RestartButton from "./RestartButton";
import useFetchValues from "../../hooks/useFetchValues";

import { useTranslation } from "react-i18next";
import { useAuthContext } from "../../hooks/useAuthContext";
import useFetchData from "../../hooks/useFetchData";
import SearchBar from "../mainPage/SearchBar";
import { useSearchContext } from "../../hooks/useSearchContext";

export default function DataConfirm({
  onRestart,
  onNext,
  dataToConfirm,
  isSubmitting,
  error,
}) {
  const [url, setUrl] = useState("/admin/list/usuarios");
  const { loading, data } = useFetchData(url);
  const [selectedUser, setSelectedUser] = useState(null);
  const { payload } = useAuthContext();
  const { categories, colors, places, dependencies } = useFetchValues(
    dataToConfirm.place
  );
  const [check, setCheck] = useState(false);
  const { dispatch, search } = useSearchContext();

  const handleCheck = () => {
    setCheck(!check);
  };

  console.log(selectedUser)

  const handleNext = () => {
    console.log("oi")
    selectedUser ? onNext(selectedUser) : onNext();
  };

  const handleRestart = () => {
    onRestart();
  };

  const { t } = useTranslation();

  useEffect(() => {
    const query = search
      ? `/admin/search/usuario/?nome=${search}`
      : "/admin/list/usuarios";
    setUrl(query);
  }, [search]);

  return (
    <div className="h-[90%] w-full flex flex-col items-center justify-center space-y-2">
      <div className="flex flex-row w-full justify-center items-center space-x-4">
        <div className="flex flex-col w-full max-w-md space-y-12 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl text-start font-semibold text-emerald-950 md:text-[220%] pb-4">
              {t("confirmeSeusDados")}
            </h2>
            <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
              {t("objeto")}: {dataToConfirm.object}
            </h3>
            <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
              {t("categoria")}:{" "}
              {categories
                ? categories.categorias.find(
                    (cat) => cat.id_categoria === +dataToConfirm.category
                  ).nome
                : ""}
            </h3>
            <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
              {t("cor")}:{" "}
              {colors
                ? colors.cor.find(
                    (color) => color.id_cor === +dataToConfirm.color
                  ).nome
                : ""}
            </h3>
            <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
              {t("marca")}: {dataToConfirm.brand}
            </h3>
            <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
              {t("objetoDetalhes")}:{" "}
              {dataToConfirm.details
                ? dataToConfirm.details
                : "Sem detalhes informados"}
            </h3>
            <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
              {t("data")}: {dataToConfirm.date}
            </h3>
            <h3 className="inline-flex text-xl text-start font-semibold text-emerald-950 md:text-[100%]">
              {t("local")}:{" "}
              {places
                ? places.locais.find(
                    (place) => place.id_local === +dataToConfirm.place
                  ).titulo
                : ""}{" "}
              /
              {dependencies
                ? dependencies.dependencias.find(
                    (dependencie) =>
                      dependencie.id_dependencia === +dataToConfirm.dependencie
                  ).titulo
                : ""}
            </h3>
          </div>
        </div>
        {payload.user.admin && (
          <div className="w-full max-w-md bg-white rounded-3xl py-16 px-8 md:w-[30%]">
            <div className="flex flex-row space-x-2">
              <h2>Reportar em nome de terceiro?</h2>
              <input type="checkbox" onClick={handleCheck}></input>
            </div>

            {check && payload.user.admin && (
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col mx-2">
                  <SearchBar />
                </div>
                <div className="flex h-32 w-full overflow-clip px-2 ">
                  {data && (
                    <div className="h-full w-full flex flex-col space-y-2 overflow-y-auto bg-emerald-100 rounded-2xl">
                      <ul className=" py-1 space-y-1">
                        {data &&
                          data.usuario.map((user) => (
                            <li
                              key={user.id}
                              onClick={() => setSelectedUser(user)}
                              className={`cursor-pointer px-2 ${
                                selectedUser &&
                                selectedUser.id_usuario === user.id_usuario
                                  ? "border-2 border-emerald-950 rounded-2xl"
                                  : ""
                              }`}
                            >
                              {user.nome}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        {isSubmitting && <p>Enviando</p>}
        {error && <p>{error}</p>}
      </div>

      <FinalizeButton onClick={handleNext} />
      <RestartButton onClick={handleRestart} />
    </div>
  );
}
