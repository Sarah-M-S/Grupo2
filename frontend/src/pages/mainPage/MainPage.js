import React, { useEffect, useState } from "react";

import LeftPanel from "./LeftPanel";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import FoundPanel from "./FoundPanel";
import ReportsPanel from "./ReportsPanel";
import UserPanel from "./UserPanel";
import { useSearchContext } from "../../hooks/useSearchContext";
import useDeleteItem from "../../hooks/useDeleteItem";

import ReturnedPanel from "./RetunedPanel";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [display, setDisplay] = useState("found");
  const handleDisplay = (key) => {
    setDisplay(key);
  };
  const { dispatch } = useSearchContext();
  const [deleting, setDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [objectToBeDeleted, setObjectToBeDeleted] = useState(null);
  const navigate = useNavigate();
  const { deleteItem } = useDeleteItem();

  const handleConfirmDelete = (object) => {
    setDeleting(true);
    setObjectToBeDeleted(object);
  };

  const handleDelete = async () => {
    await deleteItem(objectToBeDeleted.item.id_item);
    setDeleting(false);
    setDeleted(true);
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleAbortExclusion = () => {
    setDeleting(false);
  };

  useEffect(() => {
    dispatch({
      display: null,
      category: null,
      date: null,
      place: null,
      search: null,
    });
  }, [display]);

  return (
    <div className="flex h-screen w-screen overflow-clip">
      {/* área da esquerda */}

      {deleting && objectToBeDeleted && (
        <div className="w-full h-full absolute bg-slate-300/50 z-10 flex flex-col justify-center items-center">
          <div className="bg-white h-[40%] w-[30%] flex flex-col space-y-8 items-center justify-center">
            <h2 className="text-3xl text-center font-semibold text-emerald-500 md:text-[220%]">
              Tem certeza?
            </h2>
            <p className="px-4 h-12 text-emerald-950 font-semibold text-lg">
              Deseja mesmo excluir {objectToBeDeleted.item.titulo}? Esse
              processo não pode ser desfeito
            </p>
            <div className="flex flex-rox space-x-4">
              <button
                onClick={handleAbortExclusion}
                className="bg-emerald-950 rounded-2xl py-2 px-2 text-lg font-semibold text-emerald-500"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="text-emerald-950 rounded-full px-2 text-lg font-semibold"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {deleted && (
        <div className="w-full h-full absolute bg-slate-300/50 z-10 flex flex-col justify-center items-center">
          <div className="bg-white h-[40%] w-[30%] flex flex-col space-y-8 items-center justify-center">
            <h2 className="text-3xl text-center font-semibold text-emerald-500 md:text-[220%]">
              Objeto excluido com sucesso
            </h2>

            <div className="flex flex-rox space-x-4">
              <button
                onClick={handleBack}
                className="bg-emerald-950 rounded-2xl py-2 px-16 text-lg font-semibold text-emerald-500"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}

      <LeftPanel state={display} onDisplayChange={handleDisplay} />

      {/* área principal */}
      <div className="flex flex-col h-screen w-screen">
        {/* area da pesquisa */}
        <div className="pl-64 py-8 flex items-center justify-center w-[full] bg-emerald-900">
          <div className="w-[40%]">
            <SearchBar display={display} />
          </div>
        </div>

        {/* lista */}
        <div className="flex justify-end h-full">
          <div className="flex flex-col pt-2 space-y-4 h-full w-[82%] px-16">
            {/* filtros */}

            <Filters display={display} />

            {/* items */}

            {/* cards de objeto */}
            {display === "found" && (
              <FoundPanel onDelete={handleConfirmDelete} />
            )}

            {display === "reports" && (
              <ReportsPanel onDelete={handleConfirmDelete} />
            )}

            {display === "users" && <UserPanel display={display} />}

            {display === "returned" && (
              <ReturnedPanel onDelete={handleConfirmDelete} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
